from django.db import models
from .product import Product
from .seller import Seller
from django.contrib.auth.models import User

class Purchase(models.Model):
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='purchase', blank=True, null = True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product')
    nobuyer = models.CharField(default='Comprador anonimo', max_length=50)