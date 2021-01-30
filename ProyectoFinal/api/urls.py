from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url
from api import viewsets


router = DefaultRouter()
router.register(r'user', viewsets.UserViewset)
router.register(r'seller', viewsets.SellerViewSet)
router.register(r'product', viewsets.ProductViewSet)
router.register(r'ownproducts', viewsets.OwnProducts)
router.register(r'salereport', viewsets.SaleReport)
router.register(r'sale', viewsets.SaleViewSet)
router.register(r'purchase', viewsets.PurchaseViewSet)
urlpatterns = [
    path('api/', include(router.urls)),
    url(r"^api/token", obtain_auth_token, name="api-token"),
    path('api-auth/', include('rest_framework.urls')),
]
