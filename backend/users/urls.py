# users/urls.py
from django.urls import path
from .views import (
    RegisterAPI, LoginAPI, UserAPI,
    ProfileUpdateAPI
)

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('user/', UserAPI.as_view(), name='user'),
    path('profile/', ProfileUpdateAPI.as_view(), name='profile-update'),
]