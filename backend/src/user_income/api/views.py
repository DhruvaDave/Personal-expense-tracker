from rest_framework import viewsets

from user_income.models import UserIncome, UserExpenses
from .serializers import UserIncomeSerializer, UserExpensesSerializer


class UserIncomeViewSet(viewsets.ModelViewSet):
    serializer_class = UserIncomeSerializer
    queryset = UserIncome.objects.all()

class UserExpensesViewSet(viewsets.ModelViewSet):
    serializer_class = UserExpensesSerializer
    print("----------all---",UserExpenses.objects.all())
    queryset = UserExpenses.objects.all()

# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView
# )

# class UserIncomesView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class UserIncomeCreateView(CreateAPIView):
#     queryset = UserIncome.objects.all()
#     serializer_class = UserIncomeSerializer


# class ArticleUpdateView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleDeleteView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
