from rest_framework import serializers

from .models import Video

class VideoSerializer(serializers.ModelSerializer):
    """Видео"""

    class Meta:
        model = Video
        fields = "__all__"
