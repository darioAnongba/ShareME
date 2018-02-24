from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('car/<booking_hash>', views.get_car),
]