from django.contrib import admin
from .models import Category, Course, Group, UserProfile, Review


admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Group)
admin.site.register(UserProfile)
admin.site.register(Review)