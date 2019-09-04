import logging

from django.http import JsonResponse
from django.shortcuts import render
from app import conf
from glob import glob

logger = logging.getLogger(__name__)


def index(request):
    return render(request, 'index.html')


def query(request):
    txt = request.GET.urlencode().partition('txt=')[2]
    flist = glob('{d}/**/*.yml'.format(d=conf.QINFO_DATA_DIR), recursive=True)
    result = []
    for f in flist:
        with open(f) as fdata:
            lines = fdata.readlines()
            filematch = dict(filename=f, matches=[])
            for lno, line in enumerate(lines, start=1):
                if txt in line:
                    filematch['matches'].append(dict(lno=lno, txt=line))
            if filematch['matches']:
                result.append(filematch)
    resp = dict(success=True,
                message=None,
                data=dict(result=result)
                )
    return JsonResponse(resp)
