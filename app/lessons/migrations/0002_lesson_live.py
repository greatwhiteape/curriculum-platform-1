# Generated by Django 3.0.6 on 2020-06-16 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lesson',
            name='live',
            field=models.BooleanField(default=False, verbose_name='Publish'),
        ),
    ]
