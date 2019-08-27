from django.http import JsonResponse
from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')


def query(request):
    data = dict(result=['0802.yml', '0803.yml'])
    data = dict(success=True,
                message=None,
                data=data
                )
    return JsonResponse(data)
