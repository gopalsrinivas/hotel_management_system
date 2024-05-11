from django.db import models

# Create your models here.


class RoomType(models.Model):
    title = models.CharField(max_length=200, unique=True)
    detail = models.JSONField(null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Room Type"
        verbose_name_plural = "Room Types"

    def __str__(self):
        return self.title
