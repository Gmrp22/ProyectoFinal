from django.db import models
from .product import Product
from .seller import Seller


class Sale(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='sells')
    