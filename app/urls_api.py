from django.urls import path, include

urlpatterns = [
    path('qinfo/', include('qinfo.urls'))
]