from rest_framework import serializers
#Models
from api.models.product import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields=['name', 'price', 'description']    
        
class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields=['name', 'price', 'description', 'seller']    

class ProductSaleReportSerializer(serializers.ModelSerializer):
    total_sales= serializers.FloatField(default=0)
    class Meta:
        model = Product
        fields=['name', 'price', 'description', 'seller', 'total_sales']    