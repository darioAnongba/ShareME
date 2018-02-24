from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from ShareME_app.models import *

def index(request):
    return JsonResponse({'Dario': 'Look behind you!!!'})

def get_car(request, booking_hash):
    car = Car.objects.get(booking_hash=booking_hash)
    return JsonResponse(car.as_dict)

def add_car(request):
    user_address = request.POST['user_address']
    brand = request.POST['brand']
    plate_number = request.POST['plate_number']
    nb_seats = int(request.POST['nb_seats'])
    nb_kms = int(request.POST['nb_kms'])
    picture_url = request.POST['picture_url']
    pick_up_location = request.POST['pick_up_location']
    booking_hash = request.POST['booking_hash']

    profile = Profile.objects.get(address=user_address)
    car = Car(booking_hash=booking_hash, owner=profile, brand=brand, plate_number=plate_number, nb_seats=nb_seats, nb_kms=nb_kms, picture_url=picture_url, pick_up_location=pick_up_location)
    car.save()

    return JsonResponse(car.as_dict)

def get_user(request, address):
    user = Profile.objects.get(address=address)
    return JsonResponse(user.as_dict)

def book_car(request, booking_hash):
    # Basically just update the booking_hash
    new_booking_hash = request.POST['new_booking_hash']
    car = Car.objects.get(booking_hash=booking_hash)
    car.booking_hash = new_booking_hash
    car.save()

    return JsonResponse(car.as_dict)

def verify_car_tx(request, booking_hash):
    # Basically just update the booking_hash
    new_booking_hash = request.POST['new_booking_hash']

    # TODO: Should we verify here if the user verifiying the tx is the one that has the
    # right to do so?

    car = Car.objects.get(booking_hash=booking_hash)
    car.booking_hash = new_booking_hash
    car.save()

    return JsonResponse(car.as_dict)

