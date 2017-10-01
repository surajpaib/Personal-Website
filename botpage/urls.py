from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.bot_index, name='bot_home')
]