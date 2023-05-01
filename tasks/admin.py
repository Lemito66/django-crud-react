from django.contrib import admin
from .models import Task
# Register your models here.
admin.site.register(Task) # This will make the Tasks model visible on the admin page