from django.db import models

# Create your models here.
class Tasks(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True) # blank=True means that this field is optional
    done = models.BooleanField(default=False)