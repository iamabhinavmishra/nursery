from django.db import models
from api.user.models import CustomUser
from api.product.models import Product

# Create your models here.


class Order(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    product_names = models.CharField(max_length=500)
    total_product = models.CharField(max_length=500, default = 0)
    transcation_id =  models.CharField(max_length=150, default = 0)
    totalamt = models.CharField(max_length=50, default = 0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)