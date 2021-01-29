from rest_framework import viewsets
from rest_framework.permissions import  IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Count, Sum, Avg
#Models
from api.models.product import Product
from api.models.sale import Sale
from django.contrib.auth.models import User
# Serializer
from api.serializers.sale import SaleSerializer, SaleReportSerializer
from api.serializers.user import UserReportSerializer
from api.serializers.product import  ProductSaleReportSerializer
#Permiso
from api.authentication.salereport import IsOwner
class SaleReport(viewsets.GenericViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    permission_classes = [IsOwner, IsAuthenticated]

    @action(detail =False, methods=['get'])
    def reports(self, request):
        user = self.request.user
        #Global sale and average price
        sales_total = User.objects.annotate(sales_total = Sum('sells__product__price'), avg_price= Avg('sells__product__price')).filter(id = self.request.user.id)
        #Sale by product
        total_sales = Product.objects.annotate(
            total_sales= Count('product_sale__id')).filter(seller = self.request.user.id)


        contexto = {'Report': UserReportSerializer(sales_total, many=True).data,
        'Product_Sales' : ProductSaleReportSerializer(total_sales, many=True).data, 
        }
        return Response(contexto)


