from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated

from .models import UserProfile
from .serializers import UserProfileSerializer, TokenVerifySerializer
from .permissions import IsOwnerProfileOrReadOnly, TeacherPermission

from rest_framework_simplejwt.tokens import RefreshToken
from django.middleware import csrf
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.conf import settings

# from rest_framework_simplejwt.authentication import JWTAuthentication, JWTTokenUserAuthentication
# from .authenticate import CustomAuthentication
#
# from rest_framework_simplejwt import views
# from rest_framework import generics
# from rest_framework_simplejwt.authentication import AUTH_HEADER_TYPES
# from rest_framework_simplejwt.exceptions import InvalidToken, TokenError


class UserProfileListCreateView(generics.ListCreateAPIView):
    """Выдает все профили пользователей"""
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [TeacherPermission, IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)


class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Детали профиля"""
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsOwnerProfileOrReadOnly]


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


#
# class TokenViewBase(generics.GenericAPIView):
#     permission_classes = ()
#     authentication_classes = ()
#
#     serializer_class = None
#
#     www_authenticate_realm = 'api'
#
#     def get_authenticate_header(self, request):
#         return '{0} realm="{1}"'.format(
#             AUTH_HEADER_TYPES[0],
#             self.www_authenticate_realm,
#         )
#
#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#
#         try:
#             serializer.is_valid(raise_exception=True)
#         except TokenError as e:
#             raise InvalidToken(e.args[0])
#
#         return Response(serializer.validated_data, status=status.HTTP_200_OK)
#
#
# class CheckLoginView(TokenViewBase):
#     serializer_class = TokenVerifySerializer
#
#     # def get(self, request):
#     #     data = request.data
#     #     response = Response()
#     #     # print(request.COOKIES['access_token'])
#     #     auth_token = JWTTokenUserAuthentication()
#     #     print(auth_token.get_validated_token(raw_token=request.COOKIES['access_token']))
#     #     username = data.get('username', None)
#     #     password = data.get('password', None)
#     #     user = authenticate(username=username, password=password)
#     #     if auth_token.get_validated_token(raw_token=request.COOKIES['access_token']):
#     #         return Response(status=status.HTTP_200_OK)
#     #     else:
#     #         return Response(status=status.HTTP_404_NOT_FOUND)
#
