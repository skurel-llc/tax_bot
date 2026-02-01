# api/tests/test_payment_views.py
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from unittest.mock import patch, MagicMock
from users.models import User, UserProfile
from api.models import PaymentTransaction, SubscriptionPlan

class PaymentViewsTests(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='password', email='test@test.com')
        UserProfile.objects.create(user=self.user)
        self.client.force_authenticate(user=self.user)
        self.plan = SubscriptionPlan.objects.create(
            name='Pro',
            plan_type='pro',
            price_monthly=5000.00
        )

    @patch('api.views.payment_views.PaystackClient')
    def test_initialize_payment_success(self, MockPaystackClient):
        """Test successful payment initialization."""
        # Mock the Paystack client
        mock_paystack_instance = MockPaystackClient.return_value
        mock_response = {
            'status': True,
            'message': 'Authorization URL created',
            'data': {
                'authorization_url': 'https://checkout.paystack.com/hnecydr5yj',
                'access_code': 'hnecydr5yj',
                'reference': 'test-ref-123'
            }
        }
        mock_paystack_instance.initialize_transaction.return_value = mock_response

        url = reverse('payment-initialize')
        data = {
            'amount': 5000.00,
            'payment_type': 'subscription',
            'plan_id': self.plan.id,
            'payment_method': 'card' # Added this missing field
        }
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['status'], 'success')
        self.assertEqual(response.data['data']['reference'], 'test-ref-123')
        
        # Check that a transaction record was created
        self.assertTrue(PaymentTransaction.objects.exists())
        transaction = PaymentTransaction.objects.first()
        self.assertEqual(transaction.user, self.user)
        self.assertEqual(transaction.status, 'pending')
        self.assertEqual(transaction.paystack_reference, 'test-ref-123')


    def test_initialize_payment_missing_amount(self):
        """Test payment initialization with missing amount."""
        url = reverse('payment-initialize')
        data = {'payment_type': 'subscription', 'plan_id': self.plan.id}
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    @patch('api.views.payment_views.PaystackClient')
    def test_verify_payment_success(self, MockPaystackClient):
        """Test successful payment verification."""
        # Create a pending transaction first
        transaction = PaymentTransaction.objects.create(
            user=self.user,
            amount=5000.00,
            status='pending',
            payment_method='card',
            paystack_reference='verify-ref-456'
        )

        # Mock the Paystack client
        mock_paystack_instance = MockPaystackClient.return_value
        mock_response = {
            'status': True,
            'data': {'status': 'success', 'reference': 'verify-ref-456'}
        }
        mock_paystack_instance.verify_transaction.return_value = mock_response

        url = reverse('payment-verify') + '?reference=verify-ref-456'
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['status'], 'success')

        # Refresh transaction and check status
        transaction.refresh_from_db()
        self.assertEqual(transaction.status, 'completed')

    @patch('api.views.payment_views.PaystackWebhookAPI.verify_signature', return_value=True)
    def test_paystack_webhook_charge_success(self, mock_verify_signature):
        """Test the Paystack webhook for a successful charge."""
        transaction = PaymentTransaction.objects.create(
            user=self.user, 
            amount=5000.00, 
            status='pending',
            payment_method='card',
            paystack_reference='webhook-ref-789'
        )

        url = reverse('paystack-webhook')
        payload = {
            'event': 'charge.success',
            'data': {
                'reference': 'webhook-ref-789',
                'status': 'success',
                'amount': 500000 # Paystack returns amount in kobo
            }
        }
        response = self.client.post(url, payload, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        transaction.refresh_from_db()
        self.assertEqual(transaction.status, 'completed')

    def test_subscription_plans_list(self):
        """Test retrieving the list of subscription plans."""
        SubscriptionPlan.objects.create(name='Business', plan_type='business', price_monthly=20000)
        
        url = reverse('subscription-plans')
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2) # Includes the self.plan and the new one
        self.assertEqual(response.data[0]['name'], 'Pro')
    
    def test_payment_history_list(self):
        """Test retrieving the user's payment history."""
        PaymentTransaction.objects.create(user=self.user, amount=100, status='completed')
        PaymentTransaction.objects.create(user=self.user, amount=200, status='failed')

        url = reverse('payment-history')
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 2)
