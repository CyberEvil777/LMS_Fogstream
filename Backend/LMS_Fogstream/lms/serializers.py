from rest_framework import serializers

from .models import Course, Group, Lessons, LessonCategory


class GroupSerializer(serializers.ModelSerializer):
    """Группа"""

    class Meta:
        model = Group
        fields = ("name",)


# class LectureSerializer(serializers.ModelSerializer):
#     """Урок серилизация"""
#
#     class Meta:
#         model = Lecture
#         fields = ("name", "description")


class LessonsSerializer(serializers.ModelSerializer):
    """Урок серилизация"""

    class Meta:
        model = Lessons
        fields = ("id", "title", "description", "type", "completed")


class LectionSerializer(serializers.ModelSerializer):
    """Лекции список"""

    class Meta:
        model = Lessons
        fields = ("id", "title", "description")


class LectionDetailSerializer(serializers.ModelSerializer):
    """Лекции детали"""

    class Meta:
        model = Lessons
        fields = ("id", "title", "description", "type", "completed", "lecture")


class CourseListSerializer(serializers.ModelSerializer):
    """Список курсов"""
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Course
        fields = ("id", "title", "short_description", "picture", "color")


class LessonShortCategorySerializer(serializers.ModelSerializer):
    """Категории уроков"""

    class Meta:
        model = LessonCategory
        fields = ("id", "title")


class CourseDetailSerializer(serializers.ModelSerializer):
    """Полные детали курса"""
    lessons_cat_course = LessonShortCategorySerializer(many=True)

    class Meta:
        model = Course
        fields = ("title", "short_description", "picture", "lessons_cat_course", "color")


class GroupListSerializer(serializers.ModelSerializer):
    """Список групп"""
    class Meta:
        model = Group
        fields = ("__all__")


class LessonCategorySerializer(serializers.ModelSerializer):
    """Категории уроков"""
    all_lessons = LessonsSerializer(many=True)

    class Meta:
        model = LessonCategory
        fields = ("id", "title", "all_lessons")



# class UserProfileSerializer(serializers.ModelSerializer):
#     """Профиль пользователя"""
#     user = serializers.StringRelatedField(read_only=True)
#
#     class Meta:
#         model = UserProfile
#         fields = '__all__'