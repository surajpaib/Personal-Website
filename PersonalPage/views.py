# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def home(request):
    """
    
    :param request: 
    :return: 
    """
    return render(request, 'terminal.html')

