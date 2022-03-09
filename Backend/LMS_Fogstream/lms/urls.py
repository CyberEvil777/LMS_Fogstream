from django.urls import path

from . import views


urlpatterns = [
    path("course/", views.CourseList.as_view()),
    path("group/", views.GroupList.as_view()),
    path("course/<int:pk>", views.CourseDetailView.as_view()),
    path("lessons/", views.LessonsList.as_view()),
    path("lessons-category/", views.LessonCategoryList.as_view()),
    path("lessons-category/<int:pk>", views.LessonCategoryDetailView.as_view()),
    path("lection/<int:pk>", views.LectionDetailView.as_view()),
]