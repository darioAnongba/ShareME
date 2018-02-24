from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('car/<booking_hash>', views.get_car),
    path('car', views.add_car),
    path('user/<address>', views.get_user),
    path('car/<booking_hash>/book', views.book_car),
    path('car/<booking_hash>/verify', views.verify_car_tx),
]