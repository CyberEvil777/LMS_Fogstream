from django.apps import AppConfig


class LmsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'lms'
<<<<<<< Updated upstream
=======

    def ready(self):
        import lms.signals

>>>>>>> Stashed changes
