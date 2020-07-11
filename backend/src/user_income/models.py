from django.db import models

from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django import forms
from datetime import datetime, date


# Create your models here.


class UserIncome(models.Model):
    
   
    from_date = models.DateField(default=date.today)
    to_date = models.DateField()
    credit = models.DecimalField(max_digits=10, decimal_places=2)
    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True
    )

    def __str__(self):
        from_month_year = ''
        to_month_year = ''
        if self.from_date:
            from_month_year = self.from_date.strftime("%B") + ' ' + str(self.from_date.year) 
        if self.to_date:
            to_month_year = ' to ' + self.to_date.strftime("%B") + ' ' + str(self.to_date.year) 
        return from_month_year + to_month_year
        # return self.user_id.username + ' ' + from_month_year + to_month_year

#     If you want to change the values (i.e. 'M' and 'F') themselves, then you'll want to update the database, so if you wanted to change 'M' to 'H', then you'd use update:

# Foo.objects.filter(gender = 'M').update(gender = 'H')
    