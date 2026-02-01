# api/tests/test_document_views.py
import os
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from django.conf import settings
from users.models import User, UserProfile
from api.models import FinancialDocument

class DocumentViewsTests(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='password')
        UserProfile.objects.create(user=self.user)
        self.client.force_authenticate(user=self.user)
        
        # Ensure the test media folder exists
        os.makedirs(os.path.join(settings.MEDIA_ROOT, 'financial_docs'), exist_ok=True)

    def tearDown(self):
        # Clean up created files
        for doc in FinancialDocument.objects.all():
            if doc.file:
                doc.file.delete()

    def test_document_upload_success(self):
        """Test successful document upload."""
        url = reverse('document-upload')
        # Create a dummy file
        dummy_file = SimpleUploadedFile("test.pdf", b"file_content", content_type="application/pdf")
        
        data = {'file': dummy_file, 'document_type': 'tax_return'}
        
        with self.settings(DEFAULT_FILE_STORAGE='django.core.files.storage.FileSystemStorage'):
            response = self.client.post(url, data, format='multipart')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('document_id', response.data)
        self.assertEqual(FinancialDocument.objects.count(), 1)
        
        doc = FinancialDocument.objects.first()
        self.assertEqual(doc.original_filename, 'test.pdf')
        self.assertEqual(doc.document_type, 'tax_return')

    def test_document_upload_invalid_file_type(self):
        """Test document upload with a disallowed file type."""
        url = reverse('document-upload')
        dummy_file = SimpleUploadedFile("test.exe", b"danger", content_type="application/octet-stream")
        
        data = {'file': dummy_file}
        response = self.client.post(url, data, format='multipart')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('error', response.data)

    def test_document_upload_limit(self):
        """Test that document upload limits are enforced."""
        self.user.subscription_tier = 'free' # 3 docs per month limit
        self.user.save()

        url = reverse('document-upload')
        dummy_file = SimpleUploadedFile("test.pdf", b"content", content_type="application/pdf")

        with self.settings(DEFAULT_FILE_STORAGE='django.core.files.storage.FileSystemStorage'):
            # Upload 3 documents successfully
            for i in range(3):
                data = {'file': SimpleUploadedFile(f"test{i}.pdf", b"c", "application/pdf")}
                res = self.client.post(url, data, format='multipart')
                self.assertEqual(res.status_code, status.HTTP_200_OK)
            
            # Try to upload a 4th one
            data = {'file': SimpleUploadedFile("test4.pdf", b"c", "application/pdf")}
            response = self.client.post(url, data, format='multipart')

        self.assertEqual(response.status_code, status.HTTP_402_PAYMENT_REQUIRED)
        self.assertEqual(FinancialDocument.objects.count(), 3)

    def test_document_list_api(self):
        """Test listing a user's documents."""
        FinancialDocument.objects.create(user=self.user, original_filename='doc1.pdf', document_type='invoice', file_size=1)
        FinancialDocument.objects.create(user=self.user, original_filename='doc2.pdf', document_type='receipt', file_size=1)
        
        url = reverse('document-list')
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 2)

    def test_document_detail_api(self):
        """Test retrieving a single document's details."""
        doc = FinancialDocument.objects.create(user=self.user, original_filename='doc1.pdf', file_size=1)
        url = reverse('document-detail', kwargs={'pk': doc.pk})
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['original_filename'], 'doc1.pdf')

    def test_document_delete_api(self):
        """Test deleting a document."""
        dummy_file = SimpleUploadedFile("delete_me.pdf", b"file_content")
        with self.settings(DEFAULT_FILE_STORAGE='django.core.files.storage.FileSystemStorage'):
            doc = FinancialDocument.objects.create(
                user=self.user, 
                original_filename='delete_me.pdf', 
                file=dummy_file,
                file_size=1
            )
        
        self.assertTrue(os.path.exists(doc.file.path))
        
        url = reverse('document-detail', kwargs={'pk': doc.pk})
        response = self.client.delete(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(FinancialDocument.objects.filter(pk=doc.pk).exists())
        # Check if the file was actually deleted from storage
        self.assertFalse(os.path.exists(doc.file.path))
