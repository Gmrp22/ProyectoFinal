from rest_framework import serializers
#Models
from api.models.seller import Seller


class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = ['name','last_name', 'phone']