from bottle import route, run, static_file, get, post, request, response, redirect
import os
import string
import sys


def resource_path(relative_path):
    """ Get absolute path to resource, works for dev and for PyInstaller """
    try:
        # PyInstaller creates a temp folder and stores path in _MEIPASS
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")

    return os.path.join(base_path, relative_path)


@get('/Count<deviceNumber>') # or @route('/login')
def Count(deviceNumber):
    return

@get('/Valu<deviceValue>') # or @route('/login') // Cut off "e" of value intentionally
def Value(deviceValue):
    theGetRequest = request.query_string
    print "This is the device value: " + theGetRequest
    return


def fix_ownership(path):
    """Change the owner of the file to SUDO_UID"""

    uid = os.environ.get('SUDO_UID')
    gid = os.environ.get('SUDO_GID')
    if uid is not None:
        os.chown(resource_path(path), int(uid), int(gid))



@post('/data<dataValue>') # or @route('/login')
def data(dataValue):
    thePostRequest = str(request.query_string)
    newPostRequest = string.replace(thePostRequest, '%22', '\"')
    newPostRequest = newPostRequest.replace('%27', '\'')
    newPostRequest = newPostRequest.replace('%20', ' ')
    newPostRequest = newPostRequest.replace('%7B', '{')
    newPostRequest = newPostRequest.replace('%7D', '}')


    print "This is the data value: " + newPostRequest

    theDataFile = resource_path('./data.txt')

    with open(theDataFile,"w") as fo:
      fo.write('data = '+newPostRequest)

    return
    


@get('/ajax<noCache>') # or @route('/login')
def ajax(noCache):
    return

@get('/<filename:re:.*\.(jpg|png|gif|ico)>')
def send_image(filename):
    print "getting image..."
    return static_file(filename, root=resource_path('./'))

@get('/<filename:path>')
def send_static(filename):
    return static_file(filename, root=resource_path('./'))

     #   return static_file(filename, root=os.path.join(sys._MEIPASS, './'))



@route('/formSubmit', method='POST')
def formSubmit():
    redirect("/hello", 303)
    return

@route('/formSubmit', method='GET')
def formSubmit():
    print "TAKE ME HOMEEEE!"
    redirect("/hello", 303)
    return


@route('/hello')
@route('/hello', method='GET')
def hello():
    return '''

    <!DOCTYPE html>

<html>
    <head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
 -->


      <script type="text/javascript" src="data.txt"></script>
      <script type="text/javascript" src="myJavascript.js"></script>
      <link rel="stylesheet" type="text/css" href="style.css"></script>


        <title>CANARI JR. | Home</title>


        
 </head>


<body onload="preparePage()">
<div id="spinner"></div> 

<div id="container">
    

    <div id="headerDiv">

        <div id="logoDiv"><a href="/" onclick="showHome(); return false;">
         <img src="cLogo.png" alt="Canari Jr. Logo"> 
         </a>
        </div>


        <div id="navDiv">
        <a href="/" onclick="showHome(); return false;"><p id="homeBtn" style="color:black;background-color:white">Home</p></a>
        <a href="/" onclick="showSetup(); return false;"><p id="settingsBtn">Settings</p></a>

        </div>


     
       

     </div>



<div id="contentDiv">


</div>


<div id="addDiv" style="text-align:center;display:none;">
<h2>Add New Device</h2>
<form method="POST" id="deviceForm" onsubmit="writeTxt('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'); return false;">


<p style="background-color:#f5f5f5;" id="deviceDropdown">Monitor Type:<select name="" id="deviceList" onchange="loadContentA(this.value)">
  <option value="default">Choose one...</option>
  <option value="temp">Temperature</option>
  <option value="humidity">Humidity</option>
  <option value="analog">Analog</option>
  <option value="digital">Digital</option>
  <option value="counter">Counter</option>
</select></p>


<div id="clearDiv" style="clear:both"></div>
<a href="/" id="cancelBtn" onclick="hideAddDiv(); return false;">Cancel</a>

</form>
</div>


<div id="editDiv" style="display:none">


</div>


<div id="setupDiv" style="display:none">
<h2 style="margin-bottom:35px; border:3px solid #8C8C8C; width:40%; margin:0 auto; padding:10px">Change IP Address</h2>
<form method="POST" onsubmit="submitIP('ipAddress'); return false;">
<p>New IP Address:  <input type="text" name="ipAddress" id="ipAddress"><input type="submit" value="Submit" style="padding:5px 10px 5px 10px">
</p>
<p>Make sure to <span style="color:red">write down this IP Address</span> as you will need it to complete setup.</p><br>
</form>

<h2 style="margin-bottom:35px; border:3px solid #8C8C8C; width:40%; margin:0 auto; padding:10px;margin-top:45px;">Binding Mode</h2>
<p>Binding Mode is currently:</p>
<a href="/" id="bindBtn" onclick="bindOn(); return false;" class="btn">OFF</a>
<p>(Click to change)</p>


</div>



</div>
</body>
</html>


    '''
run(host='0.0.0.0', port=8080, debug=True)