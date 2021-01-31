from rest_framework import serializers
#Models
from api.models.product import Product

class ProductSerializer(serializers.ModelSerializer):
    """Serializer para crear, actualizar y eliminar"""
    class Meta:
        model = Product
        fields=['name', 'price', 'description']    
        
class ProductListSerializer(serializers.ModelSerializer):
    """Serializer listar producto"""
    class Meta:
        model = Product
        fields=['name', 'price', 'description', 'seller' , 'id', 'state']    

class ProductSaleReportSerializer(serializers.ModelSerializer):
    """Serializer para reporte de venta por producto"""
    total_sales= serializers.FloatField(default=0)
    total_SaleMo = serializers.FloatField(default=0)
    class Meta:
        model = Product
        fields=['name', 'price', 'description', 'seller', 'total_sales', 'total_SaleMo', 'state']    

