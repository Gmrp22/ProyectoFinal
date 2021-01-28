from django.db import models
from .product import Product
from .seller import Seller


class Purchase(models.Model):
    buyer = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='purchase')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product')