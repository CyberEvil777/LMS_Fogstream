from django.db import models
from django.core.validators import FileExtensionValidator
from datetime import date


class Video(models.Model):
    """Видео"""
    title = models.CharField("Название", max_length=100)
    description = models.TextField("Описание")
    image = models.ImageField("Превью", upload_to='image/')
    file = models.FileField("Видео-файл",
        upload_to='video/')
        #validators=[FileExtensionValidator(allowed_extensions=['mp4'])]

    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Видео"
        verbose_name_plural = "Видео"