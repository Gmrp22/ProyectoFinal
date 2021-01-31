from rest_framework import serializers
#Model
from api.models.sale import Sale

class SaleSerializer(serializers.ModelSerializer):
    """Serializer para ventas"""
    class Meta:
        model = Sale
        fields = ['product', 'seller', 'id', 'price_buy']
        depth = 1

class SaleReportSerializer(serializers.ModelSerializer):
    """Serializer para reporte total de ventas"""
    total_sales = serializers.FloatField(default=0)
    class Meta:
        model = Sale
        fields= ['product', 'seller', 'total_sales']

