from django.contrib import admin
from django.contrib.auth.models import User
from .import models

# Register your models here.
admin.site.register(models.Review)
admin.site.register(models.Contact)

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('get_serial_number', 'user', 'mobile', 'profile_image')
    list_filter = ('mobile',)
    search_fields = ('user__username', 'mobile')
    ordering = ('-user__id',)

    def get_serial_number(self, obj):
        return obj.id
    get_serial_number.short_description = 'S.No'

admin.site.register(models.Profile, ProfileAdmin)

admin.site.register(models.Career)
admin.site.register(models.Banners)
admin.site.register(models.Control_panel)
