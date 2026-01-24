# api/serializers.py
from rest_framework import serializers
from drf_spectacular.utils import extend_schema_field
from .models import (
    TaxCategory, LegalSource, ChatQuery, AIConversation,
    VoiceCall, PartnerFirm, LeadReferral, FinancialDocument,
    SubscriptionPlan, PaymentTransaction
)


class TaxCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TaxCategory
        fields = '__all__'


class LegalSourceSerializer(serializers.ModelSerializer):
    related_categories = TaxCategorySerializer(many=True, read_only=True)
    
    class Meta:
        model = LegalSource
        fields = '__all__'


class ChatQuerySerializer(serializers.ModelSerializer):
    user_email = serializers.EmailField(source='user.email', read_only=True)
    tax_categories_info = TaxCategorySerializer(source='tax_categories', many=True, read_only=True)
    legal_sources_info = LegalSourceSerializer(source='legal_sources', many=True, read_only=True)
    
    class Meta:
        model = ChatQuery
        fields = '__all__'
        read_only_fields = ('user', 'tokens_used', 'confidence_score')


class AIConversationSerializer(serializers.ModelSerializer):
    user_email = serializers.EmailField(source='user.email', read_only=True)
    message_count = serializers.SerializerMethodField()
    
    class Meta:
        model = AIConversation
        fields = '__all__'
        read_only_fields = ('user', 'messages')
    
    @extend_schema_field(int)
    def get_message_count(self, obj):
        return len(obj.messages)


class VoiceCallSerializer(serializers.ModelSerializer):
    user_email = serializers.EmailField(source='user.email', read_only=True)
    legal_references_info = LegalSourceSerializer(source='legal_references', many=True, read_only=True)
    
    class Meta:
        model = VoiceCall
        fields = '__all__'
        read_only_fields = ('user', 'call_reference', 'status', 'cost')


class PartnerFirmSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnerFirm
        fields = '__all__'


class LeadReferralSerializer(serializers.ModelSerializer):
    user_email = serializers.EmailField(source='user.email', read_only=True)
    partner_firm_name = serializers.CharField(source='partner_firm.name', read_only=True)
    
    class Meta:
        model = LeadReferral
        fields = '__all__'
        read_only_fields = ('user', 'commission_earned')


class FinancialDocumentSerializer(serializers.ModelSerializer):
    user_email = serializers.EmailField(source='user.email', read_only=True)
    
    class Meta:
        model = FinancialDocument
        fields = '__all__'
        read_only_fields = ('user', 'file_size', 'mime_type', 'is_processed')


class SubscriptionPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionPlan
        fields = '__all__'


class PaymentTransactionSerializer(serializers.ModelSerializer):
    user_email = serializers.EmailField(source='user.email', read_only=True)
    
    class Meta:
        model = PaymentTransaction
        fields = '__all__'
        read_only_fields = ('user', 'status')


# AI Request/Response Serializers
class AIQueryRequestSerializer(serializers.Serializer):
    query = serializers.CharField(required=True)
    conversation_id = serializers.IntegerField(required=False, allow_null=True)
    context = serializers.JSONField(required=False, default=dict)


class VoiceCallRequestSerializer(serializers.Serializer):
    topic = serializers.CharField(required=True)
    scheduled_time = serializers.DateTimeField(required=False)
    preferred_language = serializers.CharField(default='en')


class DocumentAnalysisRequestSerializer(serializers.Serializer):
    document_id = serializers.IntegerField(required=True)
    analysis_type = serializers.ChoiceField(
        choices=[
            ('tax_compliance', 'Tax Compliance'),
            ('financial_health', 'Financial Health'),
            ('forecasting', 'Forecasting'),
            ('all', 'All'),
        ],
        default='all'
    )