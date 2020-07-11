from user_income.api.views import UserIncomeViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

print("---router---",router)
router.register(r'', UserIncomeViewSet, basename='user-income')
# expenses_router.register(r'expenses', UserExpenseDataViewSet, basename='user-expenses')
urlpatterns = router.urls 
print("-----urlpatterns-------",urlpatterns)

# from django.urls import path

# from .views import (
#     # UserIncomesView,
#     # ArticleDetailView,
#     UserIncomeCreateView,
#     # ArticleUpdateView,
#     # ArticleDeleteView
# )


# urlpatterns = [
#     # path('', UserIncomesView.as_view()),
#     path('create/', UserIncomeCreateView.as_view()),
#     # path('<pk>', ArticleDetailView.as_view()),
#     # path('<pk>/update/', ArticleUpdateView.as_view()),
#     # path('<pk>/delete/', ArticleDeleteView.as_view())
# ]
