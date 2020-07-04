from user_income.api.views import UserIncomeViewSet, UserExpensesViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
print("---router---",router)

router.register(r'', UserExpensesViewSet, basename='user-expenses')
urlpatterns = router.urls
print("-----urlpatterns----UserExpensesViewSet---",urlpatterns)
