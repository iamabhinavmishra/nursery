from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.HyperinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('user')