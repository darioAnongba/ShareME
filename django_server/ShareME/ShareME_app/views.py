from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from ShareME_app.models import *

def index(request):
    return JsonResponse({'Dario': 'Look behind you!!!'})

def get_car(request, plate_number):
    car = Car.objects.get(plate_number=plate_number)
    return JsonResponse(car.as_dict)

def add_car(request):
    user_address = request.POST['user_address']
    brand = request.POST['brand']
    plate_number = request.POST['plate_number']
    nb_seats = int(request.POST['nb_seats'])
    nb_kms = int(request.POST['nb_kms'])
    picture_url = request.POST['picture_url']
    pick_up_location = request.POST['pick_up_location']

    profile = Profile.objects.get(address=user_address)
    car = Car(owner=profile, brand=brand, plate_number=plate_number, nb_seats=nb_seats, nb_kms=nb_kms, picture_url=picture_url, pick_up_location=pick_up_location)
    car.save()

    return JsonResponse(car.as_dict)

def get_user(request, address):
    user = Profile.objects.get(address=address)
    return JsonResponse(user.as_dict)

