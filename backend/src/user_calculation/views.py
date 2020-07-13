from django.shortcuts import render, redirect

from .forms import UserExpenseDataForm, UserCalculationForm
from django.contrib.auth.models import User
from user_expense.models import UserExpenseData
from user_income.models import UserIncome
from .models import UserCalculation
from django.db.models import Sum


from django.http import HttpResponse

def calculate_expense(request):
    print("___________request.method_______",request.method)
    print("___________request.user_______",request.user)
    print("___________request.user_______",request.user.id)
    if request.method == 'GET':
        form = UserCalculationForm(request.POST,instance=request.user)
        all_user_expenses = UserCalculation.objects.filter(user_id=request.user.id)
        # all_msg_list = User.objects.get(pk=request.user.id)

        print("---------all_user_expenses----------",all_user_expenses)

        user_income = UserIncome.objects.filter(user_id=request.user.id)
        print("-----------user_income------------------------_______",user_income)
        timeline_with_income = {}   

        for income in user_income:
            print("_______income--------",income)
            income_sum = UserCalculation.objects.filter(user_id=request.user.id,user_income_id=income).aggregate(Sum('amount'))
            # print("-------income_sum------",income_sum)
            remain_amount = income.credit - (income_sum.get('amount__sum') if income_sum.get('amount__sum') else 0)
                
            timeline_with_income[income] = [income_sum.get('amount__sum') if income_sum.get('amount__sum') else 0,remain_amount]

        print("----------timeline_with_income-----------",timeline_with_income)
    
        return  render(request, "calculation.html", {'all_user_expenses':all_user_expenses,'timeline_with_income':timeline_with_income})
    
# Create your views here.
