# users/models.py
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    """Custom User model for Maven"""
    USER_TYPE_CHOICES = (
        ('individual', 'Individual/Freelancer'),
        ('sme', 'SME/Startup'),
        ('enterprise', 'Enterprise'),
        ('tax_professional', 'Tax Professional'),
        ('partner', 'Partner'),
    )
    
    user_type = models.CharField(
        max_length=20, 
        choices=USER_TYPE_CHOICES, 
        default='individual'
    )
    company_name = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    business_sector = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)  # Nigerian state
    is_verified = models.BooleanField(default=False)
    subscription_tier = models.CharField(
        max_length=20,
        choices=(
            ('free', 'Free'),
            ('pro', 'Pro'),
            ('business', 'Business'),
        ),
        default='free'
    )
    subscription_expires = models.DateTimeField(null=True, blank=True)
    query_limit = models.IntegerField(default=50)  # Monthly query limit
    queries_used = models.IntegerField(default=0)
    reset_date = models.DateField(auto_now_add=True)

    groups = models.ManyToManyField(Group, related_name="user_groups")
    user_permissions = models.ManyToManyField(Permission, related_name="user_permissions")
    
    def can_make_query(self):
        """Check if user can make another query"""
        from datetime import date
        
        if self.reset_date < date.today():
            self.queries_used = 0
            self.reset_date = date.today()
            self.save()
        
        if self.subscription_tier == 'pro':
            return True  # Unlimited for pro
        elif self.subscription_tier == 'business':
            return True  # Unlimited for business
        return self.queries_used < self.query_limit
    
    def increment_query_count(self):
        """Increment query count for user"""
        self.queries_used += 1
        self.save()


class UserProfile(models.Model):
    """Extended profile for users"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    tax_identification_number = models.CharField(max_length=20, blank=True)
    business_registration_number = models.CharField(max_length=50, blank=True)
    vat_registered = models.BooleanField(default=False)
    employees_count = models.IntegerField(default=1)
    annual_revenue = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
    preferred_language = models.CharField(max_length=10, default='en')
    notification_preferences = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.user.email} Profile"