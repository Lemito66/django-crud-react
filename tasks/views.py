from rest_framework import viewsets
from .models import Task
from .serializer import TaskSerializer
# Create your views here.
class TaskViewSet(viewsets.ModelViewSet):
    '''
    API endpoint that allows tasks to be viewed or edited.
    
    '''
    queryset = Task.objects.all().order_by('title')
    serializer_class = TaskSerializer