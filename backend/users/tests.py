# users/tests.py
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import User, UserProfile
from datetime import date, timedelta

class UserModelTests(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser', 
            email='test@example.com', 
            password='testpassword123'
        )

    def test_user_creation(self):
        """Test that a user is created successfully."""
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(self.user.username, 'testuser')
        self.assertTrue(self.user.check_password('testpassword123'))
        self.assertFalse(self.user.is_superuser)

    def test_user_profile_creation(self):
        """Test that a UserProfile is automatically created when a User is created."""
        user = User.objects.create_user(
            username='newprofileuser', 
            email='profile@example.com', 
            password='password'
        )
        self.assertTrue(hasattr(user, 'profile'))
        self.assertIsInstance(user.profile, UserProfile)

    def test_can_make_query_free_tier(self):
        """Test the query limit logic for a free-tier user."""
        self.user.subscription_tier = 'free'
        self.user.query_limit = 5
        self.user.queries_used = 0
        self.user.save()

        self.assertTrue(self.user.can_make_query())
        
        # Use up all queries
        for _ in range(5):
            self.user.increment_query_count()
        
        self.assertFalse(self.user.can_make_query())
        self.assertEqual(self.user.queries_used, 5)

    def test_can_make_query_pro_tier(self):
        """Test that pro-tier users have unlimited queries."""
        self.user.subscription_tier = 'pro'
        self.user.query_limit = 100 # This should be ignored
        self.user.queries_used = 150
        self.user.save()
        
        self.assertTrue(self.user.can_make_query())

    def test_query_count_reset(self):
        """Test that the query count resets on a new day."""
        self.user.queries_used = self.user.query_limit
        self.user.reset_date = date.today() - timedelta(days=1)
        self.user.save()

        # The check should trigger a reset
        self.assertTrue(self.user.can_make_query())
        self.assertEqual(self.user.queries_used, 0)
        self.assertEqual(self.user.reset_date, date.today())

    def test_increment_query_count(self):
        """Test that the query count increments correctly."""
        initial_count = self.user.queries_used
        self.user.increment_query_count()
        self.assertEqual(self.user.queries_used, initial_count + 1)


class UserAPITests(APITestCase):

    def test_register_user_success(self):
        """Test user registration successfully."""
        url = reverse('register')
        data = {
            'username': 'newuser',
            'email': 'new@example.com',
            'password': 'newpassword123',
            'first_name': 'New',
            'last_name': 'User',
            'user_type': 'sme',
            'company_name': 'New Co'
        }
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, 'newuser')
        self.assertTrue(UserProfile.objects.filter(user__username='newuser').exists())

    def test_register_user_invalid_data(self):
        """Test user registration with invalid data (e.g., missing password)."""
        url = reverse('register')
        data = {'username': 'baduser', 'email': 'bad@example.com'}
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)

    def test_login_user_success(self):
        """Test user login with correct credentials."""
        # First, create a user
        user = User.objects.create_user(username='loginuser', password='loginpassword')
        
        url = reverse('login')
        data = {'username': 'loginuser', 'password': 'loginpassword'}
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)
        self.assertEqual(response.data['user']['username'], 'loginuser')

    def test_login_user_invalid_credentials(self):
        """Test user login with incorrect credentials."""
        user = User.objects.create_user(username='loginuser', password='loginpassword')
        UserProfile.objects.create(user=user) # Explicitly create for this test where the user might not be logged in directly.
        
        url = reverse('login')
        data = {'username': 'loginuser', 'password': 'wrongpassword'}
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('non_field_errors', response.data)

    def test_get_user_details_authenticated(self):
        """Test retrieving user details for an authenticated user."""
        user = User.objects.create_user(username='authuser', password='authpassword')
        
        self.client.force_authenticate(user=user)
        
        url = reverse('user')
        response = self.client.get(url, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], 'authuser')

    def test_get_user_details_unauthenticated(self):
        """Test that unauthenticated users cannot retrieve user details."""
        url = reverse('user')
        response = self.client.get(url, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_update_user_profile(self):
        """Test updating a user's profile."""
        user = User.objects.create_user(username='profileuser', password='profilepassword')
        
        self.client.force_authenticate(user=user)
        
        url = reverse('profile-update')
        data = {
            'tax_identification_number': '1234567890',
            'employees_count': 10,
            'preferred_language': 'fr'
        }
        response = self.client.put(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        # Refresh profile from DB and check updated fields
        user.profile.refresh_from_db()
        self.assertEqual(user.profile.tax_identification_number, '1234567890')
        self.assertEqual(user.profile.employees_count, 10)
        self.assertEqual(user.profile.preferred_language, 'fr')

    def test_update_profile_read_only_fields(self):
        """Test that read-only fields in the profile cannot be updated."""
        user = User.objects.create_user(username='profileuser', password='profilepassword')
        
        self.client.force_authenticate(user=user)
        
        url = reverse('profile-update')
        # Try to update the 'user' field, which should be read-only
        data = {'user': 999, 'annual_revenue': 50000.00}
        
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        user.profile.refresh_from_db()
        # The user field should NOT have changed
        self.assertEqual(user.profile.user.id, user.id)
        # The other field should have changed
        self.assertEqual(user.profile.annual_revenue, 50000.00)