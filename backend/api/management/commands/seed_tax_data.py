# api/management/commands/seed_tax_data.py
from django.core.management.base import BaseCommand
from api.models import TaxCategory, LegalSource


class Command(BaseCommand):
    help = 'Seed initial tax categories and legal sources'
    
    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding tax data...')
        
        # Create tax categories
        categories = [
            {
                'name': 'Value Added Tax (VAT)',
                'tax_type': 'vat',
                'description': 'Tax on the supply of goods and services in Nigeria',
                'keywords': ['VAT', 'Value Added Tax', 'supply', 'goods', 'services']
            },
            {
                'name': 'Withholding Tax (WHT)',
                'tax_type': 'wht',
                'description': 'Tax deducted at source from payments',
                'keywords': ['WHT', 'Withholding Tax', 'deduction', 'contractor', 'supplier']
            },
            {
                'name': 'Company Income Tax (CIT)',
                'tax_type': 'cit',
                'description': 'Tax on profits of companies incorporated in Nigeria',
                'keywords': ['CIT', 'Company Income Tax', 'profits', 'corporation tax']
            },
            {
                'name': 'Personal Income Tax (PITA)',
                'tax_type': 'pita',
                'description': 'Tax on income of individuals',
                'keywords': ['PITA', 'Personal Income Tax', 'individual', 'salary']
            },
            {
                'name': 'PAYE',
                'tax_type': 'paye',
                'description': 'Pay As You Earn - Tax on employment income',
                'keywords': ['PAYE', 'Pay As You Earn', 'employment', 'salary', 'wages']
            },
        ]
        
        for cat_data in categories:
            category, created = TaxCategory.objects.update_or_create(
                name=cat_data['name'],
                defaults=cat_data
            )
            if created:
                self.stdout.write(f'Created category: {category.name}')
        
        # Create sample legal sources
        legal_sources = [
            {
                'title': 'Value Added Tax Act, CAP V1 LFN 2004',
                'source_type': 'act',
                'reference': 'VAT Act, Section 2',
                'content': 'This Act provides for the imposition of Value Added Tax on the supply of goods and services...',
                'effective_date': '2004-01-01',
                'jurisdiction': 'Federal',
                'is_active': True
            },
            {
                'title': 'FIRS Information Circular No: 2021/01',
                'source_type': 'circular',
                'reference': 'FIRS Circular 2021/01',
                'content': 'Guidelines on the implementation of VAT on digital services...',
                'effective_date': '2021-01-01',
                'jurisdiction': 'Federal',
                'is_active': True
            },
            {
                'title': 'Companies Income Tax Act',
                'source_type': 'act',
                'reference': 'CITA, Section 40',
                'content': 'Provides for the taxation of profits of companies in Nigeria...',
                'effective_date': '2007-01-01',
                'jurisdiction': 'Federal',
                'is_active': True
            },
        ]
        
        for source_data in legal_sources:
            source, created = LegalSource.objects.update_or_create(
                reference=source_data['reference'],
                defaults=source_data
            )
            if created:
                self.stdout.write(f'Created legal source: {source.reference}')
        
        self.stdout.write(self.style.SUCCESS('Tax data seeded successfully!'))