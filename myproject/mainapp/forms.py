from django import forms

from django.contrib.auth.models import User

from .models import Order


class OrderForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args,**kwargs)


    class Meta:
        model = Order
        fields = (
            'name', 'phone', 'comment'
        )
