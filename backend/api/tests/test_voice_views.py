# api/tests/test_voice_views.py
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from unittest.mock import patch
from django.utils import timezone
from datetime import timedelta
from users.models import User, UserProfile
from api.models import VoiceCall

class VoiceViewsTests(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='password', email='test@test.com')
        UserProfile.objects.create(user=self.user)
        self.client.force_authenticate(user=self.user)

    @patch('api.views.voice_views.PaystackClient')
    def test_voice_call_schedule_success_free_user(self, MockPaystackClient):
        """Test scheduling a voice call for a free user, which requires payment."""
        # Mock the paystack client
        mock_paystack_instance = MockPaystackClient.return_value
        mock_response = {
            'status': True,
            'data': {
                'authorization_url': 'http://pay.co',
                'access_code': '123',
                'reference': 'pay-ref'
            }
        }
        mock_paystack_instance.initialize_transaction.return_value = mock_response

        self.user.subscription_tier = 'free'
        self.user.save()

        url = reverse('voice-schedule')
        data = {
            'topic': 'Urgent discussion about taxes',
            'scheduled_time': timezone.now() + timedelta(hours=2),
            'preferred_language': 'en'
        }
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['requires_payment'])
        self.assertIn('payment_data', response.data)
        self.assertEqual(VoiceCall.objects.count(), 1)
        self.assertEqual(response.data['cost'], 10000) # Free user cost is NGN 10,000

    def test_voice_call_schedule_success_business_user(self):
        """Test scheduling a voice call for a business user (no payment required)."""
        self.user.subscription_tier = 'business'
        self.user.save()

        url = reverse('voice-schedule')
        data = {
            'topic': 'Business tax planning',
            'scheduled_time': timezone.now() + timedelta(hours=3),
            'preferred_language': 'en'
        }
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data['requires_payment'])
        self.assertEqual(VoiceCall.objects.count(), 1)
        self.assertEqual(VoiceCall.objects.first().cost, 0)

    def test_voice_call_schedule_in_past(self):
        """Test that a voice call cannot be scheduled in the past."""
        url = reverse('voice-schedule')
        data = {
            'topic': 'Time travel taxes',
            'scheduled_time': timezone.now() - timedelta(hours=1),
            'preferred_language': 'en'
        }
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_voice_call_list_api(self):
        """Test listing a user's voice calls."""
        VoiceCall.objects.create(user=self.user, topic="Call 1", scheduled_time=timezone.now(), call_reference="VC-001", preferred_language='en')
        VoiceCall.objects.create(user=self.user, topic="Call 2", scheduled_time=timezone.now(), call_reference="VC-002", preferred_language='en')

        url = reverse('voice-list')
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 2)

    def test_voice_call_detail_api(self):
        """Test retrieving details for a single voice call."""
        call = VoiceCall.objects.create(user=self.user, topic="Detail Call", scheduled_time=timezone.now(), call_reference="VC-003", preferred_language='en')
        url = reverse('voice-detail', kwargs={'pk': call.pk})
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['topic'], "Detail Call")

    def test_voice_call_cancel_api(self):
        """Test cancelling a scheduled voice call."""
        call = VoiceCall.objects.create(
            user=self.user, 
            topic="To be cancelled", 
            scheduled_time=timezone.now() + timedelta(days=2), # More than 24h away
            call_reference="VC-004",
            preferred_language='en',
            metadata={} # Ensure metadata field exists
        )
        url = reverse('voice-cancel', kwargs={'call_id': call.id})
        response = self.client.post(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'Voice call cancelled. Full refund processed.')
        
        call.refresh_from_db()
        self.assertEqual(call.status, 'cancelled')

    def test_voice_call_availability_api(self):
        """Test checking for available voice call slots."""
        # Block a slot
        slot_to_block = timezone.now().replace(hour=10, minute=0, second=0, microsecond=0)
        # Create a voice call within the test's scope, ensuring unique call_reference
        VoiceCall.objects.create(user=self.user, topic="Blocked Slot", scheduled_time=slot_to_block, call_reference="VC-BLOCKED", preferred_language='en')

        url = reverse('voice-availability') + f'?date={slot_to_block.strftime("%Y-%m-%d")}'
        response = self.client.get(url, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('available_slots', response.data)
        
        # Find the blocked slot in the response and check its availability
        found_slot = False
        for slot in response.data['available_slots']:
            if slot['start_time'].startswith(slot_to_block.strftime('%Y-%m-%dT%H:%M')):
                self.assertFalse(slot['is_available'])
                found_slot = True
                break
        
        self.assertTrue(found_slot, "The blocked slot was not found in the availability response.")
