# api/tests/test_ai_views.py
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from unittest.mock import patch, MagicMock
from users.models import User, UserProfile
from api.models import AIConversation, ChatQuery, LegalSource

class AIViewsTests(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='password', email='test@test.com')
        UserProfile.objects.create(user=self.user)
        self.client.force_authenticate(user=self.user)

    @patch('api.views.ai_views.GeminiClient')
    def test_ai_chat_success(self, MockGeminiClient):
        """Test the main AI chat endpoint successfully."""
        # Mock the Gemini client and its methods
        mock_gemini_instance = MockGeminiClient.return_value
        mock_gemini_instance.is_configured = True
        mock_gemini_instance.create_tax_prompt.return_value = "Generated Prompt"
        mock_gemini_instance.generate_response.return_value = ("This is an AI response.", 10)
        
        # Create some legal sources for the view to find
        LegalSource.objects.create(title="VAT Act", content="Test content about VAT", effective_date='2022-01-01')

        url = reverse('ai-chat')
        data = {'query': 'What is VAT?'}
        
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['response'], "This is an AI response.")
        self.assertIn('query_id', response.data)
        self.assertIn('conversation_id', response.data)
        self.assertEqual(response.data['tokens_used'], 10)

        # Verify a ChatQuery and AIConversation were created
        self.assertTrue(ChatQuery.objects.exists())
        self.assertTrue(AIConversation.objects.exists())

    def test_ai_chat_query_limit_exceeded(self):
        """Test that a user with an exceeded query limit is blocked."""
        self.user.subscription_tier = 'free'
        self.user.query_limit = 1
        self.user.queries_used = 1
        self.user.save()

        url = reverse('ai-chat')
        data = {'query': 'Another question'}
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_402_PAYMENT_REQUIRED)
        self.assertIn('error', response.data)

    def test_conversation_list_api(self):
        """Test listing a user's conversations."""
        AIConversation.objects.create(user=self.user, title='Conv 1')
        AIConversation.objects.create(user=self.user, title='Conv 2')

        url = reverse('conversation-list')
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 2)

    def test_conversation_detail_api(self):
        """Test retrieving a single conversation."""
        conversation = AIConversation.objects.create(user=self.user, title='Detail Test')
        url = reverse('conversation-detail', kwargs={'pk': conversation.pk})
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Detail Test')

    def test_conversation_delete_api(self):
        """Test 'deleting' (deactivating) a conversation."""
        conversation = AIConversation.objects.create(user=self.user, title='To Delete')
        url = reverse('conversation-detail', kwargs={'pk': conversation.pk})
        response = self.client.delete(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        
        conversation.refresh_from_db()
        self.assertFalse(conversation.is_active)

    def test_query_history_api(self):
        """Test retrieving a user's query history."""
        ChatQuery.objects.create(user=self.user, query_text='Query 1', response_text='Ans 1')
        ChatQuery.objects.create(user=self.user, query_text='Query 2', response_text='Ans 2')

        url = reverse('query-history')
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 2)

    def test_query_feedback_api(self):
        """Test submitting feedback for a query."""
        query = ChatQuery.objects.create(user=self.user, query_text='Query 1', response_text='Ans 1')
        url = reverse('query-feedback', kwargs={'query_id': query.id})
        data = {'score': 5, 'comment': 'Great answer!'}
        
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'Feedback submitted successfully')

        query.refresh_from_db()
        self.assertEqual(query.feedback_score, 5)
        self.assertEqual(query.feedback_comment, 'Great answer!')
