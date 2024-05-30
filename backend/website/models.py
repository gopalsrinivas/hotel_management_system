import os
import uuid
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rooms.models import *
from event.models import *
from django.conf import settings

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


def user_directory_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = f"{instance.user.id}_{
        instance.user.username}".lower() + f".{ext}"
    return os.path.join('profile_imgs', filename)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.ImageField(
        upload_to=user_directory_path, blank=True, null=True)
    mobile = models.CharField(max_length=15)

    class Meta:
        verbose_name = "3. Profile"
        verbose_name_plural = "3. Profiles"

    def __str__(self):
        profile_image_url = self.profile_image.url if self.profile_image else "No image"
        return f"{self.user.username} -- {self.mobile} -- {profile_image_url}"


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()


def Career_CV_path(instance, filename):
    # Generate a unique filename to avoid collisions
    ext = filename.split('.')[-1]
    unique_filename = f"temp_placeholder_{uuid.uuid4().hex[:8]}.{ext}"
    return os.path.join('career_cv', unique_filename)

class Career(models.Model):
    full_name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    mobile = models.CharField(max_length=15, null=True)
    message = models.TextField(null=True)
    updated_cv = models.FileField(upload_to=Career_CV_path, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "4. Career"
        verbose_name_plural = "4. Careers"

    def __str__(self):
        return f"{self.full_name} - {self.email} - {self.updated_cv}"

    def save(self, *args, **kwargs):
        try:
            # Save the instance to get an ID
            super().save(*args, **kwargs)

            # After saving, update the filename with the id if it's a temp placeholder
            if self.updated_cv and "temp_placeholder" in self.updated_cv.name:
                ext = self.updated_cv.name.split('.')[-1]
                new_filename = f"{self.id}_{self.full_name.replace(' ', '').lower()}.{ext}"
                new_path = os.path.join('career_cv', new_filename)

                # Rename the file
                temp_path = os.path.join(
                    settings.MEDIA_ROOT, self.updated_cv.name)
                new_full_path = os.path.join(settings.MEDIA_ROOT, new_path)
                os.rename(temp_path, new_full_path)
                # Update the file field to the new path and save again
                self.updated_cv.name = new_path
                super().save(*args, **kwargs)
        except Exception as e:
            print(
                f"An error occurred while saving the Career instance: {str(e)}")
class Banners(models.Model):
    title = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to='banner_imgs/')

    class Meta:
        verbose_name = "5. Banners"
        verbose_name_plural = "5. Banners"

    def __str__(self):
        return f"{self.title} - {self.image}"


class Control_panel(models.Model):
    logo = models.ImageField(upload_to='logo_imgs/')

    class Meta:
        verbose_name = "6. Logo Control Panel"
        verbose_name_plural = "6. Logo Control Panel"

    def __str__(self):
        return self.logo
