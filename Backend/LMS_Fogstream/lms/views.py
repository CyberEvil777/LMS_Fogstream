from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from accounts.permissions import TeacherPermission
from django.db import models

from .models import Course, Group, Lessons, LessonCategory
from .serializers import (
    CourseListSerializer,
    CourseDetailSerializer,
    GroupListSerializer,
    LessonsSerializer,
    LectionDetailSerializer,
    LessonCategorySerializer,
)


class CourseList(generics.ListAPIView):
    """Список курсов"""
    queryset = Course.objects.filter(draft=False).only("id", "title", "short_description", "picture")
    serializer_class = CourseListSerializer

    # def get_queryset(self):
    #     course = Course.objects.filter(draft=False).annotate(
    #         lessons_count=models.Count()
    #     )
    #     return course


class CourseDetailView(generics.RetrieveAPIView):
    """Вывод деталий курса"""
    queryset = Course.objects.prefetch_related("lessons_cat_course").\
        filter(draft=False).\
        only("id", "title", "short_description", "picture")
    serializer_class = CourseDetailSerializer


class LessonsList(generics.ListAPIView):
    """Список уроков"""
    queryset = Lessons.objects.filter(draft=False).\
        values("id", "title", "description", "type", "completed")
    serializer_class = LessonsSerializer


class LectionDetailView(generics.RetrieveAPIView):
    """Вывод детали лекции"""
    queryset = Lessons.objects.filter(type="lection").\
        values("id", "title", "description", "type", "completed", "lecture")
    serializer_class = LectionDetailSerializer


class GroupList(generics.ListAPIView):
    """Список групп"""
    queryset = Group.objects.all()
    serializer_class = GroupListSerializer
    permission_classes = [TeacherPermission, IsAuthenticated]


class LessonCategoryList(generics.ListAPIView):
    """Список категорий уроков"""
    queryset = LessonCategory.objects.prefetch_related("all_lessons").only("id", "title")
    serializer_class = LessonCategorySerializer


class LessonCategoryDetailView(generics.RetrieveAPIView):
    """Детали категорий уроков"""
    queryset = LessonCategory.objects.prefetch_related("all_lessons").only("id", "title")
    serializer_class = LessonCategorySerializer