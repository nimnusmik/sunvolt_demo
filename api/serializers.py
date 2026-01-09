from rest_framework import serializers
from .models import MyData

class MyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyData
        fields = ['id', 'name', 'email'] #리액트에게 보내줄 항목들

