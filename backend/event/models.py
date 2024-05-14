from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class EventType(models.Model):
    title = models.CharField(max_length=200, unique=True)
    detail = models.TextField(null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "1. Event Type"
        verbose_name_plural = "1. Event Types"

    def __str__(self):
        return self.title

class EventBooking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event_type = models.ForeignKey(EventType, on_delete=models.CASCADE)
    event_detail = models.TextField()
    booking_date = models.DateTimeField(auto_now_add=True)
    total_guest = models.IntegerField()
    event_date = models.DateField()
    booking_amount = models.DecimalField(max_digits=10, decimal_places=2)
    booking_detail = models.JSONField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "2. Event Booking"
        verbose_name_plural = "2. Event Booking"

    def __str__(self):
        return f"{self.event_type}-{self.event_date} - {self.user}"

class payment(models.Model):
    eventbooking = models.ForeignKey(EventBooking,on_delete=models.CASCADE)
    txt_id = models.TextField()
    total_amt = models.DecimalField(max_digits=10,decimal_places=2)
    response_data = models.TextField()
    payment_date = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "3. Payment"
        verbose_name_plural = "3. Payment"
    