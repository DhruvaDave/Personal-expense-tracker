from rest_framework import viewsets

from django.contrib.auth.models import User

from .serializers import  UserSerializer,LoginSerializer,TokenSerializer
from rest_auth.models import TokenModel
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken



class UserViewSet(viewsets.ModelViewSet):
    # serializer_class = LoginSerializer
    # print("----------all->>>>>>>>>>>>>--",User.objects.all())
    # queryset = User.objects.all()

    def post(self, request, *args, **kwargs):
        print("--------hrer--------")
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})

        print("-------serializer---------",serializer)                                   
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        print("-----------validate----------",serializer.validated_data)
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })


# class LoginViewSet(viewsets.ModelViewSet):
#     serializer_class = LoginSerializer
#     print("----------all->>>>>>>>>>>>>_____________________TOEKN--",TokenModel.objects.all())
#     queryset = TokenModel.objects.all()

class ToeknViewSet(viewsets.ModelViewSet):
    serializer_class = TokenSerializer
    print("----------all->>>>>>>>>>>>>_____________________TOEKN--",Token.objects.all())
    queryset = Token.objects.all()

#     def post(self, request, *args, **kwargs):
#         response = super(ToeknViewSet, self).post(request, *args, **kwargs)
#         print("-----------response-----------------------",response)
#         token = Token.objects.get(key=response.data['token'])
#         user_email = request.data.get('email', None)
#         user = User.objects.get(email=user_email)
#         print("-------user--------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",user)
#         return Response({'name': user.name, 'email': user.email, 'token': token.key})

class CustomObtainAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        print("--------post-------")
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'id': token.user_id})



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
