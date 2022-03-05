from django.db import models
from datetime import date

from lms.models import Lessons
from accounts.models import UserProfile


class Task(models.Model):
    """Задания"""
    title = models.CharField("Название задачи", max_length=100)
    description = models.TextField("Описание")
    initial_data = models.DateField("Срок", default=date.today)
    scores = models.PositiveSmallIntegerField("Баллы", default=1)
    draft = models.BooleanField("Черновик", default=False)
    lessons = models.ForeignKey(
        Lessons, verbose_name="Урок", on_delete=models.SET_NULL, null=True
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Задача"
        verbose_name_plural = "Задачи"


class Result(models.Model):
    """Решение задач"""
    task = models.ForeignKey(
    Task, verbose_name="Задача", on_delete=models.SET_NULL, null=True
        )
    userprofile = models.ForeignKey(
    UserProfile, verbose_name="Пользователь", on_delete=models.SET_NULL, null=True
        )
    user_solution = models.TextField("Ответ пользователя")
    true_solution = models.TextField("Правильный ответ")
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.task} = {self.userprofile}"

    class Meta:
        verbose_name = "Результат"
        verbose_name_plural = "Результаты"
