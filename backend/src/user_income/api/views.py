from rest_framework import viewsets

from user_income.models import UserIncome
from .serializers import UserIncomeSerializer


class UserIncomeViewSet(viewsets.ModelViewSet):
    serializer_class = UserIncomeSerializer
    queryset = UserIncome.objects.all()
