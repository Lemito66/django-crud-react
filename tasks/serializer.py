from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    '''
    This class will serialize the Task model
    '''
    class Meta:
        model = Task
        #fields = ('id', 'title', 'description', 'done')
        fields = '__all__'
        