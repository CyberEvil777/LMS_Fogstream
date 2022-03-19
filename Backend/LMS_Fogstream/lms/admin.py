from ast import Str
from urllib.parse import urlencode
from django.contrib import admin
from django import forms

from .models import Category, Course, Group, Review, Lessons, LessonCategory
from django.utils.safestring import mark_safe
from django.utils.html import format_html
from django.urls import reverse
from ckeditor_uploader.widgets import CKEditorUploadingWidget

admin.site.site_header = "LMS Fogstream admin"
admin.site.site_title = "LMS Fogstream admin site"
admin.site.index_title = "LMS Fogstream Admin"


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "descriptions")
    list_filter = ("name",)
    search_fields = ("name",)


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "tagline", "groups_link", "lessons_link", "draft")
    list_filter = ("category", "draft")
    search_fields = ("title", "category")
    readonly_fields = ["picture_image"]
    list_select_related = True

    def picture_image(self, obj):
        return mark_safe('<img src="{url}" width="110" height="100" />'.format(
            url=obj.picture.url,
            width=obj.picture.width,
            height=obj.picture.height,
        )
        )

    # def model_count(self, obj):
    #     return obj.model_count

    # def get_queryset(self, request):
    #     queryset = super().get_queryset(request)
    #     queryset = queryset.annotate(model_count=Count("group"))
    #     return queryset

    # def object_link(self, obj):
    #     app_label = obj._meta.app_label
    #     model_label = obj._meta.model_name
    #     url = reverse(
    #         f'admin:{app_label}_{model_label}_change', args=(obj.id,)
    #     )
    #     return mark_safe(f'<a href="{url}">{obj.id}</a>')

    def groups_link(self, obj):
        count = obj.group_set.count()
        url = (
                reverse("admin:lms_group_changelist")
                + "?"
                + urlencode({"courses__id": f"{obj.id}"})
        )
        return format_html('<a href="{}">{}</a>', url, count)

    groups_link.short_description = "Группы"

    def lessons_link(self, obj):
        count = obj.lessons_cat_course.count()
        url = (
                reverse("admin:lms_lessons_changelist")
                + "?"
                + urlencode({"courses__id": f"{obj.id}"})
        )
        return format_html('<a href="{}">{}</a>', url, count)

    lessons_link.short_description = "Уроки"


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = ("name", "course", "date")
    list_filter = ("course", "date")
    search_fields = ("name", "course")


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("course", "email", "text")
    list_filter = ("course", "email", "text")
    search_fields = ("course", "email")


class LessonsAdminForm(forms.ModelForm):
    lecture = forms.CharField(label="Лекция", widget=CKEditorUploadingWidget())

    class Meta:
        model = Lessons
        fields = '__all__'


@admin.register(Lessons)
class LessonsAdmin(admin.ModelAdmin):
    list_display = ("title", "lesson_category", "type", "completed", "score", "draft")
    list_filter = ("lesson_category", "type", "score", "completed", "draft")
    search_fields = ("title", "lesson_category", "type")


@admin.register(LessonCategory)
class LessonCategoryAdmin(admin.ModelAdmin):
    list_display = ("title", "course")
    list_filter = ("course",)
    search_fields = ("title", "course")
    form = LessonsAdminForm
