# Generated by Django 3.0.6 on 2020-05-12 14:40

from django.db import migrations
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0004_auto_20200507_2007'),
    ]

    operations = [
        migrations.AddField(
            model_name='module',
            name='overview_copy',
            field=wagtail.core.fields.RichTextField(blank=True, null=True, verbose_name='Overview Tab Copy'),
        ),
    ]
