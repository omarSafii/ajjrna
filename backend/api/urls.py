from . import views
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView  # استيراد JWT refresh إذا تستخدمه

urlpatterns = [
    # ـــــــــــــــــــــــــــــــــــــــــــــــــ
    # Products: قائمة عامة وبحث + حسب الفئة
    path(
        'products/',
        views.ProductView.as_view(),
        name='product-list'
    ),
    path(
        'products/<int:cateID>/',
        views.ProductView.as_view(),
        name='product-by-category'
    ),

    # Authentication
    path('login/',    views.LoginAPIView.as_view(),    name='login'),
    path('register/', views.RegisterView.as_view(),    name='register'),
    path('token/refresh/', TokenRefreshView.as_view(),  name='token_refresh'),

    # Categories
    path(
        'categories/',
        views.categoriesView.as_view(),
        name='categories-list'
    ),

    # Cart
    path('addToCart/',                 views.addToCart.as_view(),      name='add-to-cart'),
    path('cart/<int:user_id>/',        views.CartItemsView.as_view(),   name='cart-items'),
    path('cart/delete/<int:item_id>/', views.CartItemDelete.as_view(),  name='cart-item-delete'),
    path('cart/put/<int:item_id>/',    views.CartItemUpdate.as_view(),  name='cart-item-update'),

    # Payments
    path(
        'payments/<int:user_id>/',
        views.PaymentAPIView.as_view(),
        name='create-payment'
    ),
]

# إذا عندك إعدادات media/static
from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
