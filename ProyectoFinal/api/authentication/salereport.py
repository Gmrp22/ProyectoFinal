from rest_framework.permissions import BasePermission
class IsOwner(BasePermission):
    """
    Permitir que solo los vendedores vean sus reportess
    """
    message= 'No tiene permisos para ver reportes'
    metodos=['LIST']
    def has_object_permission(self, request, view, obj):
        if request.method in self.metodos and  obj.seller == request.user:
            return True        
        return False