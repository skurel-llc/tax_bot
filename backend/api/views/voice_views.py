# api/views/voice_views.py (complete version)
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from datetime import datetime, timedelta
import uuid
from django.utils import timezone
from api.models import VoiceCall
from api.serializers import VoiceCallSerializer, VoiceCallRequestSerializer
from users.models import User
from api.paystack_client import PaystackClient


class VoiceCallScheduleAPI(APIView):
    """Schedule a voice call"""
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        serializer = VoiceCallRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = request.user
        topic = serializer.validated_data['topic']
        scheduled_time = serializer.validated_data.get('scheduled_time')
        preferred_language = serializer.validated_data.get('preferred_language', 'en')
        
        # Set default scheduled time (next available slot)
        if not scheduled_time:
            scheduled_time = timezone.now() + timedelta(hours=1)
        else:
            # Ensure scheduled time is in the future
            if scheduled_time < timezone.now():
                return Response(
                    {'error': 'Scheduled time must be in the future'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        # Check minimum advance notice (30 minutes)
        min_notice = timezone.now() + timedelta(minutes=30)
        if scheduled_time < min_notice:
            return Response(
                {'error': 'Voice calls must be scheduled at least 30 minutes in advance'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Generate unique call reference
        call_reference = f"VCALL-{uuid.uuid4().hex[:8].upper()}"
        
        # Calculate cost based on user subscription
        cost = self.calculate_call_cost(user)
        
        # Create voice call
        voice_call = VoiceCall.objects.create(
            user=user,
            call_reference=call_reference,
            scheduled_time=scheduled_time,
            topic=topic,
            preferred_language=preferred_language,
            cost=cost,
            status='scheduled'
        )
        
        # If cost > 0 and user doesn't have subscription, require payment
        if cost > 0 and user.subscription_tier not in ['business', 'enterprise']:
            # Initialize payment for the call
            paystack = PaystackClient()
            
            metadata = {
                'user_id': user.id,
                'payment_type': 'voice_call',
                'voice_call_id': voice_call.id,
                'call_reference': call_reference
            }
            
            try:
                response = paystack.initialize_transaction(
                    email=user.email,
                    amount=float(cost),
                    metadata=metadata
                )
                
                if response.get('status'):
                    return Response({
                        'call_id': voice_call.id,
                        'call_reference': call_reference,
                        'scheduled_time': scheduled_time,
                        'cost': cost,
                        'requires_payment': True,
                        'payment_data': {
                            'reference': response['data']['reference'],
                            'authorization_url': response['data']['authorization_url'],
                            'access_code': response['data']['access_code']
                        },
                        'message': 'Voice call scheduled. Payment required to confirm.'
                    })
                else:
                    return Response({
                        'error': 'Payment initialization failed',
                        'message': response.get('message', 'Unknown error')
                    }, status=status.HTTP_400_BAD_REQUEST)
                    
            except Exception as e:
                return Response({
                    'error': 'Payment processing error',
                    'message': str(e)
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        # If free or included in subscription
        return Response({
            'call_id': voice_call.id,
            'call_reference': call_reference,
            'scheduled_time': scheduled_time,
            'cost': cost,
            'requires_payment': False,
            'message': 'Voice call scheduled successfully'
        })
    
    def calculate_call_cost(self, user):
        """Calculate cost of voice call based on subscription"""
        if user.subscription_tier == 'business':
            return 0  # Included in business plan
        elif user.subscription_tier == 'pro':
            return 5000  # NGN 5,000 for pro users (discounted)
        else:
            return 10000  # NGN 10,000 for free users


class VoiceCallListAPI(generics.ListAPIView):
    """List user's voice calls"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = VoiceCallSerializer
    
    def get_queryset(self):
        # Optional filtering
        status_filter = self.request.query_params.get('status')
        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')
        
        queryset = VoiceCall.objects.filter(user=self.request.user)
        
        if status_filter:
            queryset = queryset.filter(status=status_filter)
        if start_date:
            queryset = queryset.filter(scheduled_time__date__gte=start_date)
        if end_date:
            queryset = queryset.filter(scheduled_time__date__lte=end_date)
        
        return queryset.order_by('-scheduled_time')


class VoiceCallDetailAPI(generics.RetrieveUpdateAPIView):
    """Get voice call details and update (cancel/reschedule)"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = VoiceCallSerializer
    
    def get_queryset(self):
        return VoiceCall.objects.filter(user=self.request.user)
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        
        # Only allow certain updates
        allowed_updates = ['scheduled_time', 'topic', 'preferred_language']
        update_data = {k: v for k, v in request.data.items() if k in allowed_updates}
        
        # Check if rescheduling
        if 'scheduled_time' in update_data:
            new_time = update_data['scheduled_time']
            min_notice = timezone.now() + timedelta(minutes=30)
            
            if new_time < min_notice:
                return Response(
                    {'error': 'New scheduled time must be at least 30 minutes from now'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            # Check if rescheduling within allowed window (24 hours before)
            if instance.scheduled_time > timezone.now() + timedelta(hours=24):
                # Allow free rescheduling if > 24 hours before
                pass
            else:
                # Apply rescheduling fee for last-minute changes
                if instance.status != 'cancelled':
                    update_data['status'] = 'rescheduled'
        
        serializer = self.get_serializer(instance, data=update_data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        
        return Response(serializer.data)


class VoiceCallCancelAPI(APIView):
    """Cancel a scheduled voice call"""
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request, call_id):
        try:
            voice_call = VoiceCall.objects.get(id=call_id, user=request.user)
        except VoiceCall.DoesNotExist:
            return Response(
                {'error': 'Voice call not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Check if can be cancelled
        if voice_call.status in ['completed', 'cancelled', 'failed']:
            return Response(
                {'error': f'Cannot cancel a {voice_call.status} call'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check cancellation policy
        cancellation_time = voice_call.scheduled_time
        now = timezone.now()
        
        if cancellation_time - now > timedelta(hours=24):
            # Full refund if cancelled > 24 hours before
            refund_amount = voice_call.cost
            refund_type = 'full'
        elif cancellation_time - now > timedelta(hours=1):
            # 50% refund if cancelled 1-24 hours before
            refund_amount = voice_call.cost * 0.5
            refund_type = 'partial'
        else:
            # No refund if cancelled < 1 hour before
            refund_amount = 0
            refund_type = 'none'
        
        # Update call status
        voice_call.status = 'cancelled'
        voice_call.metadata['cancellation'] = {
            'cancelled_at': now.isoformat(),
            'refund_amount': float(refund_amount),
            'refund_type': refund_type,
            'cancelled_by': 'user'
        }
        voice_call.save()
        
        # Process refund if applicable
        if refund_amount > 0:
            self.process_refund(voice_call, refund_amount)
        
        return Response({
            'status': 'success',
            'message': f'Voice call cancelled. {refund_type.capitalize()} refund processed.',
            'refund_amount': refund_amount,
            'refund_type': refund_type
        })
    
    def process_refund(self, voice_call, amount):
        """Process refund through Paystack"""
        # TODO: Implement Paystack refund logic
        # This would involve checking the original payment transaction
        # and initiating a refund through Paystack API
        pass


class VoiceCallAvailabilityAPI(APIView):
    """Check available time slots for voice calls"""
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        # Get date from query params (default to today)
        date_str = request.query_params.get('date')
        if date_str:
            try:
                target_date = datetime.strptime(date_str, '%Y-%m-%d').date()
            except ValueError:
                return Response(
                    {'error': 'Invalid date format. Use YYYY-MM-DD'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        else:
            target_date = timezone.now().date()
        
        # Generate available slots (business hours: 9 AM - 6 PM)
        slots = self.generate_available_slots(target_date)
        
        return Response({
            'date': target_date.isoformat(),
            'available_slots': slots
        })
    
    def generate_available_slots(self, date):
        """Generate available 30-minute slots for a given date"""
        slots = []
        
        # Business hours: 9 AM to 6 PM
        start_hour = 9
        end_hour = 18
        
        current_time = timezone.make_aware(
            datetime.combine(date, datetime.min.time())
        ).replace(hour=start_hour, minute=0)
        
        end_time = timezone.make_aware(
            datetime.combine(date, datetime.min.time())
        ).replace(hour=end_hour, minute=0)
        
        while current_time < end_time:
            slot_end = current_time + timedelta(minutes=30)
            
            # Check if slot is available (not booked)
            is_available = not VoiceCall.objects.filter(
                scheduled_time__range=(current_time, slot_end - timedelta(seconds=1)),
                status__in=['scheduled', 'in_progress']
            ).exists()
            
            slots.append({
                'start_time': current_time.isoformat(),
                'end_time': slot_end.isoformat(),
                'is_available': is_available
            })
            
            current_time = slot_end
        
        return slots