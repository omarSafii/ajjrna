from .models import Accounts
class CustomAuthBackend():
    def authenticate(self, request, email=None, password=None):
        try:
            if Accounts.objects.filter(email=email , password = password).exists():
                user = Accounts.objects.get(email=email , password = password)
                return user
            
        except Accounts.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return Accounts.objects.get(id=user_id)
        except Accounts.DoesNotExist:
            return None
        



        