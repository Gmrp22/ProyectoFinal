from rest_framework import serializers
#Model
from api.models.purchase import Purchase

class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = [ 'product']

class PurchaseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = [ 'product', 'buyer', 'nobuyer']
        depth = 1