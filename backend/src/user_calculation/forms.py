from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django import forms

from user_expense.models import UserExpenseData
from .models import UserCalculation



class UserExpenseDataForm(forms.ModelForm):
    class Meta:
        model = UserExpenseData
        exclude = []

class UserCalculationForm(forms.ModelForm):
    class Meta:
        model = UserCalculation
        exclude = []
    # def __init__(self, *args, **kwargs):
    #     user = kwargs.pop('user','')
    #     super(MessageForm, self).__init__(*args, **kwargs)
    #     self.fields['user_id']=forms.ModelChoiceField(queryset=User.objects.filter(username=user))
    #     self.fields['user_messsage']=forms.CharField(max_length=15)


# class MsgEditForm(forms.Form):
#     user_messsage = forms.CharField(max_length=300)

#     class Meta:
#         model = Message
#         fields = (
#             'user_messsage',
#             'user_id'
#         )
