from django.db import models

from cloudinary.models import CloudinaryField

from django.utils.text import slugify

from django.contrib.auth.models import User

# Create your models here.

class library(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    image = CloudinaryField('image')

class Course(models.Model):
    LEVEL_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced')
    ]

    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    thumbnail = CloudinaryField('thumbnail')
    featured_video = CloudinaryField('featured_video')
    instructor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses', default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES, default='Beginner')
    duration = models.CharField(max_length=10, default='0')
    category = models.CharField(max_length=255, default="uncategorized")
    price = models.DecimalField(max_digits=8, decimal_places=2, default=0.00)
    discount = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)

    requirements = models.TextField(help_text='Enter the requirements for the course, separated by a comma.', default='')
    content = models.TextField(help_text='Enter the course content, separated by a comma.', default='')

    lesson_title = models.CharField(max_length=255, default='Lesson')
    lesson_video = CloudinaryField('lesson_video', null=True)

    students = models.ManyToManyField(User, related_name='enrolled_courses', blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def get_instructor_username(self):
        return self.instructor.username
    
    def get_requirements_list(self):
        return self.requirements.split(',')

    def get_content_list(self):
        return self.content.split(',')
    
class Enrollment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='enrollments')
    enrolled_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.student.username} enrolled in {self.course.title}'