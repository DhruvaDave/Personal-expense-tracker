from django.contrib import admin
from django.contrib.auth.models import User
from .models import UserIncome, UserExpenses

# Register your models here.

class UserIncomeAdmin(admin.ModelAdmin):
    model = UserIncome
    exclude = ('user_id')

    def save_model(self, request, obj, form, change):
        obj.user_id = request.user
        obj.save()
        super(UserIncome, self).save_model(request, obj, form, change)

admin.site.register(UserIncome)
admin.site.register(UserExpenses)