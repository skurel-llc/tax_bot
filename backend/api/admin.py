# api/admin.py
from django.contrib import admin
from .models import (
    TaxCategory, LegalSource, ChatQuery, AIConversation,
    VoiceCall, PartnerFirm, LeadReferral, FinancialDocument,
    SubscriptionPlan, PaymentTransaction
)

@admin.register(TaxCategory)
class TaxCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'tax_type', 'created_at')
    list_filter = ('tax_type',)
    search_fields = ('name', 'description')

@admin.register(LegalSource)
class LegalSourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'source_type', 'reference', 'effective_date', 'is_active')
    list_filter = ('source_type', 'jurisdiction', 'is_active')
    search_fields = ('title', 'reference', 'content')
    filter_horizontal = ('related_categories',)

@admin.register(ChatQuery)
class ChatQueryAdmin(admin.ModelAdmin):
    list_display = ('user', 'query_preview', 'created_at', 'is_premium')
    list_filter = ('is_premium', 'created_at')
    search_fields = ('query_text', 'response_text', 'user__email')
    
    def query_preview(self, obj):
        return obj.query_text[:50] + '...' if len(obj.query_text) > 50 else obj.query_text
    query_preview.short_description = 'Query'

@admin.register(AIConversation)
class AIConversationAdmin(admin.ModelAdmin):
    list_display = ('user', 'title', 'message_count', 'is_active', 'updated_at')
    list_filter = ('is_active',)
    search_fields = ('title', 'user__email')
    
    def message_count(self, obj):
        return len(obj.messages)
    message_count.short_description = 'Messages'

@admin.register(VoiceCall)
class VoiceCallAdmin(admin.ModelAdmin):
    list_display = ('call_reference', 'user', 'scheduled_time', 'status', 'duration_minutes', 'cost')
    list_filter = ('status',)
    search_fields = ('call_reference', 'user__email', 'topic')

@admin.register(PartnerFirm)
class PartnerFirmAdmin(admin.ModelAdmin):
    list_display = ('name', 'firm_type', 'states_display', 'is_verified', 'rating')
    list_filter = ('firm_type', 'is_verified', 'is_active')
    search_fields = ('name', 'description', 'services')
    
    def states_display(self, obj):
        return ', '.join(obj.states_covered[:3]) + ('...' if len(obj.states_covered) > 3 else '')
    states_display.short_description = 'States Covered'

@admin.register(LeadReferral)
class LeadReferralAdmin(admin.ModelAdmin):
    list_display = ('user', 'partner_firm', 'status', 'created_at', 'conversion_value')
    list_filter = ('status', 'partner_firm__firm_type')
    search_fields = ('user__email', 'partner_firm__name', 'reason')

@admin.register(FinancialDocument)
class FinancialDocumentAdmin(admin.ModelAdmin):
    list_display = ('user', 'document_type', 'file_size_mb', 'is_processed', 'created_at')
    list_filter = ('document_type', 'is_processed')
    search_fields = ('user__email', 'original_filename')
    
    def file_size_mb(self, obj):
        return f"{obj.file_size / (1024*1024):.2f} MB"
    file_size_mb.short_description = 'File Size'

@admin.register(SubscriptionPlan)
class SubscriptionPlanAdmin(admin.ModelAdmin):
    list_display = ('name', 'plan_type', 'price_monthly', 'price_yearly', 'is_active')
    list_filter = ('plan_type', 'is_active')

@admin.register(PaymentTransaction)
class PaymentTransactionAdmin(admin.ModelAdmin):
    list_display = ('user', 'amount', 'currency', 'status', 'payment_method', 'created_at')
    list_filter = ('status', 'currency')
    search_fields = ('user__email', 'stripe_payment_intent_id')