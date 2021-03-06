from rest_framework import viewsets 
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import viewsets,status
from rest_framework.response import Response
#Models
from api.models.product import Product
# Serializer
from api.serializers.product import ProductSerializer, ProductListSerializer
#Permiso
from api.authentication.product import IsOwnerOrReadOnly
class OwnProductsViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    def get_serializer_class(self):
        """Define serializer"""
        if self.action == 'list' or self.action == 'retrieve':
            return ProductListSerializer
        else:
            return ProductSerializer
    def get_permissions(self):
        """" Define permisos """
        permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
        return [permission() for permission in permission_classes]

    def list(self, request):
        """Regresara solo los productos que esten en estado de venta y sean del
        usuario"""
        data = Product.objects.filter(seller = request.user.id).exclude(state = "Terminado")
        serializer = ProductListSerializer(data, many = True)
        return Response({'results' : serializer.data})