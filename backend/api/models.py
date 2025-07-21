from django.db import models

class Accounts(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.EmailField(max_length=50 , unique=True)
    phone = models.CharField(max_length=50)
    country = models.CharField(max_length=25)
    city = models.CharField(max_length=30)
    password = models.CharField(max_length=50)

class Categories(models.Model):
    CateName = models.CharField(max_length=25)
    image = models.FileField(upload_to='category/images' , null = True , blank=True)

class Products(models.Model):
    ProName = models.CharField(max_length=255)
    ProImage = models.FileField(upload_to='product/images' , null=True , blank=True)
    category = models.ForeignKey(Categories , on_delete=models.CASCADE)
    Description = models.TextField()
    price = models.FloatField()
    
class ProductImages(models.Model):
    image = models.ImageField(upload_to="media/productimages")
    product = models.ForeignKey(Products , on_delete=models.CASCADE)

class ProductAttributes (models.Model):
    attrKey = models.CharField(max_length=120)
    attrValue = models.TextField()
    product = models.ForeignKey(Products , on_delete=models.CASCADE)

class Orders(models.Model):
    class Status(models.TextChoices):
        CANCELLED = 'cancelled', 'cancelled'
        APPROVED = 'approved', 'approved'
        RETURNED = 'returned', 'returned'
        PENDING = 'pending' , 'pending'
    product = models.ForeignKey(Products , on_delete=models.CASCADE)
    ownerName = models.ForeignKey(Accounts , on_delete=models.CASCADE)
    renterName = models.CharField(max_length=30)
    requestDate = models.DateField(auto_now=True)
    status = models.CharField(max_length=15 , choices= Status.choices , default=Status.PENDING , verbose_name='status')

class Cart(models.Model):
    class status(models.TextChoices):
        PAID = 'paid' , 'paid'
        PENDING = 'pinding' , 'pinding'
    user = models.ForeignKey(Accounts, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    state = models.CharField(max_length=10 , choices=status.choices 
                             ,default=status.PENDING, blank=True , null=True)

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    
class Payment(models.Model):
    class Cards(models.TextChoices):
        VISA = 'visa', 'Visa'
        PAYPAL = 'paypal', 'PayPal'
        RUPAY = 'rupay', 'RuPay'
        MASTERCARD = 'mastercard', 'MasterCard'
    
    user = models.ForeignKey(Accounts, on_delete=models.CASCADE)
    cardType = models.CharField(max_length=10, choices=Cards.choices, verbose_name='Card Type')
    nameOnCard = models.CharField(max_length=120)
    expirationDate = models.DateField()
    CCV = models.CharField(max_length=20)
    paymentDate = models.DateTimeField(auto_now_add=True)
    cart = models.ForeignKey('Cart', on_delete=models.SET_NULL, blank=True, null=True)
