from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name='blog-home'),
    path('send_data/',views.send_data,name='send_data')
]
