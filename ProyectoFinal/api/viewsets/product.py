from rest_framework import viewsets,status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
#Models
from api.models.product import Product
# Serializer
from api.serializers.product import ProductSerializer, ProductListSerializer
#Permiso
from api.authentication.product import IsOwnerOrReadOnly

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    def get_serializer_class(self):
        """Define serializer"""
        if self.action == 'list' or self.action == 'retrieve':
            return ProductListSerializer
        else:
            return ProductSerializer
    def get_permissions(self):
        """" Define permisos """
        if self.action == "list" or self.action=="retrieve":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
        return [permission() for permission in permission_classes]

    def create(self,request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['seller'] = self.request.user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        print("--------------------")
        product = Product.objects.get(pk = pk)
        product.state = 'Terminado'
        product.save()
        return Response(status=status.HTTP_204_NO_CONTENT)