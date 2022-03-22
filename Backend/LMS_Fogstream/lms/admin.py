from django.contrib import admin
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget

from .models import Category, Course, Group, Review, Lessons, LessonCategory

admin.site.site_title = "LMS Fogstream"
admin.site.site_header = "LMS Fogstream"


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "descriptions")
    list_filter = ("name",)


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "tagline", "draft")
    list_filter = ("category", "draft")


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = ("name", "course", "date")
    list_filter = ("course", "date")


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("course", "email", "text")
    list_filter = ("course", "email", "text")

    
class LessonsAdminForm(forms.ModelForm):
    lecture = forms.CharField(label="Лекция", widget=CKEditorUploadingWidget())

    class Meta:
        model = Lessons
        fields = '__all__'


@admin.register(Lessons)
class LessonsAdmin(admin.ModelAdmin):
    list_display = ("title", "lesson_category", "type", "completed", "score", "draft")
    list_filter = ("lesson_category", "type", "score", "completed", "draft")


@admin.register(LessonCategory)
class LessonCategoryAdmin(admin.ModelAdmin):
    list_display = ("title", "course")
    list_filter = ("course",)
    form = LessonsAdminForm
