from django.http import FileResponse
from django.conf import settings
import os


def resume(request):
    return FileResponse(open(os.path.join(settings.STATICFILES_DIRS[0], 'SurajPaiResume.pdf'), 'r'), content_type='application/pdf')

