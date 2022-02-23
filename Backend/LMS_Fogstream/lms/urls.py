from django.urls import path

from . import views


urlpatterns = [
    path("course/", views.CourseList.as_view()),
    path("group/", views.GroupList.as_view()),
    path("course/<int:pk>", views.CourseDetailView.as_view()),
    path("all-profiles", views.UserProfileListCreateView.as_view()),
    path("profile/<int:pk>", views.UserProfileDetailView.as_view()),
    path('login/', views.LoginView.as_view(), name="login"),
]