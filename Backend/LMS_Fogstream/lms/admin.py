from django.contrib import admin
from .models import Category, Course, Group, Review, Lessons, Lecture


admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Group)
admin.site.register(Review)
admin.site.register(Lessons)
admin.site.register(Lecture)