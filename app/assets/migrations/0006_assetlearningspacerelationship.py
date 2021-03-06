# Generated by Django 3.0.11 on 2020-12-11 16:55

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('taxonomy', '0002_learningspace'),
        ('assets', '0005_auto_20201125_2028'),
    ]

    operations = [
        migrations.CreateModel(
            name='AssetLearningSpaceRelationship',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('asset', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='learningspace_relationship', to='assets.Asset')),
                ('learning_space', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='taxonomy.LearningSpace')),
            ],
        ),
    ]
