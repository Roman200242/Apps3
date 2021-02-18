from django.urls import path
from .views import (
    BaseView,
    ProductDetailView,
    Car_selection,
    CheckoutView,
    ServicesDetailView,
    ReviewsDetailView,
    MakeOrderView
)


urlpatterns = [
    path('', BaseView.as_view(), name='base'),
    path('select_car', Car_selection.as_view(), name='select_car'),
    path('select_car/<str:ct_model>/<str:slug>/', ProductDetailView.as_view(), name='product_detail'),
    path('<str:ct_model>/<str:slug>/', ServicesDetailView.as_view(), name='services_detail'),
    path('reviews/', ReviewsDetailView.as_view(), name='reviews_detail'),
    path('make_order/', MakeOrderView.as_view(), name='make_order'),


    #path('login/', LoginView.as_view(), name='login'),
    #path('registration/', RegistrationView.as_view(), name='registration'),
]
