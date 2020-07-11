from rest_framework import serializers

from user_expense.models import  UserExpenseData


class UserExpenseDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserExpenseData
        fields = ('id', 'from_date', 'amount','type_of_expense','user_id','user_income_id')

