from users.api.views import  UserViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path


router = DefaultRouter()

router = DefaultRouter()
print("---router---",router)

router.register('', UserViewSet, basename='user-expenses')
urlpatterns = router.urls 
print("-----urlpatterns----UserViewSet---",urlpatterns)

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
