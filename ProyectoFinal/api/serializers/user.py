from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    profile = ProfileSerializer(required=False)

    class Meta:
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'profile',
            'password'
        )


class UserReadSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)

    class Meta:
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'is_superuser',
            'is_staff',
            'email',
            'profile',
        )


class UserReportSerializer(serializers.ModelSerializer):
    """Serializer para reporte de ventas por usuario"""
    sales_total = serializers.FloatField(default=0)
    avg_price = serializers.FloatField(default=0)

    class Meta:
        model = User
        fields = (
            'username',
            'sales_total',
            'avg_price',
        )