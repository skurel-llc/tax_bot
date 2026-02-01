# api/tests/test_models.py
from django.test import TestCase
from users.models import User
from api.models import (
    TaxCategory, LegalSource, ChatQuery, AIConversation,
    VoiceCall, PartnerFirm, LeadReferral, FinancialDocument,
    SubscriptionPlan, PaymentTransaction
)
from django.utils import timezone

class ApiModelTests(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', email='test@example.com', password='password')

    def test_tax_category_creation(self):
        category = TaxCategory.objects.create(
            name='Test VAT',
            tax_type='vat',
            description='Test VAT category'
        )
        self.assertEqual(str(category), 'Test VAT (Value Added Tax (VAT))')

    def test_legal_source_creation(self):
        source = LegalSource.objects.create(
            title='Test Act',
            source_type='act',
            reference='Test Act, Sec 1',
            content='Some legal text.',
            effective_date=timezone.now().date()
        )
        self.assertEqual(str(source), 'Test Act - Test Act, Sec 1')

    def test_chat_query_creation(self):
        query = ChatQuery.objects.create(
            user=self.user,
            query_text='What is VAT?',
            response_text='VAT is a consumption tax.'
        )
        self.assertEqual(str(query), f"{self.user.email}: What is VAT?...")

    def test_ai_conversation_creation(self):
        conversation = AIConversation.objects.create(
            user=self.user,
            title='VAT Conversation'
        )
        self.assertEqual(str(conversation), f"{self.user.email}: VAT Conversation")

    def test_voice_call_creation(self):
        call = VoiceCall.objects.create(
            user=self.user,
            call_reference='VC-123',
            scheduled_time=timezone.now(),
            topic='Urgent tax question'
        )
        self.assertEqual(str(call), f"Call VC-123 - {self.user.email}")

    def test_partner_firm_creation(self):
        firm = PartnerFirm.objects.create(
            name='Test Tax Firm',
            firm_type='tax',
            contact_email='firm@example.com'
        )
        self.assertEqual(str(firm), 'Test Tax Firm')

    def test_lead_referral_creation(self):
        firm = PartnerFirm.objects.create(name='Test Firm', firm_type='tax', contact_email='f@f.com')
        referral = LeadReferral.objects.create(
            user=self.user,
            partner_firm=firm,
            reason='Needs expert advice.'
        )
        self.assertEqual(str(referral), f"Lead from {self.user.email} to {firm.name}")

    def test_financial_document_creation(self):
        document = FinancialDocument.objects.create(
            user=self.user,
            document_type='invoice',
            original_filename='invoice.pdf',
            file_size=1024
        )
        self.assertEqual(str(document), f"{self.user.email} - invoice")

    def test_subscription_plan_creation(self):
        plan = SubscriptionPlan.objects.create(
            name='Pro Plan',
            plan_type='pro',
            price_monthly=100.00
        )
        self.assertEqual(str(plan), 'Pro Plan (pro)')

    def test_payment_transaction_creation(self):
        transaction = PaymentTransaction.objects.create(
            user=self.user,
            amount=100.00,
            payment_method='card'
        )
        self.assertEqual(str(transaction), f"Payment {transaction.id} - {self.user.email} - 100.00")
