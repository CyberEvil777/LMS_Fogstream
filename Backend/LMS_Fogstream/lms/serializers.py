from rest_framework import serializers

from .models import Course, Group


class GroupSerializer(serializers.ModelSerializer):
    """Группа"""

    class Meta:
        model = Group
        fields = ("name",)


class CourseListSerializer(serializers.ModelSerializer):
    """Список фильмов"""
    id = serializers.IntegerField(read_only=True)
    groups = GroupSerializer(many=True)

    class Meta:
        model = Course
        fields = ("id", "groups", "picture")


class CourseDetailSerializer(serializers.ModelSerializer):
    """Полный фильм"""
    category = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = Course
        exclude = ("draft",)


class GroupListSerializer(serializers.ModelSerializer):
    """Список фильмов"""
    class Meta:
        model = Group
        fields = ("__all__")