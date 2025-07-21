from rest_framework import serializers
from django.contrib.auth.hashers import check_password
from .models import *
from django.utils import timezone

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = ('firstName' , 'lastName' , 'email' , 'phone' , 'country' , 'city' , 'password')

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        try:
            user = Accounts.objects.get(email=email , password = password)
        except Accounts.DoesNotExist:
            raise serializers.ValidationError("البريد الإلكتروني غير موجود.")

        return user

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'

class addToCartserializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    item_total = serializers.SerializerMethodField()
    
    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'item_total']
    
    def get_item_total(self, obj):
        return obj.product.price * obj.quantity

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
        read_only_fields = ('paymentDate', 'user')
    
    def validate_cardType(self, value):
        if value not in dict(Payment.Cards.choices):
            raise serializers.ValidationError("نوع البطاقة غير صالح")
        return value
    
    def validate_expirationDate(self, value):
        if value < timezone.now().date():
            raise serializers.ValidationError("تاريخ البطاقة منتهي الصلاحية")
        return value