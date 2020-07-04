from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # path('api-auth/', include('rest_framework.urls')),
    # path('admin/', admin.site.urls),
    path('expenses/', include('user_income.api.expenses_url')),
    path('api/', include('user_income.api.urls')),
]


print("----------ALL-------",urlpatterns)
