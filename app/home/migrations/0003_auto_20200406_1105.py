# Generated by Django 3.0.5 on 2020-04-06 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20200406_1013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='feature1_link',
            field=models.URLField(blank=True, help_text='Link that call to button action links to', null=True),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='feature2_link',
            field=models.URLField(blank=True, help_text='Link that call to button action links to', null=True),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='feature3_link',
            field=models.URLField(blank=True, help_text='Link that call to button action links to', null=True),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='feature4_link',
            field=models.URLField(blank=True, help_text='Link that call to button action links to', null=True),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='feature5_link',
            field=models.URLField(blank=True, help_text='Link that call to button action links to', null=True),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='feature6_link',
            field=models.URLField(blank=True, help_text='Link that call to button action links to', null=True),
        ),
    ]