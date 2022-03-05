from rest_framework import serializers

from .models import Course, Group, Lessons, Lecture


class GroupSerializer(serializers.ModelSerializer):
    """Группа"""

    class Meta:
        model = Group
        fields = ("name",)


class LectureSerializer(serializers.ModelSerializer):
    """Урок серилизация"""

    class Meta:
        model = Lecture
        fields = ("name", "description")


class LessonsSerializer(serializers.ModelSerializer):
    """Урок серилизация"""

    class Meta:
        model = Lessons
        fields = ("name", "description")


class CourseListSerializer(serializers.ModelSerializer):
    """Список курсов"""
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Course
        fields = ("id", "picture")


class CourseDetailSerializer(serializers.ModelSerializer):
    """Полные детали курса"""
    category = serializers.SlugRelatedField(slug_field="name", read_only=True)
    lessons = LessonsSerializer(many=True)

    class Meta:
        model = Course
        exclude = ("draft",)


class GroupListSerializer(serializers.ModelSerializer):
    """Список групп"""
    class Meta:
        model = Group
        fields = ("__all__")


# class UserProfileSerializer(serializers.ModelSerializer):
#     """Профиль пользователя"""
#     user = serializers.StringRelatedField(read_only=True)
#
#     class Meta:
#         model = UserProfile
#         fields = '__all__'