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


class Video(models.Model):
    """Видео"""
    name = models.CharField("Название видео", max_length=100)
    file = models.URLField("Видео-урок", max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Видео"
        verbose_name_plural = "Видео"

class Lecture(models.Model):
    """Лекция"""
    title = models.CharField("Название лекции", max_length=100)
    description = models.TextField("Описание")
    information = models.TextField("Информация")
    video = models.ForeignKey(
        Video, verbose_name="Видео-урок", on_delete=models.SET_NULL, null=True, blank=True
    )
    draft = models.BooleanField("Черновик", default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Лекция"
        verbose_name_plural = "Лекции"

class Course(models.Model):
    """Курсы"""
    category = models.ForeignKey(
        Category, verbose_name="Категория", on_delete=models.SET_NULL, null=True
    )
    title = models.CharField("Название", max_length=100)
    tagline = models.CharField("Слоган", max_length=100, default='')
    information = models.TextField("Информация курса")
    picture = models.ImageField("Обложка курса", upload_to="courses/")
    draft = models.BooleanField("Черновик", default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Курс"
        verbose_name_plural = "Курсы"

class Lessons(models.Model):
    """Уроки"""
    name = models.CharField("Название", max_length=100)
    description = models.TextField("Описание")
    lecture = models.ForeignKey(
        Lecture, verbose_name="Категория", on_delete=models.SET_NULL, null=True
    )
    course = models.ForeignKey(
        Course, verbose_name="Курсы", on_delete=models.SET_NULL, null=True
    )
    initial_data = models.DateField("Срок", default=date.today)
    draft = models.BooleanField("Черновик", default=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Урок"
        verbose_name_plural = "Уроки"

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



class Group(models.Model):
    """Группа"""
    name = models.CharField("Название Группы", max_length=100)
    date = models.DateField("Старт курса", default=date.today)
    course = models.ForeignKey(
        Course, verbose_name="Курс", on_delete=models.SET_NULL, null=True
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Группа"
        verbose_name_plural = "Группы"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    group = models.ForeignKey(
        Group, verbose_name="Группа", on_delete=models.SET_NULL, null=True
    )
    description = models.TextField("Описание профиля", blank=True, null=True)
    date_joined = models.DateTimeField("Дата создания", auto_now_add=True)
    updated_on = models.DateTimeField("Дата изменения", auto_now=True)
    avatar = models.ImageField("Аватар", upload_to="UserProfile/")
    is_creator = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user}"

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"


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

class Review(models.Model):
        """Отзывы"""
        email = models.EmailField()
        text = models.TextField("Сообщение", max_length=5000)
        course = models.ForeignKey(Course, verbose_name="курс", on_delete=models.CASCADE, related_name="reviews")

        def __str__(self):
            return f"{self.email} = {self.course}"

        class Meta:
            verbose_name = "Отзыв"
            verbose_name_plural = "Отзывы"

            '''parent = models.ForeignKey(
                'self', verbose_name="родитель", on_delete=models.SET_NULL, blank=True, null=True, related_name="children"
                )'''

