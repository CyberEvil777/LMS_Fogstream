from django.contrib import admin
from .models import UserProfile


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "group", "date_joined", "updated_on", "is_creator")
    list_filter = ("group", "date_joined", "updated_on", "is_creator")
