from django.db import models

from django.contrib.auth.models import User
from lms.models import Group


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    group = models.ForeignKey(
        Group, verbose_name="Группа", on_delete=models.SET_NULL, null=True
    )
    description = models.TextField("Описание профиля", blank=True, null=True)
    date_joined = models.DateTimeField("Дата создания", auto_now_add=True)
    updated_on = models.DateTimeField("Дата изменения", auto_now=True)
    is_creator = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"