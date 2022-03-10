from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from accounts.permissions import TeacherPermission

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
    queryset = Course.objects.filter(draft=False)
    serializer_class = CourseListSerializer


class CourseDetailView(generics.RetrieveAPIView):
    """Вывод деталий курса"""
    queryset = Course.objects.filter(draft=False)
    serializer_class = CourseDetailSerializer


class LessonsList(generics.ListAPIView):
    """Список уроков"""
    queryset = Lessons.objects.filter(draft=False)
    serializer_class = LessonsSerializer


class LectionDetailView(generics.RetrieveAPIView):
    """Вывод детали лекции"""
    queryset = Lessons.objects.filter(type="lection")
    serializer_class = LectionDetailSerializer


class GroupList(generics.ListAPIView):
    """Список групп"""
    queryset = Group.objects.all()
    serializer_class = GroupListSerializer
    permission_classes = [TeacherPermission, IsAuthenticated]


class LessonCategoryList(generics.ListAPIView):
    """Список категорий уроков"""
    queryset = LessonCategory.objects.all()
    serializer_class = LessonCategorySerializer


class LessonCategoryDetailView(generics.RetrieveAPIView):
    """Детали категорий уроков"""
    queryset = LessonCategory.objects.all()
    serializer_class = LessonCategorySerializer