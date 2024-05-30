from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .import serializers
from . import models

# Create your views here.
class BannerList(ListAPIView):
    serializer_class = serializers.BannerSerializer
    queryset = models.Banners.objects.all()
    
    
    
    