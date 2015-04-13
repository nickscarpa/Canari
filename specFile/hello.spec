# -*- mode: python -*-
a = Analysis(['hello.py'],
             pathex=['/Users/alanscarpa/Desktop/CanariSite'],
             hiddenimports=[],
             hookspath=None,
             runtime_hooks=None)
pyz = PYZ(a.pure)
exe = EXE(pyz,
          a.scripts,
          a.binaries + [('msvcp100.dll', 'C:\\Windows\\System32\\msvcp100.dll', 'BINARY'),
                        ('msvcr100.dll', 'C:\\Windows\\System32\\msvcr100.dll', 'BINARY')]
          if sys.platform == 'win32' else a.binaries,
          a.zipfiles,
          a.datas + [('cLogo.png', '/Users/alanscarpa/Desktop/CanariSite/cLogo.png', 'DATA'),
           ('style.css', '/Users/alanscarpa/Desktop/CanariSite/style.css', 'DATA'),
           ('myJavascript.js', '/Users/alanscarpa/Desktop/CanariSite/myJavascript.js', 'DATA'), ('loader.gif', '/Users/alanscarpa/Desktop/CanariSite/loader.gif', 'DATA'), 
           ('empty.gif', '/Users/alanscarpa/Desktop/CanariSite/empty.gif', 'DATA'),
           ('bar.png', '/Users/alanscarpa/Desktop/CanariSite/bar.png', 'DATA'),
           ('data.txt', '/Users/alanscarpa/Desktop/CanariSite/data.txt', 'DATA'),
           ('hello.py', '/Users/alanscarpa/Desktop/CanariSite/hello.py', 'DATA'),
           ('bottle.py', '/Users/alanscarpa/Desktop/CanariSite/bottle.py', 'DATA')],
          name='hello',
          debug=False,
          strip=None,
          upx=True,
          console=True )
