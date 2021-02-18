from django.contrib.auth import authenticate,login
from django.db import transaction
from django.shortcuts import render
from django.contrib.contenttypes.models import ContentType
from django.contrib import messages
from django.views.generic import DetailView, View
from django.http import HttpResponseRedirect, JsonResponse
from .models import  Category, LatestProducts, Car, Services, Reviews,Gallery
from .forms import   OrderForm




class BaseView(View):
    def get(self, request, *args, **kwargs):
        image = LatestProducts.objects.get_products_for_main_page('gallery')
        services = LatestProducts.objects.get_products_for_main_page('services')
        reviews = LatestProducts.objects.get_products_for_main_page('reviews')
        context = {

            'serv': services,
            'reviews':reviews,
            'images':image

        }
        return render(request, 'base.html', context)

class Car_selection(View):

    def get(self, request, *args, **kwargs):

        products = LatestProducts.objects.get_products_for_main_page('car')
        services = LatestProducts.objects.get_products_for_main_page('services')
        context = {
            'products': products,
            'serv': services,

        }

        return render(request, 'auto_selection.html', context)
# class test_view(View):
#
#     def get(self, request, *args, **kwargs):
#
#         image = LatestProducts.objects.get_products_for_main_page('gallery')
#         context = {
#             'images': image,
#
#         }
#         return render(request, 'product_detail.html', context)


class ProductDetailView(DetailView):


    CT_MODEL_MODEL_CLASS = {
        'car': Car,
        'gallery':Gallery

    }
    def dispatch(self, request, *args, **kwargs):
        self.model = self.CT_MODEL_MODEL_CLASS[kwargs['ct_model']]
        self.queryset = self.model._base_manager.all()
        return  super().dispatch(request, *args, **kwargs)


    context_object_name =  'product'
    template_name = 'product_detail.html'
    slug_url_kwarg = 'slug'


class ServicesDetailView(DetailView):

    CT_MODEL_MODEL_CLASS = {
        'services': Services

    }

    def dispatch(self, request, *args, **kwargs):
        self.model = self.CT_MODEL_MODEL_CLASS[kwargs['ct_model']]
        self.queryset = self.model._base_manager.all()
        return  super().dispatch(request, *args, **kwargs)

    context_object_name = 'services'
    template_name = 'services_detail.html'
    slug_url_kwarg = 'slug'




class ReviewsDetailView(DetailView):

    CT_MODEL_MODEL_CLASS = {
        'reviews' : Reviews

    }

    def dispatch(self, request, *args, **kwargs):
        self.model = self.CT_MODEL_MODEL_CLASS[kwargs['ct_model']]
        self.queryset = self.model._base_manager.all()
        return  super().dispatch(request, *args, **kwargs)

    context_object_name = 'reviews'
    slug_url_kwarg = 'slug'


class MakeOrderView(View):
    STATUS_NEW = 'new'
    STATUS_IN_PROGRESS = 'in_progress'
    STATUS_IS_READY = 'is_ready'
    STATUS_COMPLETED = 'completed'
    STATUS_PAYED = 'payed'

    @transaction.atomic
    def post(self, request, *args, **kwargs):
        form = OrderForm(request.POST or None)
        if form.is_valid():
            new_order = form.save(commit=False)
            new_order.name = form.cleaned_data['name']
            new_order.phone = form.cleaned_data['phone']
            new_order.comment = form.cleaned_data['comment']
            new_order.save()
            return HttpResponseRedirect('/')

class CheckoutView(View):
    def get(self, request, *args, **kwargs):

        form = OrderForm(request.POST or None)
        context = {
              'form': form
            }
        return render(request, 'base.html', context)
