
from PIL import Image
from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.contrib.contenttypes.models import ContentType


User = get_user_model()


def get_product_url(obj, viewname):
    ct_model = obj.__class__._meta.model_name
    return reverse(viewname, kwargs={'ct_model': ct_model, 'slug':obj.slug})


class MinReolutionErrorException(Exception):
    pass


class MaxReolutionErrorException(Exception):
    pass


def get_product_url(obj, viewname):
        ct_model = obj.__class__._meta.model_name
        return reverse(viewname, kwargs={'ct_model': ct_model, 'slug': obj.slug})


def get_services_url(obj, viewname):
    ct_model = obj.__class__._meta.model_name
    return reverse(viewname, kwargs={'ct_model': ct_model, 'slug': obj.slug})


def get_reviews_url(obj, viewname):
    ct_model = obj.__class__._meta.model_name
    return reverse(viewname, kwargs={'ct_model': ct_model, 'slug': obj.slug})

class LatestProductsManager:

        @staticmethod
        def get_products_for_main_page(*args, **kwargs):
            with_respect_to = kwargs.get('with_respect_to')
            products = []
            ct_models = ContentType.objects.filter(model__in=args)
            for ct_model in ct_models:
                model_products = ct_model.model_class()._base_manager.all().order_by('-id')[:100]
                products.extend(model_products)
            if with_respect_to:
                ct_model = ContentType.objects.filter(model=with_respect_to)
                if ct_model.exists():
                    if with_respect_to in args:
                        return sorted(
                            products, key=lambda x: x.__class__._meta.model_name.startswith(with_respect_to),
                            reverse=True
                        )
            return products

class LatestProducts:

        objects = LatestProductsManager()


class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name='Назва категорії')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('category_detail', kwargs={'slug': self.slug})


class Product(models.Model):

    class Meta:
        abstract = True

    category = models.ForeignKey(Category, verbose_name='Категорія', on_delete=models.CASCADE)
    slug = models.SlugField(unique=True)
    images = models.ImageField(verbose_name='Головне зображення')

    def get_model_name(self):
        return self.__class__.__name__.lower()



class Car(Product):

    title = models.CharField(max_length=255, verbose_name='Повна назва автомобіля')
    run = models.DecimalField(max_digits=9, decimal_places=0 ,verbose_name='Пробіг')
    years = models.DecimalField(max_digits=9, decimal_places=0, verbose_name='Рік випуску')
    kpp = models.CharField(max_length=255, verbose_name='КПП')
    engine = models.CharField( max_length=255,verbose_name='Двигун')
    plus = models.TextField(max_length=255, default='нема',verbose_name='Переваги')
    minus = models.TextField(max_length=255,  default='нема', verbose_name='Недоліки')
    price = models.DecimalField(max_digits=9, decimal_places=0, verbose_name='Ціна')
    services = models.ForeignKey('Services', on_delete=models.CASCADE, verbose_name='Послуги', default=1)
    image1 = models.ImageField(verbose_name='Зображення1')
    image2 = models.ImageField(verbose_name='Зображення2')
    image3 = models.ImageField(verbose_name='Зображення3')


    def __str__(self):
      return "{} ".format( self.title)


    def get_model_name(self):
        return self.__class__.__name__.lower()

    def get_absolute_url(self):
        return get_services_url(self, 'product_detail')


class Services(Product):

    title = models.CharField(max_length=255, verbose_name='Назва послуг')
    services_desc = models.TextField(max_length=255, verbose_name='Короткий опис послуги ')
    services = models.TextField(max_length=700, verbose_name='В послугу входить')
    price = models.DecimalField(max_digits=9, decimal_places=0, verbose_name='Ціна')

    def __str__(self):
        return "{} ".format(self.title)

    def get_absolute_url(self):
        return get_services_url(self, 'services_detail')

class Gallery(models.Model):
    image = models.ImageField(upload_to='media')
    car = models.ForeignKey('Car', on_delete=models.CASCADE, related_name='image', default=0)

    def get_model_name(self):
        return self.__class__.__name__.lower()

class Reviews(Product):

    reviews = models.TextField(max_length=700, verbose_name='Відгук')
    services = models.ForeignKey('Services', on_delete=models.CASCADE, verbose_name='Послуги')
    car = models.ForeignKey('Car', on_delete=models.CASCADE, verbose_name='Авто')
    order = models.ForeignKey('Order',  on_delete=models.CASCADE, verbose_name='Ім`я' )


    def __str__(self):
        return "{}".format(self.category.name)

    def get_reviews_url(self):
        return get_reviews_url(self, 'reviews_detail')


class Order(models.Model):


    name = models.CharField(max_length=255, verbose_name= 'Ім`я')
    phone = models.CharField(max_length=255, verbose_name= 'Номер телефону')
    comment = models.TextField(verbose_name="Коментар до замовлення",max_length=100, null=True, blank=True)

    def __str__(self):
        return "{} ".format(self.name)

    def get_model_name(self):
        return self.__class__.__name__.lower()
















