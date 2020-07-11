from rest_framework import viewsets

from user_expense.models import  UserExpenseData
from django.contrib.auth.models import User

from .serializers import  UserExpenseDataSerializer


class UserExpenseDataViewSet(viewsets.ModelViewSet):
    serializer_class = UserExpenseDataSerializer
    # print("----------all---",UserExpenseData.objects.all())
    model = UserExpenseData

    def get_queryset(self):
        # queryset = self.queryset
        print()
        # print("-------request.session----------",self.request)
        # print("------serializer.instance-------",self.serializer_class)
        # print("-------request.session----------",self.request.session.items())
        # print("--------USER_________________",self.model.objects.filter(user_id=self.request.user))
        # print("----------all---",UserExpenseData.objects.filter(user_id=self.request.user))
        # queryset = UserExpenseData.objects.all()
        # return self.model.objects.filter(user_id=self.request.user)
        return self.model.objects.all()

    
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
