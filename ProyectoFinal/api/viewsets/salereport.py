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
        sales_total = User.objects.annotate(sales_total = Sum('sells__price_buy')).filter(id = self.request.user.id)
        avg_price= User.objects.filter(id = self.request.user.id).aggregate(Avg('seller__price'))
        for s in sales_total:
            s.avg_price = avg_price['seller__price__avg']
        #Sale by product
        total_sales = Product.objects.annotate(
        total_sales= Count('product_sale__id'), total_SaleMo = Sum('product_sale__price_buy')).filter(seller = self.request.user.id)

        # for ts in total_sales:
        #     total_SaleMo = ts.total_sales * ts.price
        #     ts.total_SaleMo = total_SaleMo
        
        contexto = {'Report': UserReportSerializer(sales_total, many=True).data,
        'Product_Sales' : ProductSaleReportSerializer(total_sales, many=True).data, 

        }
        return Response(contexto)


