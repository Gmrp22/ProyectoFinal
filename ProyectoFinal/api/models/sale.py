from django.db import models
from .product import Product
from .seller import Seller
from django.contrib.auth.models import User

class Sale(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE, related_name='product_sale')
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sells')
    