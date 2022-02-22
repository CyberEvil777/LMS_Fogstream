from rest_framework import generics

from .models import Course, Group
from .serializers import CourseListSerializer, CourseDetailSerializer, GroupListSerializer



class CourseList(generics.ListAPIView):
    """Список курсов"""
    queryset = Course.objects.filter(draft=False)
    serializer_class = CourseListSerializer


class CourseDetailView(generics.RetrieveAPIView):
    """Вывод курса"""
    queryset = Course.objects.filter(draft=False)
    serializer_class = CourseDetailSerializer

class GroupList(generics.ListAPIView):
    """Список групп"""
    queryset = Group.objects.all()
    serializer_class = GroupListSerializer

