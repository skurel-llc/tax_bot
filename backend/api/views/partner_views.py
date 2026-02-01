# api/views/partner_views.py (complete version)
from rest_framework import generics, permissions, filters, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from django.utils import timezone
from api.models import PartnerFirm, LeadReferral, User
from api.serializers import PartnerFirmSerializer, LeadReferralSerializer
from api.paystack_client import PaystackClient


class PartnerFirmListAPI(generics.ListAPIView):
    """List partner firms with filtering"""
    serializer_class = PartnerFirmSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['firm_type', 'is_verified']
    search_fields = ['name', 'description', 'services', 'states_covered']
    ordering_fields = ['name', 'rating', 'review_count']
    ordering = ['name']
    
    def get_queryset(self):
        queryset = PartnerFirm.objects.filter(is_active=True, is_verified=True)
        
        # Filter by state
        state = self.request.query_params.get('state')
        if state:
            queryset = queryset.filter(states_covered__contains=[state])
        
        return queryset


class PartnerFirmDetailAPI(generics.RetrieveAPIView):
    """Get detailed information about a partner firm"""
    serializer_class = PartnerFirmSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = PartnerFirm.objects.filter(is_active=True, is_verified=True)


class LeadReferralCreateAPI(generics.CreateAPIView):
    """Create a lead referral to a partner firm"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = LeadReferralSerializer
    
    def perform_create(self, serializer):
        partner_firm = serializer.validated_data['partner_firm']
        
        # Check if firm is active and verified
        if not partner_firm.is_active or not partner_firm.is_verified:
            raise serializers.ValidationError(
                "This partner firm is not currently accepting referrals"
            )
        
        # Check for duplicate active referral (last 30 days)
        recent_referral = LeadReferral.objects.filter(
            user=self.request.user,
            partner_firm=partner_firm,
            created_at__gte=timezone.now() - timezone.timedelta(days=30),
            status__in=['pending', 'contacted']
        ).exists()
        
        if recent_referral:
            raise serializers.ValidationError(
                "You already have an active referral to this partner firm"
            )
        
        # Save the referral
        referral = serializer.save(user=self.request.user, status='pending')
        
        # Notify partner firm (TODO: Implement notification system)
        self.notify_partner_firm(referral)
        
        # Log the referral creation
        referral.metadata = {
            'created_at': timezone.now().isoformat(),
            'ip_address': self.request.META.get('REMOTE_ADDR', ''),
            'user_agent': self.request.META.get('HTTP_USER_AGENT', '')
        }
        referral.save()
    
    def notify_partner_firm(self, referral):
        """Notify partner firm about new lead"""
        # TODO: Implement email/SMS notification to partner
        # This could use Django signals or Celery task
        pass


class LeadReferralListAPI(generics.ListAPIView):
    """List user's lead referrals"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = LeadReferralSerializer
    
    def get_queryset(self):
        return LeadReferral.objects.filter(
            user=self.request.user
        ).select_related('partner_firm').order_by('-created_at')


class PartnerSignupRequestAPI(APIView):
    """Submit request to become a partner firm"""
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        # Check if user has partner permissions
        if request.user.user_type != 'tax_professional':
            return Response(
                {'error': 'Only tax professionals can register as partners'},
                status=status.HTTP_403_FORBIDDEN
            )
        
        data = request.data
        
        required_fields = [
            'firm_name', 'firm_type', 'services', 
            'states_covered', 'contact_email', 'contact_phone'
        ]
        
        for field in required_fields:
            if field not in data:
                return Response(
                    {'error': f'Missing required field: {field}'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        # Create partner firm application
        application = {
            'user_id': request.user.id,
            'firm_name': data['firm_name'],
            'firm_type': data['firm_type'],
            'services': data['services'],
            'states_covered': data['states_covered'],
            'contact_email': data['contact_email'],
            'contact_phone': data['contact_phone'],
            'website': data.get('website', ''),
            'description': data.get('description', ''),
            'years_of_experience': data.get('years_of_experience', 0),
            'team_size': data.get('team_size', 1),
            'certifications': data.get('certifications', []),
            'submitted_at': timezone.now().isoformat()
        }
        
        # Store application in user profile
        user_profile = request.user.profile
        if 'partner_applications' not in user_profile.notification_preferences:
            user_profile.notification_preferences['partner_applications'] = []
        
        user_profile.notification_preferences['partner_applications'].append(application)
        user_profile.save()
        
        # TODO: Notify admin about new partner application
        
        return Response({
            'status': 'success',
            'message': 'Partner application submitted successfully',
            'application_id': len(user_profile.notification_preferences['partner_applications']) - 1
        })


class PartnerCommissionAPI(APIView):
    """View partner commission earnings"""
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        # Only partners can view commissions
        if request.user.user_type != 'partner':
            return Response(
                {'error': 'Only partners can view commission earnings'},
                status=status.HTTP_403_FORBIDDEN
            )
        
        # Get partner firm
        try:
            partner_firm = PartnerFirm.objects.get(contact_email=request.user.email)
        except PartnerFirm.DoesNotExist:
            return Response(
                {'error': 'Partner firm not found for this user'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Calculate commission earnings
        referrals = LeadReferral.objects.filter(
            partner_firm=partner_firm,
            status='converted'
        )
        
        total_commission = sum([r.commission_earned for r in referrals])
        
        # Get monthly breakdown
        from django.db.models import Sum
        from django.db.models.functions import TruncMonth
        
        monthly_earnings = referrals.annotate(
            month=TruncMonth('updated_at')
        ).values('month').annotate(
            total=Sum('commission_earned')
        ).order_by('-month')
        
        return Response({
            'partner_firm': partner_firm.name,
            'total_commission': float(total_commission),
            'referral_count': referrals.count(),
            'conversion_rate': self.calculate_conversion_rate(partner_firm),
            'monthly_earnings': [
                {
                    'month': earning['month'].strftime('%Y-%m'),
                    'total': float(earning['total'] or 0)
                }
                for earning in monthly_earnings
            ],
            'pending_payout': self.calculate_pending_payout(partner_firm)
        })
    
    def calculate_conversion_rate(self, partner_firm):
        """Calculate lead conversion rate"""
        total_leads = LeadReferral.objects.filter(partner_firm=partner_firm).count()
        converted_leads = LeadReferral.objects.filter(
            partner_firm=partner_firm,
            status='converted'
        ).count()
        
        if total_leads > 0:
            return (converted_leads / total_leads) * 100
        return 0
    
    def calculate_pending_payout(self, partner_firm):
        """Calculate pending payout amount"""
        pending_referrals = LeadReferral.objects.filter(
            partner_firm=partner_firm,
            status='converted',
            commission_earned__gt=0
        ).exclude(metadata__contains={'payout_processed': True})
        
        total_pending = sum([r.commission_earned for r in pending_referrals])
        return float(total_pending)