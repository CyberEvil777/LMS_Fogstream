from django.contrib import admin
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget

from .models import Category, Course, Group, Review, Lessons, LessonCategory


class LessonsAdminForm(forms.ModelForm):
    lecture = forms.CharField(label="Лекция", widget=CKEditorUploadingWidget())

    class Meta:
        model = Lessons
        fields = '__all__'


@admin.register(Lessons)
class LessonsAdmin(admin.ModelAdmin):
    """Уроки"""
    form = LessonsAdminForm


admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Group)
admin.site.register(Review)
admin.site.register(LessonCategory)


admin.site.site_title = "LMS Fogstream"
admin.site.site_header = "LMS Fogstream"