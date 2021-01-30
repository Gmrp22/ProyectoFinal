from rest_framework.permissions import BasePermission
class IsOwner(BasePermission):
    """
    Permitir que solo los dueños puedan ver las ventas
    """
    message= 'No tiene permisos para ver ventas'
    metodos=['GET']
    def has_object_permission(self, request, view, obj):
        if request.method in self.metodos and  obj.seller == request.user:
            return True        
        return False

