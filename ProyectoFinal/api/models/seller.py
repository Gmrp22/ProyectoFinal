from django.db import models

class Seller(models.Model):
     """Seller model"""
     name = models.CharField(max_length = 150)
     last_name = models.CharField(max_length = 150)
     phone = models.CharField(max_length = 100)
