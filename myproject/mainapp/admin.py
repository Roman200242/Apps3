from PIL import Image
from django import forms
from django.forms import ModelChoiceField, ModelForm, ValidationError
from django.contrib import admin
from  django.utils.safestring import  mark_safe
from .models import *

class GalleryInline(admin.TabularInline):
    fk_name = 'car'
    model = Gallery


@admin.register(Car)
class ProductAdmin(admin.ModelAdmin):
    inlines = [GalleryInline,]

admin.site.register(Category)
admin.site.register(Reviews)
admin.site.register(Services)
admin.site.register(Order)
