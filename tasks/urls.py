from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import TaskViewSet

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='tasks') 

urlpatterns = [
    path('api/v1/', include(router.urls), name='index'), # Get, Post, Put, Delete
    path('docs/', include_docs_urls(title='Task API'), name='docs'), # Documentation
]