from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Accounts)
admin.site.register(Categories)
admin.site.register(Products)
admin.site.register(ProductImages)
admin.site.register(ProductAttributes)
admin.site.register(Orders)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Payment)