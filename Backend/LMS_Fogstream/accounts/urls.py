from django.urls import path

from . import views


urlpatterns = [
    path("all-profiles", views.UserProfileListCreateView.as_view()),
    path("profile/<int:pk>", views.UserProfileDetailView.as_view()),
    path('login/', views.LoginView.as_view(), name="login"),
    path('me/', views.CheckLoginView.as_view()),
]