from rest_framework.permissions import BasePermission,SAFE_METHODS


class IsOwnerProfileOrReadOnly(BasePermission):
    """Права доступа для просмотра профиля
       Профиль может смотреть только его владелец
    """
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user == request.user