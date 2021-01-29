from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
#Models
from api.models.seller import Seller
# Serializer
from api.serializers.seller import SellerSerializer


class SellerViewSet(viewsets.ModelViewSet):
    queryset = Seller.objects.all()
    def get_serializer_class(self):
        """Define serializer"""
        if self.action == 'list' or self.action == 'retrieve':
            return SellerSerializer
        else:
            return SellerSerializer
    def get_permissions(self):
        """" Define permisos """
        if self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]
