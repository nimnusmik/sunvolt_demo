from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import MyData
from .serializers import MyDataSerializer

class MyDataList(generics.ListCreateAPIView):
    queryset = MyData.objects.all() #모든 데이터를 가져와라
    serializer_class = MyDataSerializer # 이 번역기를 써라
