from rest_framework import serializers
from .models import Banners


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banners
        fields = ['id', 'title', 'image']
