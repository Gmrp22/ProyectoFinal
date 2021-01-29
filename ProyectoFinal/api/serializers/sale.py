from rest_framework import serializers
#Model
from api.models.sale import Sale

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = ['product', 'seller']

class SaleReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields= ['product', 'seller']