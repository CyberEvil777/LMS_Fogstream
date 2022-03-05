from rest_framework.permissions import BasePermission, SAFE_METHODS
from .models import UserProfile


class IsOwnerProfileOrReadOnly(BasePermission):
    """Права доступа для просмотра профиля
       Профиль может смотреть только его владелец
    """
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user == request.user


class TeacherPermission(BasePermission):
    """Права учителя"""

    def has_permission(self, request, view):
        if request.method == 'GET':
            if UserProfile.objects.filter(is_creator=True):
                return True
        return False


    # def has_object_permission(self, request, view, obj):
    #     if request.method in SAFE_METHODS:
    #         return True
    #     print(obj)
    #     return obj.is_creator == request.is_creator