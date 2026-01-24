# api/paystack_client.py
import requests
import json
from django.conf import settings
from decimal import Decimal


class PaystackClient:
    """Paystack API client"""
    
    def __init__(self):
        self.secret_key = settings.PAYSTACK_SECRET_KEY
        self.public_key = settings.PAYSTACK_PUBLIC_KEY
        self.base_url = settings.PAYSTACK_BASE_URL
        self.headers = {
            'Authorization': f'Bearer {self.secret_key}',
            'Content-Type': 'application/json'
        }
    
    def initialize_transaction(self, email, amount, reference=None, metadata=None):
        """Initialize a transaction"""
        amount_in_kobo = int(amount * 100)  # Convert Naira to Kobo
        
        data = {
            'email': email,
            'amount': amount_in_kobo,
            'currency': 'NGN',
            'metadata': metadata or {}
        }
        
        if reference:
            data['reference'] = reference
        
        response = requests.post(
            f'{self.base_url}/transaction/initialize',
            headers=self.headers,
            json=data
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Paystack error: {response.text}")
    
    def verify_transaction(self, reference):
        """Verify a transaction"""
        response = requests.get(
            f'{self.base_url}/transaction/verify/{reference}',
            headers=self.headers
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Paystack error: {response.text}")
    
    def create_customer(self, email, first_name=None, last_name=None, phone=None):
        """Create a customer"""
        data = {
            'email': email,
            'first_name': first_name or '',
            'last_name': last_name or '',
            'phone': phone or ''
        }
        
        response = requests.post(
            f'{self.base_url}/customer',
            headers=self.headers,
            json=data
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Paystack error: {response.text}")
    
    def charge_authorization(self, authorization_code, email, amount):
        """Charge a card using authorization code"""
        amount_in_kobo = int(amount * 100)
        
        data = {
            'authorization_code': authorization_code,
            'email': email,
            'amount': amount_in_kobo,
            'currency': 'NGN'
        }
        
        response = requests.post(
            f'{self.base_url}/transaction/charge_authorization',
            headers=self.headers,
            json=data
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Paystack error: {response.text}")
    
    def create_subscription(self, customer_email, plan_code, authorization_code=None):
        """Create a subscription"""
        data = {
            'customer': customer_email,
            'plan': plan_code
        }
        
        if authorization_code:
            data['authorization'] = authorization_code
        
        response = requests.post(
            f'{self.base_url}/subscription',
            headers=self.headers,
            json=data
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Paystack error: {response.text}")
    
    def create_plan(self, name, amount, interval='monthly'):
        """Create a subscription plan"""
        amount_in_kobo = int(amount * 100)
        
        data = {
            'name': name,
            'amount': amount_in_kobo,
            'interval': interval,
            'currency': 'NGN'
        }
        
        response = requests.post(
            f'{self.base_url}/plan',
            headers=self.headers,
            json=data
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Paystack error: {response.text}")
    
    def create_transfer_recipient(self, name, account_number, bank_code, type='nuban'):
        """Create a transfer recipient for payouts to partners"""
        data = {
            'type': type,
            'name': name,
            'account_number': account_number,
            'bank_code': bank_code,
            'currency': 'NGN'
        }
        
        response = requests.post(
            f'{self.base_url}/transferrecipient',
            headers=self.headers,
            json=data
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Paystack error: {response.text}")
    
    def initiate_transfer(self, amount, recipient_code, reason):
        """Initiate a transfer to a recipient"""
        amount_in_kobo = int(amount * 100)
        
        data = {
            'source': 'balance',
            'amount': amount_in_kobo,
            'recipient': recipient_code,
            'reason': reason
        }
        
        response = requests.post(
            f'{self.base_url}/transfer',
            headers=self.headers,
            json=data
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Paystack error: {response.text}")