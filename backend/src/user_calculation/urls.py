from django.urls import path
from . import views
from django.contrib.auth.views import LoginView,LogoutView

urlpatterns = [
    path('user_exp/calculation',views.calculate_expense,name="calculation"),
]