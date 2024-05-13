from django.urls import path
from .views import *

urlpatterns = [
    path('room-types/', RoomTypeCreateAPIView.as_view(),name='roomtype-create-list'),
    path('room-types/<int:pk>/', RoomTypeRetrieveUpdateDestroyView.as_view(),name='roomtype-retrieve-update-destroy'),
]
