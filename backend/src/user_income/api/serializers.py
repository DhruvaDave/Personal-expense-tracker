from rest_framework import serializers

from user_income.models import UserIncome


class UserIncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserIncome
        fields = ('id', 'from_date', 'to_date','credit','user_id')
