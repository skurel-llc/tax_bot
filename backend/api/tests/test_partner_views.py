# api/tests/test_partner_views.py
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from users.models import User, UserProfile
from api.models import PartnerFirm, LeadReferral

class PartnerViewsTests(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='password')
        UserProfile.objects.create(user=self.user)
        self.client.force_authenticate(user=self.user)
        
        self.firm1 = PartnerFirm.objects.create(
            name='Good Tax Advisors',
            firm_type='tax',
            is_active=True,
            is_verified=True,
            contact_email='gta@test.com'
        )
        self.firm2 = PartnerFirm.objects.create(
            name='Inactive Auditors',
            firm_type='audit',
            is_active=False,
            is_verified=True,
            contact_email='ia@test.com'
        )
        self.firm3 = PartnerFirm.objects.create(
            name='Unverified Legal',
            firm_type='legal',
            is_active=True,
            is_verified=False,
            contact_email='ul@test.com'
        )

    def test_partner_firm_list_api(self):
        """Test listing only active and verified partner firms."""
        url = reverse('partner-list')
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Only the active and verified firm should be listed
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['name'], 'Good Tax Advisors')

    def test_partner_firm_detail_api(self):
        """Test retrieving details for a single active, verified partner firm."""
        url = reverse('partner-detail', kwargs={'pk': self.firm1.pk})
        response = self.client.get(url, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], self.firm1.name)

    def test_partner_firm_detail_not_found_for_inactive(self):
        """Test that inactive or unverified firms cannot be retrieved via detail view."""
        # Test inactive firm
        inactive_url = reverse('partner-detail', kwargs={'pk': self.firm2.pk})
        inactive_response = self.client.get(inactive_url, format='json')
        self.assertEqual(inactive_response.status_code, status.HTTP_404_NOT_FOUND)
        
        # Test unverified firm
        unverified_url = reverse('partner-detail', kwargs={'pk': self.firm3.pk})
        unverified_response = self.client.get(unverified_url, format='json')
        self.assertEqual(unverified_response.status_code, status.HTTP_404_NOT_FOUND)

    def test_lead_referral_create_success(self):
        """Test creating a lead referral successfully."""
        url = reverse('lead-referral')
        data = {
            'partner_firm': self.firm1.pk,
            'reason': 'I need help with my corporate taxes.'
        }
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(LeadReferral.objects.count(), 1)
        
        referral = LeadReferral.objects.first()
        self.assertEqual(referral.user, self.user)
        self.assertEqual(referral.partner_firm, self.firm1)
        self.assertEqual(referral.status, 'pending')

    def test_lead_referral_create_for_inactive_firm(self):
        """Test that a lead referral cannot be created for an inactive firm."""
        url = reverse('lead-referral')
        data = {
            'partner_firm': self.firm2.pk, # Inactive firm
            'reason': 'This should fail.'
        }
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(LeadReferral.objects.count(), 0)

    def test_my_referrals_list_api(self):
        """Test listing a user's own lead referrals."""
        LeadReferral.objects.create(user=self.user, partner_firm=self.firm1, reason='Reason 1')
        
        # Create another user and referral to ensure we only get our own
        other_user = User.objects.create_user(username='otheruser', password='password')
        UserProfile.objects.create(user=other_user)
        LeadReferral.objects.create(user=other_user, partner_firm=self.firm1, reason='Reason 2')

        url = reverse('my-referrals')
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['reason'], 'Reason 1')
