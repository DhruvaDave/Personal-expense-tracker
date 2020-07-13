from django.db import models

from django.contrib.auth.models import User
from user_income.models import  UserIncome
from user_calculation.models import  UserCalculation

from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
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

@receiver(pre_save,sender=UserExpenseData)
def my_callback(sender, *args, **kwargs):
    job = kwargs.get('instance')
    print("________asmounbt-----",job)
    print("________asmounbt-----",job.amount)
    if job.type_of_expense == 'debit':
        job.amount = -job.amount
    
    print("________asmounbt----after------",job.amount)

    # print(aaa)

@receiver(post_save, sender=UserExpenseData)
def create_new_record(sender, **kwargs):
    job = kwargs.get('instance')
    print("---------POST_SAVE : Job : ",job)
    print("---------POST_SAVE : Job : ",job.user_id.id)
    print("---------POST_SAVE : Job : user_income_id :",job.user_income_id.id)
    user = User.objects.get(id=job.user_id.id)
    user_income = UserIncome.objects.get(id=job.user_income_id.id)

    q = UserCalculation(user_id=user,user_income_id=user_income,amount=job.amount)
    q.save()
    # print(aaa)
        # instance.product.stock -= instance.amount
        # instance.product.save()
# Create your models here.
