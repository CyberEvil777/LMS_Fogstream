from django.db import models
from datetime import date


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
    category = models.ForeignKey(
        Category, verbose_name="Категория", on_delete=models.SET_NULL, null=True
    )
    title = models.CharField("Название", max_length=100)
    short_description = models.CharField("Краткое описание", max_length=100, default="Описание")
    tagline = models.CharField("Слоган", max_length=100, default='')
    information = models.TextField("Информация курса")
    picture = models.ImageField("Обложка курса", upload_to="courses/")
    draft = models.BooleanField("Черновик", default=False)
    color = models.CharField("Цвет", max_length=10, default='#FFFFFF')

    def __str__(self):
        return self.title

    def get_lessons(self):
        return self.lessons_cat_course_set.all()

    class Meta:
        verbose_name = "Курс"
        verbose_name_plural = "Курсы"


class LessonCategory(models.Model):
    """Категория уроков"""
    title = models.CharField("Категория урока", max_length=150)
    course = models.ForeignKey(
        Course, verbose_name="Курсы", on_delete=models.SET_NULL, null=True, related_name="lessons_cat_course"
    )

    def __str__(self):
        return self.title

    def get_lessons(self):
        return self.all_lessons_set.all()

    class Meta:
        verbose_name = "Категория урока"
        verbose_name_plural = "Категории уроков"


class Lessons(models.Model):
    """Уроки"""
    title = models.CharField("Название", max_length=100)
    description = models.TextField("Описание")
    lecture = models.TextField("Лекция")
    task_question_file = models.FileField("Файл с задачами", upload_to="task_question/", blank=True, null=True)
    task_solution_file = models.FileField("Файл решением", upload_to="task_solution/", blank=True, null=True)
    score = models.PositiveIntegerField("Баллы учителя", blank=True, null=True)
    true_solution = models.TextField("Правильное решение")
    initial_data = models.DateField("Срок", default=date.today)
    lesson_category = models.ForeignKey(
        LessonCategory, verbose_name="Категория урока", on_delete=models.SET_NULL, null=True, related_name="all_lessons"
    )
    type = models.CharField("Тип урока", max_length=50, default="lection")
    completed = models.BooleanField("Завершенность курса", default=False)
    draft = models.BooleanField("Черновик", default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Урок"
        verbose_name_plural = "Уроки"


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


class Review(models.Model):
        """Отзывы"""
        email = models.EmailField()
        text = models.TextField("Сообщение", max_length=5000)
        course = models.ForeignKey(Course, verbose_name="курс", on_delete=models.CASCADE, related_name="reviews")
        parent = models.ForeignKey(
            'self', verbose_name="родитель", on_delete=models.SET_NULL, blank=True, null=True, related_name="children"
        )

        def __str__(self):
            return f"{self.email} = {self.course}"

        class Meta:
            verbose_name = "Отзыв"
            verbose_name_plural = "Отзывы"

