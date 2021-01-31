from rest_framework import serializers
#Model
from api.models.purchase import Purchase

class PurchaseSerializer(serializers.ModelSerializer):
    """Serializer para compras"""
    class Meta:
        model = Purchase
        fields = [ 'product']

class PurchaseListSerializer(serializers.ModelSerializer):
    """Serializer para listar compras"""
    class Meta:
        model = Purchase
        fields = [ 'product', 'buyer', 'nobuyer', 'id', 'price_buy']
        depth = 1