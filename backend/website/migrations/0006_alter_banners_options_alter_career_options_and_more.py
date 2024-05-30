# Generated by Django 5.0.4 on 2024-05-21 11:29

import website.models
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("website", "0005_banners_career_control_panel"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="banners",
            options={"verbose_name": "5. Banners", "verbose_name_plural": "5. Banners"},
        ),
        migrations.AlterModelOptions(
            name="career",
            options={"verbose_name": "4. Career", "verbose_name_plural": "4. Careers"},
        ),
        migrations.AlterModelOptions(
            name="control_panel",
            options={
                "verbose_name": "6. Logo Control Panel",
                "verbose_name_plural": "6. Logo Control Panel",
            },
        ),
        migrations.AlterField(
            model_name="career",
            name="mobile",
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name="career",
            name="updated_cv",
            field=models.FileField(
                blank=True, null=True, upload_to=website.models.Career_CV_path
            ),
        ),
    ]
