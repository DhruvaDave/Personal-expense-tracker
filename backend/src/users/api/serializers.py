from rest_framework import serializers
from rest_auth.views import LoginSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


from user_expense.models import  UserExpenseData


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =  '__all__'
        # fields = ('id', 'name')

from rest_auth.models import TokenModel

class LoginSerializer(LoginSerializer):
     
    fields=('username','email') 
    # print("-----------gerere--------")

    

class TokenSerializer(serializers.ModelSerializer):
    print("-----------hrere-----token__________________-")
    class Meta:
        model = Token
        fields = '__all__'

        # def post(self, request, *args, **kwargs):
        #     serializer = self.serializer_class(data=request.data,
        #                                     context={'request': request})
        #     serializer.is_valid(raise_exception=True)
        #     print("------posr----------")
        #     user = serializer.validated_data['user']
        #     token, created = Token.objects.get_or_create(user=user)
        #     context = {
        #         'token': token.key,
        #         'user': user.id
        #     }
        #     return Response({'context': context})

    