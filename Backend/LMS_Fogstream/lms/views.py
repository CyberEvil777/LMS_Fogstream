from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from accounts.permissions import TeacherPermission
from django_filters.rest_framework import DjangoFilterBackend
import django_filters.rest_framework as filters

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
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'category']

'''class SearchFilter(filters.CharField, filters.BaseInFilter):
    pass

class CourseFilter(filters.FilterSet):
    category = SearchFilter(field_category='')

    class Meta:
        model = Course
        fields = ['category']'''


class CourseDetailView(generics.RetrieveAPIView):
    """Вывод деталий курса"""
    queryset = Course.objects.filter(draft=False)
    serializer_class = CourseDetailSerializer


class LessonsList(generics.ListAPIView):
    """Список уроков"""
    queryset = Lessons.objects.filter(draft=False)
    serializer_class = LessonsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'lesson_category']


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