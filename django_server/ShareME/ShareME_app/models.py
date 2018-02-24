from django.db import models
from ShareME_app.utils import *


class Profile(models.Model):
    address = models.TextField()
    name = models.TextField()

    def __str__(self):
        return "%s-%s" % (self.address, self.name)


class Car(models.Model):
    booking_hash = models.TextField()
    owner = models.ForeignKey(Profile, on_delete=models.DO_NOTHING)
    brand = models.TextField()
    plate_number = models.TextField()
    nb_seats = models.IntegerField()
    nb_kilometers = models.IntegerField()
    picture_url = models.URLField()
    pick_up_location = models.TextField()

    @property
    def as_dict(self):
        to_return = {
            "brand": self.brand,
            "plate_number": self.plate_number,
            "nb_seats": self.nb_seats,
            "nb_kilometers": self.nb_kilometers,
            "picture_url": self.picture_url,
            "pick_up_location": self.pick_up_location
        }

        return to_return

    def compute_hash(self):
        return sha256_encrypt_string("%s" % self)

    def __str__(self):
        return "%s-%s-%s-%d-%d-%s-%s" % (self.owner, self.brand, self.plate_number, self.nb_seats, self.nb_kilometers, self.picture_url, self.pick_up_location)

