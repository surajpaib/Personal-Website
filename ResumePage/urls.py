# Url file

from django.conf.urls import url
from . import views

# Enter regex url matching here

urlpatterns = [
    url(r'^', views.home, name='home')

]