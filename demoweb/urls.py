from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.demo_index, name='demo_home')
]