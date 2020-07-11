from rest_framework import viewsets

from django.contrib.auth.models import User

from .serializers import  UserSerializer,TokenSerializer
from rest_auth.models import TokenModel



class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    print("----------all->>>>>>>>>>>>>--",User.objects.all())
    queryset = User.objects.all()


class ToeknViewSet(viewsets.ModelViewSet):
    serializer_class = TokenSerializer
    print("----------all->>>>>>>>>>>>>_____________________TOEKN--",TokenModel.objects.all())
    queryset = TokenModel.objects.all()

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
