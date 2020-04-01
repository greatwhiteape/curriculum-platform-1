# Generated by Django 3.0.4 on 2020-04-01 16:44

from django.db import migrations, models
import django.db.models.deletion
import wagtail.core.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Audience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('modifiedDate', models.DateTimeField(auto_now=True)),
                ('age_range', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Intended Age Range',
                'verbose_name_plural': 'Intended Age Ranges',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('program_name', models.CharField(max_length=100)),
                ('program_description', wagtail.core.fields.RichTextField(blank=True, null=True)),
                ('program_url', models.URLField(null=True)),
            ],
            options={
                'verbose_name': 'Program',
                'verbose_name_plural': 'Programs',
            },
        ),
        migrations.CreateModel(
            name='StandardsBody',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('standards_body', models.CharField(max_length=100)),
                ('standards_body_url', models.URLField(blank=True, null=True)),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('modifiedDate', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Standards Bodies',
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('modifiedDate', models.DateTimeField(auto_now=True)),
                ('tag', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tag',
                'verbose_name_plural': 'Tags',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='TimeEstimate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('modifiedDate', models.DateTimeField(auto_now=True)),
                ('time_estimate', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name': 'Time Estimate',
                'verbose_name_plural': 'Time Estimates',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('modifiedDate', models.DateTimeField(auto_now=True)),
                ('topic', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Topic',
                'verbose_name_plural': 'Topics',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('modifiedDate', models.DateTimeField(auto_now=True)),
                ('type', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Type of Asset',
                'verbose_name_plural': 'Type of Assets',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Standards',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('standard', models.CharField(max_length=200)),
                ('standard_link', models.URLField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('modifiedDate', models.DateTimeField(auto_now=True)),
                ('standard_group', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='taxonomy.StandardsBody')),
            ],
            options={
                'verbose_name': 'Standard',
                'verbose_name_plural': 'Standards',
                'managed': True,
            },
        ),
    ]
