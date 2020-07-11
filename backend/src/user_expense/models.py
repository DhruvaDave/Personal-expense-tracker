from django.db import models

from django.contrib.auth.models import User
from user_income.models import  UserIncome

from django.db.models.signals import post_save
from django import forms
from datetime import datetime, date


class UserExpenseData(models.Model):
    EXPENSE_CHOICES = (
        ('debit', 'Debit'),
        ('cedit', 'Credit'),
    )

    from_date = models.DateField(default=date.today)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    type_of_expense = models.CharField(max_length=5,choices=EXPENSE_CHOICES)

    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True
    )

    user_income_id = models.ForeignKey(
        UserIncome,
        on_delete=models.CASCADE,
        null=True
    )

    def __str__(self):
        return self.user_id.username 
# Create your models here.
