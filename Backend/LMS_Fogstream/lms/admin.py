from django.contrib import admin
<<<<<<< Updated upstream
from .models import Category, Course, Group, Review, Lessons, Lecture
=======
from .models import Category, Course, Group, UserProfile, Review, Lessons, Lecture, Task, Result

>>>>>>> Stashed changes


admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Group)
admin.site.register(Review)
admin.site.register(Lessons)
<<<<<<< Updated upstream
admin.site.register(Lecture)
=======
admin.site.register(Lecture)
admin.site.register(Task)
admin.site.register(Result)

>>>>>>> Stashed changes
