from rest_framework import serializers

from user_income.models import UserIncome, UserExpenses


class UserIncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserIncome
        fields = ('id', 'from_date', 'to_date','credit','user_id')

class UserExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserExpenses
        fields = ('id', 'from_date', 'amount','type_of_expense','user_id')