from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('car/<plate_number>', views.get_car),
    path('car', views.add_car),
    path('user/<address>', views.get_user),
]