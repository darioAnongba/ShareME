from django.shortcuts import render
from django.http import JsonResponse
from ShareME_app.models import *

def index(request):
    return JsonResponse({'Dario': 'Look behind you!!!'})

def get_car(request, booking_hash):
    car = Car.objects.get(booking_hash=booking_hash)
    return JsonResponse(car.as_dict)
