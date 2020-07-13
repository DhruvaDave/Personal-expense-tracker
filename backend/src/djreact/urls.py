from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    path('user-expenses/', include('user_expense.api.urls')),

    path('user-income/', include('user_income.api.urls')),
    path('all-users/', include('users.api.urls')),
    path('', include('user_calculation.urls')),
    # path('all/msg',views.all_msg,name="all_msg"),
    # path('api/', include('articles.api.urls')),
]
