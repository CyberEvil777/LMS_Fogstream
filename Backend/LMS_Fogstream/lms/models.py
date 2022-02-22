from django.db import models
from datetime import date

from django.contrib.auth.models import User


class Category(models.Model):
    """Категория"""
    name = models.CharField("Категория", max_length=150)
    descriptions = models.TextField("Описание")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Course(models.Model):
    """Курсы"""
    title = models.CharField("Название", max_length=100)
    tagline = models.CharField("Слоган", max_length=100, default='')
    information = models.TextField("Информация курса")
    picture = models.ImageField("Обложка курса", upload_to="courses/")
    year = models.PositiveSmallIntegerField("Дата выхода", default=2022)
    category = models.ForeignKey(
        Category, verbose_name="Категория", on_delete=models.SET_NULL, null=True
    )
    draft = models.BooleanField("Черновик", default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Курс"
        verbose_name_plural = "Курсы"


class Review(models.Model):
    """Отзывы"""
    email = models.EmailField()
    name = models.CharField("Имя", max_length=100)
    text = models.TextField("Сообщение", max_length=5000)
    parent = models.ForeignKey(
        'self', verbose_name="родитель", on_delete=models.SET_NULL, blank=True, null=True, related_name="children"
    )
    course = models.ForeignKey(Course, verbose_name="курс", on_delete=models.CASCADE, related_name="reviews")

    def __str__(self):
        return f"{self.name} = {self.course}"

    class Meta:
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"


class Group(models.Model):
    """Группа"""
    name = models.CharField("Название Группы", max_length=100)
    date = models.DateField("Стартр курса", default=date.today)
    course = models.ForeignKey(Course, verbose_name="курс", on_delete=models.CASCADE, related_name="groups")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Группа"
        verbose_name_plural = "Группы"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    description = models.TextField("Описание профиля", blank=True, null=True)
    date_joined = models.DateTimeField("Дата создания", auto_now_add=True)
    updated_on = models.DateTimeField("Дата изменения", auto_now=True)
    is_creator = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
