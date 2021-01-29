from django.db import models
from .seller import Seller
from django.contrib.auth.models import User
class Product(models.Model):
    name = models.CharField(max_length = 100)
    price = models.FloatField()
    state = models.CharField(default = "En Venta", max_length = 100)
    description = models.TextField()
    seller = models.ForeignKey(User,related_name = 'seller', on_delete=models.CASCADE)