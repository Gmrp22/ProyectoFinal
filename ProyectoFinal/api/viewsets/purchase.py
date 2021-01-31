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
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

    def create(self, request):
        """Creacion de productos
        Caso #1: Si el dueño del producto quiere comprarlo, no se le permitira
        Caso #2: Si se inicio sesion se establece que se compro por el usuario
        Caso #3:Si no se inicia sesion, se establece que es una compra anonima
        """
        try:
            data = request.data
            product = Product.objects.get(pk=data.get('id'))
            seller = product.seller
            if (seller == self.request.user):
                contexto = {'Error': 'Usted es el dueño de este producto'}
                return Response(contexto, status=status.HTTP_403_FORBIDDEN)
            else:

                if request.user.is_authenticated:
                    purchase = Purchase.objects.create(
                        buyer = User.objects.get(pk = self.request.user.id),
                        product = product,
                        nobuyer = "Comprado por usuario",
                        price_buy = product.price 
                        )
                else:
                    purchase = Purchase.objects.create(
                        product = product)

                sale = Sale.objects.create(
                seller = seller,
                product = product,
                price_buy = product.price
                )
                contexto = {'Exito': 'Creacion de compra'}
                return Response(contexto, status=status.HTTP_201_CREATED)
        except Exception as e:
          return Response({"detail": str(e)}, status= status.HTTP_400_BAD_REQUEST)
    def list(self, request):
        data = Purchase.objects.filter(buyer = request.user.id)
        serializer = PurchaseListSerializer(data, many = True)
        return Response({'results' : serializer.data})
    