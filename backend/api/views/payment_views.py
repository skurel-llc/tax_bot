# api/views/payment_views.py
import hashlib
import hmac
import json
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from api.models import PaymentTransaction, SubscriptionPlan, VoiceCall
from api.serializers import PaymentTransactionSerializer, SubscriptionPlanSerializer
from api.paystack_client import PaystackClient
from users.models import User


class InitializePaymentAPI(APIView):
    """Initialize a Paystack payment"""
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        user = request.user
        amount = request.data.get('amount')
        payment_type = request.data.get('payment_type', 'other')
        plan_id = request.data.get('plan_id')
        voice_call_id = request.data.get('voice_call_id')
        
        if not amount:
            return Response(
                {'error': 'Amount is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Validate payment type
        if payment_type == 'subscription' and not plan_id:
            return Response(
                {'error': 'Plan ID is required for subscription'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if payment_type == 'voice_call' and not voice_call_id:
            return Response(
                {'error': 'Voice call ID is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Get related objects
        subscription_plan = None
        voice_call = None
        
        if plan_id:
            try:
                subscription_plan = SubscriptionPlan.objects.get(id=plan_id)
                amount = subscription_plan.price_monthly
            except SubscriptionPlan.DoesNotExist:
                return Response(
                    {'error': 'Invalid plan ID'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        if voice_call_id:
            try:
                voice_call = VoiceCall.objects.get(id=voice_call_id, user=user)
                amount = voice_call.cost
            except VoiceCall.DoesNotExist:
                return Response(
                    {'error': 'Invalid voice call ID'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        # Initialize Paystack payment
        paystack = PaystackClient()
        
        metadata = {
            'user_id': user.id,
            'payment_type': payment_type,
            'plan_id': plan_id,
            'voice_call_id': voice_call_id
        }
        
        try:
            response = paystack.initialize_transaction(
                email=user.email,
                amount=float(amount),
                metadata=metadata
            )
            
            if response.get('status'):
                data = response['data']
                
                # Create payment transaction record
                transaction = PaymentTransaction.objects.create(
                    user=user,
                    amount=amount,
                    payment_type=payment_type,
                    status='pending',
                    paystack_reference=data['reference'],
                    paystack_access_code=data['access_code'],
                    paystack_authorization_url=data['authorization_url'],
                    subscription_plan=subscription_plan,
                    voice_call=voice_call,
                    metadata={
                        'initialization_response': response,
                        'user_metadata': metadata
                    }
                )
                
                return Response({
                    'status': 'success',
                    'message': 'Payment initialized',
                    'data': {
                        'reference': data['reference'],
                        'authorization_url': data['authorization_url'],
                        'access_code': data['access_code'],
                        'amount': amount,
                        'currency': 'NGN',
                        'transaction_id': transaction.id
                    }
                })
            else:
                return Response({
                    'status': 'error',
                    'message': response.get('message', 'Payment initialization failed')
                }, status=status.HTTP_400_BAD_REQUEST)
                
        except Exception as e:
            return Response({
                'status': 'error',
                'message': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class VerifyPaymentAPI(APIView):
    """Verify a Paystack payment"""
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        reference = request.query_params.get('reference')
        
        if not reference:
            return Response(
                {'error': 'Reference is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            transaction = PaymentTransaction.objects.get(
                paystack_reference=reference,
                user=request.user
            )
        except PaymentTransaction.DoesNotExist:
            return Response(
                {'error': 'Transaction not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Verify with Paystack
        paystack = PaystackClient()
        
        try:
            response = paystack.verify_transaction(reference)
            
            if response.get('status'):
                data = response['data']
                
                if data['status'] == 'success':
                    # Mark transaction as successful
                    transaction.mark_as_success(data)
                    
                    # Update user subscription if applicable
                    if transaction.subscription_plan:
                        request.user.subscription_tier = transaction.subscription_plan.plan_type
                        request.user.subscription_expires = timezone.now() + timezone.timedelta(days=30)
                        request.user.save()
                    
                    return Response({
                        'status': 'success',
                        'message': 'Payment verified successfully',
                        'data': {
                            'transaction_id': transaction.id,
                            'amount': transaction.amount,
                            'currency': transaction.currency,
                            'payment_type': transaction.payment_type,
                            'status': transaction.status
                        }
                    })
                else:
                    transaction.status = 'failed'
                    transaction.metadata['verification_response'] = response
                    transaction.save()
                    
                    return Response({
                        'status': 'failed',
                        'message': 'Payment failed or was not successful'
                    }, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({
                    'status': 'error',
                    'message': response.get('message', 'Verification failed')
                }, status=status.HTTP_400_BAD_REQUEST)
                
        except Exception as e:
            return Response({
                'status': 'error',
                'message': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@method_decorator(csrf_exempt, name='dispatch')
class PaystackWebhookAPI(APIView):
    """Handle Paystack webhooks"""
    
    def post(self, request):
        # Verify webhook signature
        signature = request.headers.get('x-paystack-signature')
        
        if not self.verify_signature(request.body, signature):
            return Response({'status': 'invalid signature'}, status=status.HTTP_400_BAD_REQUEST)
        
        payload = json.loads(request.body)
        event = payload.get('event')
        data = payload.get('data')
        
        if event == 'charge.success':
            reference = data.get('reference')
            
            try:
                transaction = PaymentTransaction.objects.get(paystack_reference=reference)
                transaction.mark_as_success(data)
                
                # Send notification to user
                self.send_payment_success_notification(transaction)
                
            except PaymentTransaction.DoesNotExist:
                # Create new transaction if not found (direct payments)
                pass
        
        elif event == 'transfer.success':
            # Handle successful transfers to partners
            self.handle_partner_payout(data)
        
        elif event == 'subscription.create':
            # Handle subscription creation
            self.handle_subscription_creation(data)
        
        return Response({'status': 'success'})
    
    def verify_signature(self, payload, signature):
        """Verify Paystack webhook signature"""
        secret = settings.PAYSTACK_SECRET_KEY
        computed_signature = hmac.new(
            secret.encode('utf-8'),
            payload,
            hashlib.sha512
        ).hexdigest()
        
        return hmac.compare_digest(computed_signature, signature)
    
    def send_payment_success_notification(self, transaction):
        """Send payment success notification"""
        # TODO: Implement notification system
        pass
    
    def handle_partner_payout(self, data):
        """Handle partner commission payouts"""
        # TODO: Implement partner payout logic
        pass
    
    def handle_subscription_creation(self, data):
        """Handle subscription creation"""
        # TODO: Implement subscription handling
        pass


class SubscriptionPlansAPI(generics.ListAPIView):
    """Get available subscription plans"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = SubscriptionPlanSerializer
    
    def get_queryset(self):
        return SubscriptionPlan.objects.filter(is_active=True)


class PaymentHistoryAPI(generics.ListAPIView):
    """Get user's payment history"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PaymentTransactionSerializer
    
    def get_queryset(self):
        return PaymentTransaction.objects.filter(
            user=self.request.user
        ).order_by('-created_at')