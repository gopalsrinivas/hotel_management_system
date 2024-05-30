from django.urls import path
from .import views

urlpatterns = [
    path('banners', views.BannerList.as_view())
]
