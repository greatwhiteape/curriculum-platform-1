# Generated by Django 3.0.5 on 2020-04-06 12:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('taxonomy', '0001_initial'),
        ('activity', '0005_auto_20200406_1220'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='program',
        ),
        migrations.AddField(
            model_name='activity',
            name='program',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='taxonomy.Program'),
        ),
    ]