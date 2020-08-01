from users.api.views import  UserViewSet, CustomObtainAuthToken
from rest_framework.routers import DefaultRouter
from django.urls import path
from django.conf.urls import url


# router = DefaultRouter()

# router = DefaultRouter()
# print("---router---",router)

# router.register('', UserViewSet, basename='user-expenses')
# urlpatterns = router.urls 

urlpatterns = [
    path('api-token-auth/', CustomObtainAuthToken.as_view()),
#     url(r'^api-token-auth/', CustomAuthToken.as_view())
]

# print("-----urlpatterns----UserViewSet--____________________________new-",urlpatterns)
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
