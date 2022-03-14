from rest_framework import serializers
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework_simplejwt.settings import api_settings
from rest_framework.exceptions import ValidationError
if api_settings.BLACKLIST_AFTER_ROTATION:
    from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken


from .models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    """Профиль пользователя"""
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = UserProfile
        fields = '__all__'


# class CustomTokenVerifySerializer(serializers.Serializer):
#     token = serializers.CharField()
#
#     def validate(self, request):
#         print(request)
#         token = UntypedToken(request['token'])
#         print(token)
#
#         if api_settings.BLACKLIST_AFTER_ROTATION:
#             jti = token.get(api_settings.JTI_CLAIM)
#             print(jti)
#             if BlacklistedToken.objects.filter(token__jti=jti).exists():
#                 raise ValidationError("Token is blacklisted")
#
#         return {"Success" : "Active Login"}