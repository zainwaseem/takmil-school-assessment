from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.forms.widgets import TextInput,PasswordInput
from .models import Record



class CreateForm(UserCreationForm):
    class Meta:
        model=User
        fields=['username','password1','password2']

class LoginForm(AuthenticationForm):
    
    username=forms.CharField(widget=TextInput())
    password=forms.CharField(widget=PasswordInput)


class CreateRecordForm(forms.ModelForm):
    class Meta:
        model=Record
        fields = ['firstname', 'lastname', 'email', 'phone', 'address', 'city', 'country']
        exclude=['createdAt']

class UpdateRecordForm(forms.ModelForm):
    class Meta:
        model=Record
        fields = ['firstname', 'lastname', 'email', 'phone', 'address', 'city', 'country']
        exclude=['createdAt']
