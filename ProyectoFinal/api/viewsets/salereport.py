from rest_framework import viewsets
from rest_framework.permissions import  IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Count
#Models
from api.models.product import Product
from api.models.sale import Sale
# Serializer
from api.serializers.sale import SaleSerializer
#Permiso
from api.authentication.salereport import IsOwner
class SaleReport(viewsets.GenericViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    permission_classes = [IsOwner, IsAuthenticated]

    @action(detail =False, methods=['get'])
    def reports(self, request):
        user = self.request.user
        sales_total = Sale.objects.aggregate(
           total= Count('product_sale__price')
        )
        print(sales_total)
        contexto = {'Exito': 'Creacion de compra'}
        return Response(contexto)


#         a)	Total de ventas por producto (en moneda)
# b)	Total de ventas global (en moneda)
# c)	Promedio de los precios manejados en su catálogo de productos
