from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class RoomType(models.Model):
    title = models.CharField(max_length=200, unique=True)
    detail = models.JSONField(null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "1. Room Type"
        verbose_name_plural = "1. Room Types"

    def __str__(self):
        return self.title
class Room(models.Model):
    room_type = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    room_no = models.CharField(max_length=100)
    room_des = models.TextField(null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "2. Room"
        verbose_name_plural = "2. Rooms"

    def __str__(self):
        return f"{self.room_no} - {self.room_type}"
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    booking_date = models.DateTimeField(auto_now_add=True)
    total_guest = models.IntegerField()
    checkin_date = models.DateField()
    checkout_date = models.DateField()
    booking_amount = models.DecimalField(max_digits=10, decimal_places=2)
    booking_detail = models.JSONField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "3. Booking"
        verbose_name_plural = "3. Bookings"

    def __str__(self):
        return f"{self.room.room_type.title}-{self.room.room_no} - {self.user}"
class Payment(models.Model):  # Changed 'payment' to 'Payment'
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    txt_id = models.TextField()
    total_amt = models.DecimalField(max_digits=10, decimal_places=2)
    response_data = models.TextField()
    payment_date = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name = "4. Payment"
        verbose_name_plural = "4. Payments"

class Gallery(models.Model):
    image = models.ImageField(upload_to='g_imgs/')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "5. Gallery"
        verbose_name_plural = "5. Gallery"

class RoomImage(models.Model):
    room_type = models.ForeignKey(RoomType, on_delete=models.CASCADE,null=True)
    image = models.ImageField(upload_to='room_type_imgs/')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "6. Room Images"
        verbose_name_plural = "6. Room Images"
