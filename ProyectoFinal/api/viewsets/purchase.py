from rest_framework import viewsets,status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
#Models
from api.models.purchase import Purchase
from api.models.seller import Seller
from api.models.product import Product
from api.models.sale import Sale
from django.contrib.auth.models import User

# Serializer
from api.serializers.purchase import PurchaseSerializer, PurchaseListSerializer

class PurchaseViewSet(viewsets.ModelViewSet):
    queryset = Purchase.objects.all()
    def get_serializer_class(self):
        """Define serializer"""
        if self.action == 'list' or self.action == 'retrieve':
            return PurchaseListSerializer
        else:
            return PurchaseSerializer
    def get_permissions(self):
        """" Define permisos """
        if self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]

    def create(self, request):
        try:
            data = request.data
            product = Product.objects.get(pk=data.get('product'))
            seller = product.seller
            if (seller == self.request.user):
                contexto = {'Error': 'Usted es el dueño de este producto'}
                return Response(contexto, status=status.HTTP_403_FORBIDDEN)
            else:

                if request.user.is_authenticated:
                    purchase = Purchase.objects.create(
                        buyer = User.objects.get(pk = self.request.user.id),
                        product = product,
                        nobuyer = "Comprado por usuario"
                        )
                else:
                    purchase = Purchase.objects.create(
                        product = product)

                sale = Sale.objects.create(
                seller = seller,
                product = product
                )
                contexto = {'Exito': 'Creacion de compra'}
                return Response(contexto, status=status.HTTP_201_CREATED)
        except Exception as e:
          return Response({"detail": str(e)}, status= status.HTTP_400_BAD_REQUEST)
