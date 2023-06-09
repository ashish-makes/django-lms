# Generated by Django 4.1.7 on 2023-03-20 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_course_lesson_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='content',
            field=models.TextField(default='', help_text='Enter the course content, separated by a comma.'),
        ),
        migrations.AddField(
            model_name='course',
            name='requirements',
            field=models.TextField(default='', help_text='Enter the requirements for the course, separated by a comma.'),
        ),
    ]
