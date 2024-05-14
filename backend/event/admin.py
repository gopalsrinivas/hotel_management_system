from django.contrib import admin
from .import models
from django.contrib.admin import AdminSite

# Register your models here.
# class CustomAdminSite(AdminSite):
#     site_header = 'Your Site Admin'
#     site_title = 'Your Site Admin Portal'
#     index_title = 'Welcome to Your Site Admin Portal'

# custom_admin_site = CustomAdminSite(name='custom_admin')
admin.site.register(models.EventType)
admin.site.register(models.EventBooking)
admin.site.register(models.payment)
