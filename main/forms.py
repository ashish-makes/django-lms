from django import forms
from .models import Course

class CourseEditForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = ('title', 'description', 'thumbnail', 'featured_video', 'level', 'duration', 'category', 'requirements', 'content', 'lesson_title', 'lesson_video')
