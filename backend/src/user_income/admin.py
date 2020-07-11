from django.contrib import admin
from django.contrib.auth.models import User
from .models import UserIncome

# Register your models here.

class UserIncomeAdmin(admin.ModelAdmin):
    model = UserIncome
    exclude = ('user_id')

    def save_model(self, request, obj, form, change):
        print("-----------user----",request.user)
        obj.user_id = request.user
        obj.save()
        super(UserIncome, self).save_model(request, obj, form, change)

admin.site.register(UserIncome)
# admin.site.register(UserExpenseData)