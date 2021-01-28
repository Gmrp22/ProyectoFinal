from django.db import models
from .seller import Seller
class Product(models.Model):
    name = models.CharField(max_length = 100)
    price = models.FloatField()
    state = models.CharField(default = "En Venta", max_length = 100)
    description = models.TextField()
    seller = models.ForeignKey(Seller,related_name = 'seller', on_delete=models.CASCADE)