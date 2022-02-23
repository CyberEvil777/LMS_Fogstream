from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated

from .models import Course, Group, UserProfile
from .serializers import (
    CourseListSerializer,
    CourseDetailSerializer,
    GroupListSerializer,
    UserProfileSerializer,
)
from .permisions import IsOwnerProfileOrReadOnly

from rest_framework_simplejwt.tokens import RefreshToken
from django.middleware import csrf
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.conf import settings


class CourseList(generics.ListAPIView):
    """Список курсов"""
    queryset = Course.objects.filter(draft=False)
    serializer_class = CourseListSerializer


class CourseDetailView(generics.RetrieveAPIView):
    """Вывод курса"""
    queryset = Course.objects.filter(draft=False)
    serializer_class = CourseDetailSerializer

class GroupList(generics.ListAPIView):
    """Список групп"""
    queryset = Group.objects.all()
    serializer_class = GroupListSerializer
    permission_classes = [IsAuthenticated]


class UserProfileListCreateView(generics.ListCreateAPIView):
    """Выдает все профили пользователей"""
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)


class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Детали профиля"""
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsOwnerProfileOrReadOnly, IsAuthenticated]


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class LoginView(APIView):
    def post(self, request, format=None):
        data = request.data
        response = Response()
        username = data.get('username', None)
        password = data.get('password', None)
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                data = get_tokens_for_user(user)
                response.set_cookie(
                    key = settings.SIMPLE_JWT['AUTH_COOKIE'],
                    value = data["access"],
                    expires = settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                    secure = settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                    httponly = settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                    samesite = settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
                )
                csrf.get_token(request)
                response.data = {"Success" : "Login successfully","data":data}
                return response
            else:
                return Response({"No active" : "This account is not active!!"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"Invalid" : "Invalid username or password!!"}, status=status.HTTP_404_NOT_FOUND)