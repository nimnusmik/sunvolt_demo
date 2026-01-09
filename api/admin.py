from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import MyData

admin.site.register(MyData)
