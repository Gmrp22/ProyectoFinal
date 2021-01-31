from rest_framework import serializers
#Model
from api.models.sale import Sale

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = ['product', 'seller', 'id', 'price_buy']
        depth = 1

class SaleReportSerializer(serializers.ModelSerializer):
    total_sales = serializers.FloatField(default=0)
    class Meta:
        model = Sale
        fields= ['product', 'seller', 'total_sales']

