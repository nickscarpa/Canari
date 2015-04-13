import os
import subprocess
import string
import sys
from bottle import route, run, static_file, get, post, request, response, redirect


def resource_path(relative_path):
    """ Get absolute path to resource, works for dev and for PyInstaller """
    try:
        # PyInstaller creates a temp folder and stores path in _MEIPASS
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")

    return os.path.join(base_path, relative_path)


helloFile = resource_path('hello.py')
os.system('sudo python '+helloFile)
# subprocess.call('sudo -S python %r', helloFile, shell=True)
