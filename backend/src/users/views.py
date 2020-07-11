from django.shortcuts import render
from rest_framework import viewsets

from django.contrib.auth.models import User


# class UserViewSet(viewsets.ModelViewSet):
#     serializer_class = UserSerializer
#     print("----------all-----userss---",User.objects.all())
#     queryset = User.objects.all()
# Create your views here.

from rest_framework import serializers
from rest_auth.models import TokenModel

class TokenSerializer(serializers.ModelSerializer):
    print("-----------hrere-----token__________________-")
    class Meta:
        model = TokenModel
        fields = ('key', 'user','id')
