from django.urls import path
from .views import MyDataList


urlpatterns = [
    path('data/', MyDataList.as_view()), # http://localhost:8000/api/data/ 주소가 됩니다.
]