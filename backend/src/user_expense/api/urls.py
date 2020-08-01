from user_expense.api.views import  UserExpenseDataViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path


router = DefaultRouter()

router = DefaultRouter()
# print("---router---",router)

router.register('', UserExpenseDataViewSet, basename='user-expenses')
urlpatterns = router.urls 
# print("-----urlpatterns----UserExpenseDataViewSet---",urlpatterns)

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
