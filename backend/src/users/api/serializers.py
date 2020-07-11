from rest_framework import serializers
from django.contrib.auth.models import User


from user_expense.models import  UserExpenseData


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =  '__all__'
        # fields = ('id', 'name')

from rest_auth.models import TokenModel

class TokenSerializer(serializers.ModelSerializer):
    print("-----------hrere-----token__________________-")
    class Meta:
        model = TokenModel
        fields = ('key', 'user')
