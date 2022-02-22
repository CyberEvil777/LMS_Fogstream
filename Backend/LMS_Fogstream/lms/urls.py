from django.urls import path

from . import views


urlpatterns = [
    path("course/", views.CourseList.as_view()),
    path("group/", views.GroupList.as_view()),
    path("course/<int:pk>", views.CourseDetailView.as_view()),
]