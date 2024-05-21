# Generated by Django 5.0.4 on 2024-05-17 07:55

import website.models
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("website", "0003_alter_profile_options_alter_profile_profile_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="profile_image",
            field=models.ImageField(
                blank=True, null=True, upload_to=website.models.user_directory_path
            ),
        ),
    ]
