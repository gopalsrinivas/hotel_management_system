from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from rooms.models import *
from event.models import *

# Create your models here.
class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room_booking = models.ForeignKey(Booking, on_delete=models.SET_NULL, null=True)
    event_booking = models.ForeignKey(EventBooking, on_delete=models.SET_NULL, null=True)
    review_text = models.TextField(null=True)
    rating = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "1. Review"
        verbose_name_plural = "1. Reviews"
    
    def __str__(self):
        return f"{self.user} - {self.rating}"
class Contact(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    mobile = models.CharField(max_length=200)
    message = models.TextField(null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = "2. Contact Us Form"
        verbose_name_plural = "2. Contact Us Form"
    
    def __str__(self):
        return f"{self.full_name} -- {self.mobile}"
    
class Profile(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    profile_image = models.ImageField(upload_to='profile_imgs/')
    mobile = models.CharField(max_length=15)
    
    class Meta:
        verbose_name = "3. Profile"
        verbose_name_plural = "3. Profile"
        
    def __str__(self):
        return f"{self.user.username} -- {self.mobile}"
    
        
@receiver(post_save, sender=User)
def create_user_profile(sender,instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    
