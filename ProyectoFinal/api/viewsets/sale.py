from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
#Models
from api.models.sale import Sale
# Serializer
from api.serializers.sale import SaleSerializer
#Permiso
from api.authentication.sale import IsOwner
class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    def get_serializer_class(self):
        """Define serializer"""
        if self.action == 'list' or self.action == 'retrieve':
            return SaleSerializer
        else:
            return SaleSerializer
    def get_permissions(self):
        """" Define permisos """
        if self.action == "create":
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated, IsOwner]
        return [permission() for permission in permission_classes]

    def list(self, request):
        """Lista de ventas"""
        data = Sale.objects.filter(seller = request.user.id)
        serializer = SaleSerializer(data, many = True)
        return Response({'results' : serializer.data})
    