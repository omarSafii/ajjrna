from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from django.contrib.auth import login
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.contrib.sessions.backends.db import SessionStore
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics , status
from rest_framework.parsers import MultiPartParser
from . import authanticationsManual 
from django.shortcuts import get_object_or_404
# Create your views here.

class ProductView(APIView):
    serializer_class = ProductSerializer

    def get(self, request, cateID=0):
        # استقبل كلمة البحث إذا موجودة بالطلب
        search_query = request.query_params.get('search', '')

        # إذا ما في cateID جب كل المنتجات، غير هيك جب حسب التصنيف
        if cateID == 0:
            products = Products.objects.all()
        else:
            products = Products.objects.filter(category=Categories.objects.get(id=cateID))

        # إذا في كلمة بحث، فلتر النتائج حسبها
        if search_query:
            products = products.filter(ProName__icontains=search_query)

        # رجّع النتائج للسيريالايزر
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class LoginAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            return Response({
                "message": "تم تسجيل الدخول بنجاح",
                "user": {
                    "email": serializer.validated_data.email,
                    "first_name": serializer.validated_data.firstName,
                    "last_name": serializer.validated_data.lastName ,
                    "ID" : serializer.validated_data.id,
                }
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterView(APIView):
    def post(self , request):
        serializer = RegisterSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({'message': "create account operation success"})

class categoriesView(APIView):
    serializer_class = CategoriesSerializer
    def get(self, request):
        cates = Categories.objects.all()
        serializer = CategoriesSerializer(cates, many=True)
        countOfProducts = {}
        for cat in cates:
            countOfProducts[cat.CateName] = Products.objects.filter(category=cat).count()
        return Response({
            'categories': serializer.data,
            'countOfProducts': countOfProducts
        })

class addToCart(APIView):
    serializer_class = addToCartserializer
    
    def post(self, request):
        try:
            # التحقق من وجود البيانات المطلوبة
            user_id = request.data.get('user')
            product_id = request.data.get('product')
            
            if not user_id or not product_id:
                return Response({
                    'status': 'error',
                    'message': 'User ID and Product ID are required'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # التحويل إلى أعداد صحيحة مع التحقق من الصحة
            try:
                user_id = int(user_id)
                product_id = int(product_id)
            except (ValueError, TypeError):
                return Response({
                    'status': 'error',
                    'message': 'User ID and Product ID must be valid integers'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # الحصول على المستخدم والمنتج
            user = Accounts.objects.get(id=user_id)
            product = Products.objects.get(id=product_id)
            
            # إدارة سلة التسوق
            cart, created = Cart.objects.get_or_create(user=user)
            cart_item, item_created = CartItem.objects.get_or_create(
                cart=cart,
                product=product,
                defaults={'quantity': 1}
            )
            
            if not item_created:
                cart_item.quantity += 1
                cart_item.save()
            
            # استخدام Response بدلاً من JsonResponse للتوافق مع DRF
            return Response({
                'status': 'success',
                'message': 'Product added to cart',
                'cart_item_id': cart_item.id,
                'quantity': cart_item.quantity
            }, status=status.HTTP_201_CREATED)
            
        except Accounts.DoesNotExist:
            return Response({
                'status': 'error',
                'message': 'User not found'
            }, status=status.HTTP_404_NOT_FOUND)
            
        except Products.DoesNotExist:
            return Response({
                'status': 'error',
                'message': 'Product not found'
            }, status=status.HTTP_404_NOT_FOUND)
            
        except Exception as e:
            return Response({
                'status': 'error',
                'message': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
class CartItemsView(APIView):
    """
    عرض محتويات سلة المستخدم
    """
    def get(self, request, user_id):
        try:
            # الحصول على سلة المستخدم
            user = get_object_or_404(Accounts, id=user_id)
            cart = get_object_or_404(Cart, user=user , state='pinding')
            # جلب عناصر السلة مع معلومات المنتجات
            cart_items = CartItem.objects.filter(cart=cart).select_related('product')
            
            # حساب المجموع الكلي
            total_price = sum(item.product.price * item.quantity for item in cart_items)
            
            # إعداد البيانات للرد
            response_data = {
                'cart_items': CartItemSerializer(cart_items, many=True).data,
                'total_items': cart_items.count(),
                'total_price': total_price
            }
            
            return Response(response_data)
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
class CartItemDelete(APIView):
    def delete(self , request , item_id):
        try :
            if CartItem.objects.filter(id = item_id).exists():
                CartItem.objects.get(id = item_id).delete()
                return Response({"operation" : "success"})
            else :
                return Response({"operation" : "faild"})
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class CartItemUpdate(APIView):
    def put(self , request , item_id):
        try :
            if CartItem.objects.filter(id = item_id).exists():
                cr = CartItem.objects.get(id = item_id)
                cr.quantity = request.data.get('quantity')
                cr.save()

                return Response({"operation" : "success"})
            else :
                return Response({"operation" : "faild"})
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
class PaymentAPIView(APIView):
    def post(self, request , user_id):
        # إضافة تاريخ الدفع تلقائياً
        request.data['paymentDate'] = timezone.now()
        # التحقق من وجود المستخدم والسلة
        try:
            user = get_object_or_404(Accounts, id=int(user_id))
            cart = Cart.objects.filter(user = user).last()
            Payment(user = user , cardType = request.data.get('cardType') , nameOnCard = request.data.get('nameOnCard') ,
                     CCV = request.data.get('CCV') , cart = cart ,expirationDate =  request.data.get('expirationDate')).save()
            cart.state = 'paid'
            cart.save()
            return Response(
                {
                    'status': 'success',
                    'message': 'Payment processed successfully',
                },
                status=status.HTTP_201_CREATED
            )
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
        

                