# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def demo_index(request):
    return render(request, 'demo/index.html')