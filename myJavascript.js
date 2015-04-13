//Initialize form variables
var formVariables;
var A = [];
var B = [];
var C = [];
var D = [];
var E = [];
var F = [];
var G = [];
var H = [];
var I = [];
var J = [];
var K = [];
var L = [];
var M = [];
var N = [];
var O = [];
var P = [];

var numberOfDivs;

var loadedJson = false;

var myData;
var count;

var pageLoaded = false;

var digitalFlag = false;
var analogFlag = false;
var farenheitFlag = false;
var celsiusFlag = false;
var counterFlag = false;

var strSend; //string to send via GET request
var GetArduinoInputs_Busy=false;
var pollRunning;
var pollAttempts;



//add div variables
var tempSelected = false;
var humiditySelected = false;
var analogSelected = false;
var digitalSelected = false;
var counterSelected = false;

var saveBtnShowing = false;

var saveBtn;
var defaultSelected = false;

var redFlag = false;
var yellowFlag = false;





// function clearScreen(link, event){
//   // console.log("Inside clear screen");
//   // clearInterval(pollRunning);
//   // //document.body.className = "inVisible";
//   // document.getElementById("container").style.display = 'none';
//   // // window.location.href = "add.htm";
//   // return true;
//     event.preventDefault();

//      setTimeout(function(){
//     document.body.style.background = "white";
//     document.getElementById("container").style.display = 'none';
//     }, 500);

//    setTimeout(function(){
//         window.location = link.href;
//     }, 1000);



// }


//************EDIT DEVICE CODE****************************
//************EDIT DEVICE CODE****************************
//************EDIT DEVICE CODE****************************
function hideEditDiv(){

    pollRunning = setInterval('pollInputs()', 1000);

  document.getElementById("editDiv").style.display = 'none';
 document.getElementById("contentDiv").style.display = 'inherit';

}

function editDevice(DeviceInt){

clearInterval(pollRunning);

document.getElementById("contentDiv").style.display = 'none';
//show edit div
document.getElementById("editDiv").style.display = 'inherit';


document.getElementById('editDiv').innerHTML = "<h2 style=\"margin-left:35px;margin-bottom:35px;\">Edit Monitor</h2><form method=\"POST\" id=\"deviceFormB\" onsubmit=\"writeTxt2('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',"+DeviceInt+"); return false;\"><div id=\"formContent\" style=\"display:none\"><div id=\"leftContentB\"><p id=\"pA\">Radio ID:&nbsp;<input type=\"text\" name=\"radioID\" id=\"A\" maxlength=\"2\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pB\">IO Number:  <input type=\"text\" name=\"IOnumber\" id=\"B\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pC\">Type Code:  <input type=\"text\" name=\"typeCode\" id=\"C\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pD\">Zone Name:  <input type=\"text\" name=\"zoneName\" id=\"D\" maxlength=\"16\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pE\">Value Name:  <input type=\"text\" name=\"valueName\" id=\"E\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pF\">Units:  <select id=\"F\"><option value=\"\">Choose one...</option><option value=\"F\">Farenheit</option><option value=\"C\">Celsius</option></select></p><p id=\"pK\">4mA Scale Value:  <input type=\"text\" name=\"4mAScaleValue\" id=\"K\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pL\">20mA Scale Value:  <input type=\"text\" name=\"20mAScaleValue\" id=\"L\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pM\">Counter Scale:  <input type=\"text\" name=\"counterScale\" id=\"M\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pN\">ON Text:  <input type=\"text\" name=\"onText\" id=\"N\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pO\">OFF Text:  <input type=\"text\" name=\"offText\" id=\"O\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pP\">Set Alarm:<select name=\"onColorCode\" id=\"P\"><option value=\"\">Choose one...</option><option value=\"0\">OFF state</option><option value=\"1\">ON state</option></select></p></div><div id=\"rightContentB\"><p id=\"pG\" style=\"background-color:#E12218;color:white\">High Critical Level:  <input type=\"text\" name=\"highHighSetPoint\" id=\"G\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pH\" style=\"background-color: rgb(254, 251, 91)\">High Warning Level:  <input type=\"text\" name=\"highSetPoint\" id=\"H\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pI\" style=\"background-color: rgb(254, 251, 91)\">Low Warning Level:  <input type=\"text\" name=\"lowSetPoint\" id=\"I\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"pJ\" style=\"background-color:#E12218;color:white\">Low Critical Level:  <input type=\"text\" name=\"lowLowSetPoint\" id=\"J\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><img src=\"bar.png\" style=\"display:none;margin: 0 auto;margin-top:25px;display:block;width:100%;height:auto;max-width:300px\" id=\"barar\"></div><div style=\"margin-top:25px\"><a href=\"/\" id=\"cancelBtnB\" onclick=\"hideEditDiv(); return false;\">Cancel</a><button class=\"editBtn\" type=\"button\" onclick=\"deleteDevice("+DeviceInt+")\">DELETE</button><input type=\"submit\" value=\"Save\" id=\"saveBtnB\"></div></div></form>";



document.getElementById("A").value = A[DeviceInt];
document.getElementById("B").value = B[DeviceInt];
document.getElementById("C").value = C[DeviceInt];
document.getElementById("D").value = D[DeviceInt];
document.getElementById("E").value = E[DeviceInt];
document.getElementById("F").value = F[DeviceInt];
document.getElementById("G").value = G[DeviceInt];
document.getElementById("H").value = H[DeviceInt];
document.getElementById("I").value = I[DeviceInt];
document.getElementById("J").value = J[DeviceInt];
document.getElementById("K").value = K[DeviceInt];
document.getElementById("L").value = L[DeviceInt];
document.getElementById("M").value = M[DeviceInt];
document.getElementById("N").value = N[DeviceInt];
document.getElementById("O").value = O[DeviceInt];
document.getElementById("P").value = P[DeviceInt];


if (E[DeviceInt] == "Temp") {

  if (F[DeviceInt] == "F") {
// document.getElementById("A").value = A[DeviceInt];
// document.getElementById("B").value = B[DeviceInt];
// document.getElementById("C").value = C[DeviceInt];
// document.getElementById("D").value = D[DeviceInt];
document.getElementById("pE").style.display = 'none';
document.getElementById("F").options[1].selected = true;
// document.getElementById("G").value = G[DeviceInt];
// document.getElementById("H").value = H[DeviceInt];
// document.getElementById("I").value = I[DeviceInt];
// document.getElementById("J").value = J[DeviceInt];
document.getElementById("pK").style.display = 'none';
document.getElementById("pL").style.display = 'none';
document.getElementById("pM").style.display = 'none';
document.getElementById("pN").style.display = 'none';
document.getElementById("pO").style.display = 'none';
document.getElementById("pP").style.display = 'none';

document.getElementById("barar").style.display = 'block';
document.getElementById("formContent").style.display = 'inline-block';
  } else if (F[DeviceInt] == "C") {
    // document.getElementById("A").value = A[DeviceInt];
// document.getElementById("B").value = B[DeviceInt];
// document.getElementById("C").value = C[DeviceInt];
// document.getElementById("D").value = D[DeviceInt];
document.getElementById("pE").style.display = 'none';
document.getElementById("F").options[2].selected = true;
// document.getElementById("G").value = G[DeviceInt];
// document.getElementById("H").value = H[DeviceInt];
// document.getElementById("I").value = I[DeviceInt];
// document.getElementById("J").value = J[DeviceInt];
document.getElementById("pK").style.display = 'none';
document.getElementById("pL").style.display = 'none';
document.getElementById("pM").style.display = 'none';
document.getElementById("pN").style.display = 'none';
document.getElementById("pO").style.display = 'none';
document.getElementById("pP").style.display = 'none';

document.getElementById("barar").style.display = 'block';
document.getElementById("formContent").style.display = 'inline-block';
  }
  

  }  else if (E[DeviceInt] == "Humidity") {

document.getElementById("pF").innerHTML = "Units: <input type=\"text\" name=\"units\" id=\"F\" maxlength=\"4\">";
document.getElementById("F").value = F[DeviceInt];
// document.getElementById("A").value = A[DeviceInt];
// document.getElementById("B").value = B[DeviceInt];
// document.getElementById("C").value = C[DeviceInt];
// document.getElementById("D").value = D[DeviceInt];
document.getElementById("pE").style.display = 'none';
// document.getElementById("G").value = G[DeviceInt];
// document.getElementById("H").value = H[DeviceInt];
// document.getElementById("I").value = I[DeviceInt];
// document.getElementById("J").value = J[DeviceInt];
document.getElementById("pK").style.display = 'none';
document.getElementById("pL").style.display = 'none';
document.getElementById("pM").style.display = 'none';
document.getElementById("pN").style.display = 'none';
document.getElementById("pO").style.display = 'none';
document.getElementById("pP").style.display = 'none';

document.getElementById("barar").style.display = 'block';
document.getElementById("formContent").style.display = 'inline-block';

  } else if (E[DeviceInt] == "Analog") {

    document.getElementById("pF").innerHTML = "Units: <input type=\"text\" name=\"units\" id=\"F\" maxlength=\"4\">";
document.getElementById("F").value = F[DeviceInt];
// document.getElementById("A").value = A[DeviceInt];
// document.getElementById("B").value = B[DeviceInt];
// document.getElementById("C").value = C[DeviceInt];
// document.getElementById("D").value = D[DeviceInt];
document.getElementById("pE").style.display = 'none';
// document.getElementById("G").value = G[DeviceInt];
// document.getElementById("H").value = H[DeviceInt];
// document.getElementById("I").value = I[DeviceInt];
// document.getElementById("J").value = J[DeviceInt];
// document.getElementById("pK").style.display = 'none';
// document.getElementById("pL").style.display = 'none';
document.getElementById("pM").style.display = 'none';
document.getElementById("pN").style.display = 'none';
document.getElementById("pO").style.display = 'none';
document.getElementById("pP").style.display = 'none';

document.getElementById("barar").style.display = 'block';
document.getElementById("formContent").style.display = 'inline-block';

  } else if (E[DeviceInt] == "Digital") {

    // document.getElementById("pF").innerHTML = "Units:&nbsp;&nbsp;&nbsp;&nbsp; <input type=\"text\" name=\"units\" id=\"F\" maxlength=\"4\">";

    document.getElementById("pP").innerHTML = "Set Alarm: &nbsp;&nbsp;&nbsp;&nbsp;<select name=\"onColorCode\" id=\"P\"> <option value=\"\">Choose one...</option> <option value=\"0\">OFF state</option> <option value=\"1\">ON state</option></select>";

    if (P[DeviceInt] == '0'){
document.getElementById("P").options[1].selected = true;
    } else {
document.getElementById("P").options[2].selected = true;
    }

document.getElementById("pF").style.display = 'none';
// document.getElementById("A").value = A[DeviceInt];
// document.getElementById("B").value = B[DeviceInt];
// document.getElementById("C").value = C[DeviceInt];
// document.getElementById("D").value = D[DeviceInt];
document.getElementById("pE").style.display = 'none';
 document.getElementById("pG").style.display = 'none';
 document.getElementById("pH").style.display = 'none';
 document.getElementById("pI").style.display = 'none';
 document.getElementById("pJ").style.display = 'none';
document.getElementById("pK").style.display = 'none';
document.getElementById("pL").style.display = 'none';
document.getElementById("pM").style.display = 'none';
// document.getElementById("pN").style.display = 'none';
// document.getElementById("pO").style.display = 'none';

//DISPLAY DROPDOWN LIST
// document.getElementById("pP").style.display = 'none';

document.getElementById("rightContentB").style.display = 'none';
document.getElementById("formContent").style.display = 'inline-block';

  } else if (E[DeviceInt] == "Counter") {
   document.getElementById("pF").innerHTML = "Units: <input type=\"text\" name=\"units\" id=\"F\" maxlength=\"4\">";
document.getElementById("F").value = F[DeviceInt];
// document.getElementById("A").value = A[DeviceInt];
// document.getElementById("B").value = B[DeviceInt];
// document.getElementById("C").value = C[DeviceInt];
// document.getElementById("D").value = D[DeviceInt];
document.getElementById("pE").style.display = 'none';
document.getElementById("pG").style.display = 'none';
document.getElementById("pH").style.display = 'none';
document.getElementById("pI").style.display = 'none';
document.getElementById("pJ").style.display = 'none';
document.getElementById("pK").style.display = 'none';
document.getElementById("pL").style.display = 'none';
// document.getElementById("pM").style.display = 'none';
document.getElementById("pN").style.display = 'none';
document.getElementById("pO").style.display = 'none';
document.getElementById("pP").style.display = 'none';

document.getElementById("rightContentB").style.display = 'none';
document.getElementById("formContent").style.display = 'inline-block';

  }


//show edit div

}



function writeTxt2(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, DeviceInt) {



A[DeviceInt] = document.getElementById(one).value;
B[DeviceInt] = document.getElementById(two).value;
C[DeviceInt] = document.getElementById(three).value;
D[DeviceInt] = document.getElementById(four).value;
E[DeviceInt] = document.getElementById(five).value;
F[DeviceInt] = document.getElementById(six).value;
G[DeviceInt] = document.getElementById(seven).value;
H[DeviceInt] = document.getElementById(eight).value;
I[DeviceInt] = document.getElementById(nine).value;
J[DeviceInt] = document.getElementById(ten).value;
K[DeviceInt] = document.getElementById(eleven).value;
L[DeviceInt] = document.getElementById(twelve).value;
M[DeviceInt] = document.getElementById(thirteen).value;
N[DeviceInt] = document.getElementById(fourteen).value;
O[DeviceInt] = document.getElementById(fifteen).value;
P[DeviceInt] = document.getElementById(sixteen).value;

// alert(Name[1]);
// alert(Loc[1]);

document.getElementById("editDiv").innerHTML = "<h1 style=\"color:#000000\">Saving.  Please wait.</h1>";


if (E[DeviceInt] == "Temp"||E[DeviceInt] == "Humidity"||E[DeviceInt] == "Analog") {


if (E[DeviceInt] == "Analog") {

if(A[DeviceInt] == "" || B[DeviceInt] == "" || D[DeviceInt] == "" || E[DeviceInt] == "" || F[DeviceInt] == "" || G[DeviceInt] == "" || H[DeviceInt] == "" || I[DeviceInt] == "" || J[DeviceInt] == "" || K[DeviceInt] == "" || L[DeviceInt] == "") {

  alert("Please fill out all form fields.");
  return false;
}
// M[DeviceInt] = null;
// N[DeviceInt] = null;
// O[DeviceInt] = null;
// P[DeviceInt] = null;

//C[DeviceInt] = null;

} else if (E[DeviceInt] == "Temp" || E[DeviceInt] == "Humidity") {

if(A[DeviceInt] == "" || B[DeviceInt] == "" || D[DeviceInt] == "" || E[DeviceInt] == "" || F[DeviceInt] == "" || G[DeviceInt] == "" || H[DeviceInt] == "" || I[DeviceInt] == "" || J[DeviceInt] == "") {

  alert("Please fill out all form fields.");
  return false;
}
// M[DeviceInt] = null;
// N[DeviceInt] = null;
// O[DeviceInt] = null;
// P[DeviceInt] = null;

//C[DeviceInt] = null;

}  


if (parseFloat(J[DeviceInt]) >= parseFloat(H[DeviceInt])) {

alert("Your Low Critical Level must be lower than your High Warning Level.");
return false;
}


if (parseFloat(G[DeviceInt]) <= parseFloat(H[DeviceInt])) {

alert("Your High Critical Level must be higher than your High Warning Level.");
return false;

}

if (parseFloat(I[DeviceInt]) == parseFloat(H[DeviceInt])) {
  alert("Your High Warning Level must be higher than your Low Warning Level.");
  return false;
}

if (parseFloat(J[DeviceInt]) >= parseFloat(I[DeviceInt])) {

alert("Your Low Critical Level must be lower than your Low Warning Level.");
return false;

}

}




if (E[DeviceInt] == "Digital") {

if(A[DeviceInt] == "" || B[DeviceInt] == "" || D[DeviceInt] == "" || N[DeviceInt] == "" || O[DeviceInt] == "" || P[DeviceInt] == "") {
  alert("Please fill out all form fields.");
  return false;
}
// M[DeviceInt] = null;
// N[DeviceInt] = null;
// O[DeviceInt] = null;
// P[DeviceInt] = null;

//C[DeviceInt] = null;

} 




if (E[DeviceInt] == "Counter") {
if(A[DeviceInt] == "" || B[DeviceInt] == "" || D[DeviceInt] == "" || F[DeviceInt] == "" ||  M[DeviceInt] == "") {
  alert("Please fill out all form fields.");
  return false;
}

if(M[DeviceInt] == "0") {
  alert("Counter scale must be greater than 0.");
  return false;
}

}




 var jsonStrings = [];
   for (i = 0; i < A.length; i++) { 
    jsonStrings[i] = "{\"A\":\""+A[i]+"\"," + "\"B\":\""+B[i]+"\"," + "\"C\":\""+C[i]+"\"," + "\"D\":\""+D[i]+"\"," + "\"E\":\""+E[i]+"\"," + "\"F\":\""+F[i]+"\"," + "\"G\":\""+G[i]+"\"," + "\"H\":\""+H[i]+"\"," + "\"I\":\""+I[i]+"\"," + "\"J\":\""+J[i]+"\"," + "\"K\":\""+K[i]+"\"," + "\"L\":\""+L[i]+"\"," + "\"M\":\""+M[i]+"\"," + "\"N\":\""+N[i]+"\"," + "\"O\":\""+O[i]+"\"," + "\"P\":\""+P[i]+"\"}";
}


for (i=0; i <= A.length; i++) {
    if (i==0) {
      formVariables="data = ?'["+jsonStrings[i];
      } else if (i < A.length) {
         formVariables=formVariables.concat(","+jsonStrings[i]);
     } else {
          formVariables=formVariables.concat("]';");
     
   }
 }



  alert("Saved!");



  nocache = "&nocache=" + Math.random() * 1000000;
   var request2 = new XMLHttpRequest();
   request2.open("POST", formVariables, false); 
   request2.onreadystatechange = function () {
    if (request2.readyState == 4 && request2.status == 200) {
      setTimeout(function(){
      window.location = "/formSubmit";
    }, 100); 
    }
  }
   try {
   request2.send();
  } 
   catch(err){
    console.error("Error sending form variables");
    alert("Error editing device.  Try again.");
   }

   // setTimeout(function(){
   //      window.location = "/formSubmit";
   //  }, 1000);

  
}



function deleteDevice (DeviceInt) {

var nn;

if (confirm("Are you sure you want to delete?") == true) {
  
for (n = DeviceInt; n < count-1; n++) {

nn = n+1;


    A[n] = mydata[nn].A;
    B[n] = mydata[nn].B;
    C[n] = mydata[nn].C;
    D[n] = mydata[nn].D;
    E[n] = mydata[nn].E;
    F[n] = mydata[nn].F;
    G[n] = mydata[nn].G;
    H[n] = mydata[nn].H;
    I[n] = mydata[nn].I;
    J[n] = mydata[nn].J;
    K[n] = mydata[nn].K;
    L[n] = mydata[nn].L;
    M[n] = mydata[nn].M;
    N[n] = mydata[nn].N;
    O[n] = mydata[nn].O;
    P[n] = mydata[nn].P;

  

  }

  

  var jsonStrings = [];



if (((A.length)-1) > 0) { 
   for (i = 0; i < ((A.length)-1); i++) { 
    jsonStrings[i] = "{\"A\":\""+A[i]+"\"," + "\"B\":\""+B[i]+"\"," + "\"C\":\""+C[i]+"\"," + "\"D\":\""+D[i]+"\"," + "\"E\":\""+E[i]+"\"," + "\"F\":\""+F[i]+"\"," + "\"G\":\""+G[i]+"\"," + "\"H\":\""+H[i]+"\"," + "\"I\":\""+I[i]+"\"," + "\"J\":\""+J[i]+"\"," + "\"K\":\""+K[i]+"\"," + "\"L\":\""+L[i]+"\"," + "\"M\":\""+M[i]+"\"," + "\"N\":\""+N[i]+"\"," + "\"O\":\""+O[i]+"\"," + "\"P\":\""+P[i]+"\"}";
}

for (i=0; i <= ((A.length)-1); i++) {
    if (i==0) {
      formVariables="data = ?'["+jsonStrings[i];
      } else if (i < ((A.length)-1)) {
         formVariables=formVariables.concat(","+jsonStrings[i]);
     } else {
          formVariables=formVariables.concat("]';");
     
   }
 }
} else {
  formVariables="data = ?'[{}]';";
}

 alert("DELETED!");

//alert(formVariables);


  nocache = "&nocache=" + Math.random() * 1000000;
   var request2 = new XMLHttpRequest();
   request2.open("POST", formVariables, true); 
   
   request2.onreadystatechange = function () {
    if (request2.readyState == 4 && request2.status == 200) {
        setTimeout(function(){
        window.location = "/formSubmit";
    }, 100); 
    }
  }
   request2.send();

    //  setTimeout(function(){
    //     window.location = "/formSubmit";
    // }, 100);
  
 


} else {

}


}













//************SHOW ADD DEVICE FORM****************************


function showAdd(){

clearInterval(pollRunning);

if (saveBtnShowing == true){
  document.getElementById('clearDiv').style.display = "block";
  deviceForm.insertBefore(deviceDropdown,deviceForm.firstChild);
  saveBtnShowing = false;
  clearForm();
}
 
  document.getElementById("deviceList").options[0].selected = true;
  document.getElementById("contentDiv").style.display = 'none';
  document.getElementById("addDiv").style.display = 'inherit';

}

//************preparePage****************************
function preparePage() {
    console.log("Prepare Page");
    mydata = JSON.parse(data);
    count = 0;
    if (mydata[0].A != undefined) {
        for ( property in mydata ){
            if(mydata.hasOwnProperty(property)){
                count++;
            }
        } // end for
        numberOfDivs = count;
    }
    console.log("End of prepare");

    sendCount();
} //end function preparePage

//************sendCount****************************
//Counts the number of devices in the system
function sendCount(){

    var nocache3 = "&nocache=" + Math.random() * 1000000;
    var request3 = new XMLHttpRequest();

 request3.onreadystatechange = function () {
    if (request3.readyState == 4 && request3.status == 200) {
      console.log("Sending Count");
      loadJson(0,loadJson);

    }
  } //end function onreadystatechange

   request3.open("GET", "Count"+count, true);
   try {
    request3.send();
  } 
   catch(err){
    console.error("Error sending count");
    preparePage();
   }
} //end function sendCount

//************loadContent****************************
//Creates boxes on screen with value = "..."
function loadContent() {
   
console.log("Inside load content");
console.log(numberOfDivs);

if (numberOfDivs > 0){

for (i = 0; i < numberOfDivs; i++) {

console.log("Creating a div...");

var div = document.createElement("div");
div.id = "dynamicDiv"+i;
div.className = "divStyle";

if (E[i] == "Counter") {



div.innerHTML = "<center><a href=\"edit.htm?myVar="+(i)+"\" onclick=\"editDevice("+i+");return false;\"><h3 id=Div"+i+">...</h3><h2 class=\"dataDisplay\"><span id=input"+i+">...</span>&nbsp;<span id=Units"+i+">...</span><h2 id=Value"+i+" style=\"font-size:18px\">...</h2></a><button type=\"button\" onclick=\"resetCounter("+i+")\" style=\"margin-left:0px;\">Reset</button></center></h2>";

} else {
  div.innerHTML = "<center><h3 id=Div"+i+">...</h3><h2 class=\"dataDisplay\"><span id=input"+i+">...</span>&nbsp;<span id=Units"+i+">...</span><h2 id=Value"+i+" style=\"font-size:18px\">...</h2><a href=\"edit.htm?myVar="+(i)+"\" onclick=\"editDevice("+i+");return false;\"><span class=\"clickableDiv\"></span></a></center></h2>";
}

// div.innerHTML = "<center><h3 id=Div"+i+">...</h3><h2 class=\"dataDisplay\"><span id=input"+i+">...</span>&nbsp;<span id=Units"+i+">...</span><h2 id=Value"+i+" style=\"font-size:18px\">...</h2><a href=\"edit.htm?myVar="+(i)+"\"><span class=\"clickableDiv\"></span></a></center></h2>";

document.getElementById('contentDiv').appendChild(div);

document.getElementById("Div"+i).innerHTML = D[i];
if (E[i] == "Temp"){
document.getElementById("Value"+i).innerHTML = "Temperature"; 
} else {
document.getElementById("Value"+i).innerHTML = E[i];
}
document.getElementById("Units"+i).innerHTML = F[i];

   if (i == numberOfDivs - 1 && numberOfDivs < 16) {
      //APPEND FINAL ADD DEVICE BUTTON
var div = document.createElement("div");
div.id = "dynamicDiv";
div.className = "divStyleLast";
div.innerHTML = "<center><h1><a href=\"add.htm?myVar="+(i+1)+"\" style=\"float:none;margin:0px;text-decoration:none;font-size:20px;color:gray\" onclick=\"showAdd(); return false;\"><span class=\"clickableDiv\"></span>ADD<br>DEVICE</a></h1></center> ";

document.getElementById('contentDiv').appendChild(div);
   }


} 


} else {
  //NO DEVICES ADDED YET.  SHOW ADD DEVICE ONLY
var div = document.createElement("div");
div.id = "onlyDiv";
div.className = "divStyleLast";
div.innerHTML = "<center><h1><a href=\"add.htm?myVar=0\" style=\"float:none;margin:0px;text-decoration:none;font-size:34px;color:gray\" onclick=\"showAdd(); return false;\"><span class=\"clickableDiv\"></span>ADD<br>DEVICE</a></h1></center> ";

document.getElementById('contentDiv').appendChild(div);

}


    runAjaxAgain();

} //end function loadContent

//************LoadJson****************************
//Set GET request for data to Arduino 
function loadJson(i,callback) {
    console.log("Loading json");
    if (count == 0){
      loadContent();
    } else {
    //Setup Javascript arrays from Arduino data
    A[i] = mydata[i].A;
    B[i] = mydata[i].B;
    C[i] = mydata[i].C;
    D[i] = mydata[i].D;
    E[i] = mydata[i].E;
    F[i] = mydata[i].F;
    G[i] = mydata[i].G;
    H[i] = mydata[i].H;
    I[i] = mydata[i].I;
    J[i] = mydata[i].J;
    K[i] = mydata[i].K;
    L[i] = mydata[i].L;
    M[i] = mydata[i].M;
    N[i] = mydata[i].N;
    O[i] = mydata[i].O;
    P[i] = mydata[i].P;

    switch (E[i]){

        case "Temp": // TEMP
            if (F[i] == "F") {    //FARENHEIT
                strSend="Value?"+i+"FARENHEIT?"+A[i]+"?"+B[i]+"?";
            } 
            else {    //CELSIUS
                strSend="Value?"+i+"CELSIUS?"+A[i]+"?"+B[i]+"?";
            }
            break;
            
        case "Analog": //ANALOG
            if (analogFlag == false) {
                console.log("inside the analog");
                var slope = (parseFloat(L[i]) - parseFloat(K[i]))/52428;
                var yInt = 0.25*(parseFloat(L[i]) - parseFloat(K[i]));
                strSend="Value?"+i+"ANALOG"+"?"+slope+","+yInt+"?"+A[i]+"?"+B[i]+"?";
            }
            break;

        case "Digital": //DIGITAL
           // console.log(digitalFlag);
            if (digitalFlag == false){
                console.log("inside the digital");
                strSend="Value?"+i+"DIGITAL?"+A[i]+"?"+B[i]+"?"+N[i]+"?"+O[i]+"?";
            }
            break;
 
        case "Counter":    //COUNTER
            var slope = 1/parseFloat(M[i]);
            strSend="Value?"+i+"COUNTER?"+slope+",?"+A[i]+"?"+B[i]+"?";
            break;
            
        case "Humidity":// HUMIDITY
            strSend="Value?"+i+"HUMIDITY?"+A[i]+"?"+B[i]+"?";
            break;
    }//end switch

    //Prepare to send
    if (window.XMLHttpRequest){ // code for IE7+, Firefox, Chrome, Opera, Safari
        var nocache = "&nocache=" + Math.random() * 1000000;
        var request2 = new XMLHttpRequest();
    } else {// code for IE6, IE5
       var request2 = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request2.onreadystatechange = function () {
        if (request2.readyState == 4 && request2.status == 200) {
            i++; //increment counter
            //recursively calls this function to get the next set of data
            if(i<=(count-1)){
              callback(i,loadJson);
            }
        }
    } //end function onreadystatechange
    
    request2.open("GET", strSend, true);
    try {
      request2.send();
    }
    catch(err){
      console.error("error sending");
      alert("Error loading page.  Press OK to refresh the page.");
      setTimeout(function(){
        window.location = "/";
    }, 0);
    }
    
    if (A[0] != undefined){
        numberOfDivs = A.length;
    }
 
console.log("Count is "+count);
console.log("i is "+i);


    if (i == (count-1)){
      loadContent();
    }
 }
} //end function loadJson

//************runAjaxAgain****************************
//Poll to get values from the Arduino.
function runAjaxAgain(){
   // GetArduinoInputs();
    pollRunning = setInterval('pollInputs()', 1000);
} //end function runAjaxAgain

function pollInputs(){ 

      console.log("GetArduinoInputs is "+GetArduinoInputs_Busy);
        if(GetArduinoInputs_Busy==false){
          GetArduinoInputs();
        }
}

//************GetArduinoInputs****************************
//Reads values from the Arduino and places them on the screen
//This function is polled every x seconds via the RunAjaxAgain() function.
function GetArduinoInputs() {
    GetArduinoInputs_Busy=true;
    console.log("GetArduinoInputs is NOW "+GetArduinoInputs_Busy);

    nocache = "&nocache=" + Math.random() * 1000000;
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      // console.log("readystate is: "+ this.readyState);
      // console.log("status is: "+ this.status);

        if (this.readyState == 4 && this.status == 200) {
          //  if (this.responseXML != null) {
                //Extract XML data from XML file

                redFlag = false;
                yellowFlag = false;

               
                for (i = 0; i < numberOfDivs; i++) {

                  

                     try{
                    //THIS IS FOR DIGITAL
                    if (this.responseXML.getElementsByTagName('data'+i)[0].childNodes[0].nodeValue == "OFF") {
                        document.getElementById("input"+i).innerHTML=O[i];
                        if (P[i] == 0){
                            document.getElementById("dynamicDiv"+i).className = "red";
                            redFlag = true;
                        } 
                        else {
                            document.getElementById("dynamicDiv"+i).className = "divStyle";
                        }
                    } 
                    else if (this.responseXML.getElementsByTagName('data'+i)[0].childNodes[0].nodeValue == "ON") {
                        document.getElementById("input"+i).innerHTML=N[i];
                        if (P[i] == 1){
                            document.getElementById("dynamicDiv"+i).className = "red";
                            redFlag = true;
                        }  
                        else {
                            document.getElementById("dynamicDiv"+i).className = "divStyle";
                        }
                    } 
                    else {
                        //EVERYTHING ELSE
                        document.getElementById("input"+i).innerHTML=this.responseXML.getElementsByTagName('data'+i)[0].childNodes[0].nodeValue;
                        if (document.getElementById("input"+i).innerHTML <= parseFloat(J[i])) {
                            document.getElementById("dynamicDiv"+i).className = "red";
                            redFlag = true;
                        } 
                        else if (document.getElementById("input"+i).innerHTML > parseFloat(J[i]) && document.getElementById("input"+i).innerHTML <= parseFloat(I[i])) {
                            document.getElementById("dynamicDiv"+i).className = "yellow";
                            yellowFlag = true;
                        } else if (document.getElementById("input"+i).innerHTML > parseFloat(I[i]) && document.getElementById("input"+i).innerHTML < parseFloat(H[i])) {
                            document.getElementById("dynamicDiv"+i).className = "divStyle";
                            } else if (document.getElementById("input"+i).innerHTML >= parseFloat(G[i])) {
                                document.getElementById("dynamicDiv"+i).className = "red";
                                redFlag = true;
                                } else if (document.getElementById("input"+i).innerHTML >= parseFloat(H[i])) {
                                    document.getElementById("dynamicDiv"+i).className = "yellow";
                                    yellowFlag = true;
                                    } else {
                                        // alert("ERROR: Please correct your Alarm & Warning Set Points on "+D[i]);
                                    }
                    }
                }//end of try

              

                


                catch(err){
    console.error("Error updating div content");
    // setTimeout(function(){
    //     window.location = "/";
    // }, 0);
    // break;
   } 
              } // end of for loop




                if (redFlag == true){
                var codeRed = new XMLHttpRequest();
                codeRed.open("GET", "codeRed", true);
                codeRed.send();
                } else if (yellowFlag == true){
                var codeYellow = new XMLHttpRequest();
                codeYellow.open("GET", "codeY", true);
                codeYellow.send();
                } else {
                var codeGreen = new XMLHttpRequest();
                codeGreen.open("GET", "codeG", true);
                codeGreen.send();
                }


                if (pageLoaded == false){
                    document.getElementById("spinner").style.display = 'none';
                    pageLoaded = true;
                }


                        GetArduinoInputs_Busy=false;
                        console.log("GetArduinoInputs Done");
            
          //  }  // end of ResponeXML Null
      

        } 
  } 



  request.open("GET", "ajax_inputs" + nocache, true);
  try{
    request.send();
  }catch(err){
    console.error("Ajax inputs froze!");
    GetArduinoInputs_Busy = false;
  }
 
} //end function GetArduinoInputs

//************resetCounter****************************
function resetCounter(counterNumber) {
    console.log("resetCounter");
    var request4 = new XMLHttpRequest();
    request4.open("POST", "Reset"+counterNumber, false);
    request4.send();

} //end function resetCounter


//************************************************
//ADD DIV
//************************************************
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



function blockSpecialChar(e,i) {

var inputLength = document.getElementById(i).value.length;
var userInput = String(e);

  // regular expression to match only alphanumeric characters and spaces
    var re = /^[0-9a-zA-Z. -]*$/; 
    // validation fails if the input doesn't match our regular expression
    if(!re.test(userInput)) {
      document.getElementById(i).value="";
      alert("Input contains invalid characters.  Please try again.");
             document.getElementById(i).focus();
                //   document.getElementById(i).value=userInput;
    return false;

    }
 

}

function checkIP(e) {

var userInput = String(e);

  // regular expression to match only alphanumeric characters and spaces
    var re = /^[0-9.]*$/; 
    // validation fails if the input doesn't match our regular expression
    if(!re.test(userInput)) {
      alert("Your IP address contains invalid characters.  Only numbers and periods allowed.  Please try again.");
                //   document.getElementById(i).value=userInput;
    return false;

    }
 

}


function loadContentA(device) {
  

if (saveBtnShowing == false){
saveBtn = document.createElement("input");
saveBtn.type = "submit";
saveBtn.value = "Save";
saveBtn.id = "saveBtn";
saveBtnShowing = true;


}






  if (device == "temp") {



clearForm();


tempSelected = true;
var tempDiv = document.createElement("div");
tempDiv.id = "tempContent";
tempDiv.className = "leftContent";
//div.className = "divStyle";
tempDiv.innerHTML = "<p id=\"radioID\">Radio ID:&nbsp;<input type=\"text\" name=\"radioID\" id=\"A\" maxlength=\"2\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"IONumber\">IO Number:  <input type=\"text\" name=\"IOnumber\" id=\"B\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"typeCode\">Type Code:  <input type=\"text\" name=\"typeCode\" id=\"C\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"zoneName\">Zone Name:  <input type=\"text\" name=\"zoneName\" id=\"D\" maxlength=\"16\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"valueName\">Value Name:  <select id=\"E\" onchange=\"tempType()\"><option value=\"Temp\">Choose one...</option><option value=\"Temp\" id=\"FarenheitOption\">Farenheit</option><option value=\"Temp\" id=\"CelsiusOption\">Celsius</option></select></p><p id=\"units\" style=\"display:none\">Units:  <input type=\"text\" name=\"units\" id=\"F\" maxlength=\"4\" onblur=\"return blockSpecialChar(this.value,this.id)\" style=\"display:block;margin-left:25px\"></p><p id=\"4mA\" style=\"display:none\">4mA Scale Value:  <input type=\"text\" name=\"4mAScaleValue\" id=\"K\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"20mA\" style=\"display:none\">20mA Scale Value:  <input type=\"text\" name=\"20mAScaleValue\" id=\"L\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"counterScale\" style=\"display:none\">Counter Scale:  <input type=\"text\" name=\"counterScale\" id=\"M\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"onText\" style=\"display:none\">ON Text:  <input type=\"text\" name=\"onText\" id=\"N\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"offText\" style=\"display:none\">OFF Text:  <input type=\"text\" name=\"offText\" id=\"O\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"setAlarm\" style=\"display:none\">Set Alarm:  &nbsp;&nbsp;&nbsp;&nbsp;<select name=\"onColorCode\" id=\"P\"><option value=\"\">Choose one...</option><option value=\"0\">OFF state</option><option value=\"1\">ON state</option></select></p>";


var tempDiv2 = document.createElement("div");
tempDiv2.id = "tempContent2";
tempDiv2.className = "rightContent";
tempDiv2.innerHTML = "<p id=\"highAlarm\" style=\"background-color: #E12218;color: white;\">High Critical Level:  <input type=\"text\" name=\"highHighSetPoint\" id=\"G\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"highWarning\" style=\"background-color: rgb(254, 251, 91)\">High Warning Level:  <input type=\"text\" name=\"highSetPoint\" id=\"H\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"lowWarning\" style=\"background-color: rgb(254, 251, 91)\">Low Warning Level:  <input type=\"text\" name=\"lowSetPoint\" id=\"I\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"lowAlarm\" style=\"background-color: #E12218;color: white;\">Low Critical Level:  <input type=\"text\" name=\"lowLowSetPoint\" id=\"J\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><img src=\"bar.png\" style=\"display:block;margin: 0 auto;margin-top:25px;width:100%;height:auto;max-width:300px\">";





document.getElementById('clearDiv').style.display = "none";
deviceForm.insertBefore(tempDiv,deviceForm.firstChild);
tempContent.insertBefore(deviceDropdown,tempContent.firstChild);

document.getElementById('deviceForm').appendChild(tempDiv2);

deviceForm.appendChild(cancelBtn);
document.getElementById('deviceForm').appendChild(saveBtn);
document.getElementById('saveBtn').style.display='inline-block';


//node.insertBefore(newnode,existingnode)




} else if (device == "humidity") { 

clearForm();


humiditySelected = true;
var humidityDiv = document.createElement("div");
humidityDiv.id = "humidityContent";
humidityDiv.className = "leftContent";

humidityDiv.innerHTML = "<p id=\"radioID\">Radio ID:&nbsp;<input type=\"text\" name=\"radioID\" id=\"A\" maxlength=\"2\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"IONumber\">IO Number: <input type=\"text\" name=\"IOnumber\" id=\"B\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"typeCode\">Type Code: <input type=\"text\" name=\"typeCode\" id=\"C\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"zoneName\">Zone Name: <input type=\"text\" name=\"zoneName\" id=\"D\" maxlength=\"16\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"valueName\" style=\"display:none\">Value Name: <input type=\"text\" name=\"valueName\" id=\"E\" maxlength=\"8\" value=\"Humidity\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"units\">Units: <input type=\"text\" name=\"units\" style=\"display:block;margin-left:25px\" id=\"F\" maxlength=\"4\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"4mA\" style=\"display:none\">4mA Scale Value: <input type=\"text\" name=\"4mAScaleValue\" id=\"K\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"20mA\" style=\"display:none\">20mA Scale Value: <input type=\"text\" name=\"20mAScaleValue\" id=\"L\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"counterScale\" style=\"display:none\">Counter Scale: <input type=\"text\" name=\"counterScale\" id=\"M\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"onText\" style=\"display:none\">ON Text: <input type=\"text\" name=\"onText\" id=\"N\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"offText\" style=\"display:none\">OFF Text: <input type=\"text\" name=\"offText\" id=\"O\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"setAlarm\" style=\"display:none\">Set Alarm: &nbsp;&nbsp;&nbsp;&nbsp;<select name=\"onColorCode\" id=\"P\"><option value=\"\">Choose one...</option><option value=\"0\">OFF state</option><option value=\"1\">ON state</option></select></p><br>";


var humidityDiv2 = document.createElement("div");
humidityDiv2.id = "humidityContent2";
humidityDiv2.className = "rightContent";

humidityDiv2.innerHTML = "<p id=\"highAlarm\" style=\"background-color: #E12218;color: white;\">High Critical Level:  <input type=\"text\" name=\"highHighSetPoint\" id=\"G\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"highWarning\" style=\"background-color: rgb(254, 251, 91)\">High Warning Level:  <input type=\"text\" name=\"highSetPoint\" id=\"H\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"lowWarning\" style=\"background-color: rgb(254, 251, 91)\">Low Warning Level:  <input type=\"text\" name=\"lowSetPoint\" id=\"I\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"lowAlarm\" style=\"background-color: #E12218;color: white;\">Low Critical Level:  <input type=\"text\" name=\"lowLowSetPoint\" id=\"J\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><img src=\"bar.png\" style=\"display:block;margin: 0 auto;margin-top:25px;width:100%;height:auto;max-width:300px\">";




document.getElementById('clearDiv').style.display = "none";
deviceForm.insertBefore(humidityDiv,deviceForm.firstChild);
humidityContent.insertBefore(deviceDropdown,humidityContent.firstChild);

document.getElementById('deviceForm').appendChild(humidityDiv2);

deviceForm.appendChild(cancelBtn);
document.getElementById('deviceForm').appendChild(saveBtn);
document.getElementById('saveBtn').style.display='inline-block';




  


  } else if (device == "analog") { 

  clearForm();


analogSelected = true;
var analogDiv = document.createElement("div");
analogDiv.id = "analogContent";
analogDiv.className = "leftContent";
analogDiv.innerHTML = "<p id=\"radioID\">Radio ID:&nbsp;<input type=\"text\" name=\"radioID\" id=\"A\" maxlength=\"2\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"IONumber\">IO Number: <input type=\"text\" name=\"IOnumber\" id=\"B\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"typeCode\">Type Code: <input type=\"text\" name=\"typeCode\" id=\"C\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"zoneName\">Zone Name: <input type=\"text\" name=\"zoneName\" id=\"D\" maxlength=\"16\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"valueName\" style=\"display:none\">Value Name: <input type=\"text\" name=\"valueName\" id=\"E\" maxlength=\"8\" value=\"Analog\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"units\">Units: <input type=\"text\" name=\"units\" style=\"display:block;margin-left:25px\" id=\"F\" maxlength=\"4\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"4mA\">4mA Scale Value: <input type=\"text\" name=\"4mAScaleValue\" id=\"K\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"20mA\">20mA Scale Value: <input type=\"text\" name=\"20mAScaleValue\" id=\"L\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"counterScale\" style=\"display:none\">Counter Scale: <input type=\"text\" name=\"counterScale\" id=\"M\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"onText\" style=\"display:none\">ON Text: <input type=\"text\" name=\"onText\" id=\"N\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"offText\" style=\"display:none\">OFF Text: <input type=\"text\" name=\"offText\" id=\"O\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"setAlarm\" style=\"display:none\">Set Alarm: &nbsp;&nbsp;&nbsp;&nbsp;<select name=\"onColorCode\" id=\"P\"><option value=\"\">Choose one...</option><option value=\"0\">OFF state</option><option value=\"1\">ON state</option></select></p><br>";



var analogDiv2 = document.createElement("div");
analogDiv2.id = "analogContent2";
analogDiv2.className = "rightContent";
analogDiv2.innerHTML = "<p id=\"highAlarm\" style=\"background-color: #E12218;color: white;\">High Critical Level:  <input type=\"text\" name=\"highHighSetPoint\" id=\"G\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"highWarning\" style=\"background-color: rgb(254, 251, 91)\">High Warning Level:  <input type=\"text\" name=\"highSetPoint\" id=\"H\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"lowWarning\" style=\"background-color: rgb(254, 251, 91)\">Low Warning Level:  <input type=\"text\" name=\"lowSetPoint\" id=\"I\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"lowAlarm\" style=\"background-color: #E12218;color: white;\">Low Critical Level:  <input type=\"text\" name=\"lowLowSetPoint\" id=\"J\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><img src=\"bar.png\" style=\"display:block;margin: 0 auto;margin-top:25px;width:100%;height:auto;max-width:300px\">";


document.getElementById('clearDiv').style.display = "none";
deviceForm.insertBefore(analogDiv,deviceForm.firstChild);
analogContent.insertBefore(deviceDropdown,analogContent.firstChild);

document.getElementById('deviceForm').appendChild(analogDiv2);

deviceForm.appendChild(cancelBtn);
document.getElementById('deviceForm').appendChild(saveBtn);
document.getElementById('saveBtn').style.display='inline-block';





  } else if (device == "digital") {


  clearForm();


digitalSelected = true;
var digitalDiv = document.createElement("div");
digitalDiv.id = "digitalContent";
digitalDiv.className = "smallDiv";

digitalDiv.innerHTML = "<p id=\"radioID\">Radio ID:&nbsp;<input type=\"text\" name=\"radioID\" id=\"A\" maxlength=\"2\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"IONumber\">IO Number: <input type=\"text\" name=\"IOnumber\" id=\"B\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"typeCode\">Type Code: <input type=\"text\" name=\"typeCode\" id=\"C\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"zoneName\">Zone Name: <input type=\"text\" name=\"zoneName\" id=\"D\" maxlength=\"16\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"valueName\" style=\"display:none\">Value Name: <input type=\"text\" name=\"valueName\" id=\"E\" maxlength=\"8\" value=\"Digital\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"units\" style=\"display:none\">Units:&nbsp; <input type=\"text\" name=\"units\" id=\"F\" maxlength=\"4\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"highAlarm\" style=\"display:none\">High-High Set Point: <input type=\"text\" name=\"highHighSetPoint\" id=\"G\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"highWarning\" style=\"display:none\">High Set Point: <input type=\"text\" name=\"highSetPoint\" id=\"H\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"lowWarning\" style=\"display:none\">Low Set Point: <input type=\"text\" name=\"lowSetPoint\" id=\"I\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"lowAlarm\" style=\"display:none\">Low-Low Set Point: <input type=\"text\" name=\"lowLowSetPoint\" id=\"J\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"4mA\" style=\"display:none\">4mA Scale Value: <input type=\"text\" name=\"4mAScaleValue\" id=\"K\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"20mA\" style=\"display:none\">20mA Scale Value: <input type=\"text\" name=\"20mAScaleValue\" id=\"L\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"counterScale\" style=\"display:none\">Counter Scale: <input type=\"text\" name=\"counterScale\" id=\"M\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"onText\">ON Text: <input type=\"text\" name=\"onText\" id=\"N\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"offText\">OFF Text: <input type=\"text\" name=\"offText\" id=\"O\" maxlength=\"8\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"setAlarm\">Set Alarm: &nbsp;&nbsp;&nbsp;&nbsp;<select name=\"onColorCode\" id=\"P\"> <option value=\"\">Choose one...</option> <option value=\"0\">OFF state</option> <option value=\"1\">ON state</option></select></p>";

document.getElementById('deviceForm').appendChild(digitalDiv);


digitalContent.insertBefore(deviceDropdown,digitalContent.firstChild);

deviceForm.appendChild(cancelBtn);
document.getElementById('deviceForm').appendChild(saveBtn);
document.getElementById('saveBtn').style.display='inline-block';
//node.insertBefore(newnode,existingnode)
//document.getElementById('saveBtn').style.display='inline-block';




  } else if (device == "counter") {


clearForm();


counterSelected = true;
var counterDiv = document.createElement("div");
counterDiv.id = "counterContent";
counterDiv.className = "smallDiv";

counterDiv.innerHTML = "<p id=\"radioID\">Radio ID:&nbsp;<input type=\"text\" name=\"radioID\" id=\"A\" maxlength=\"2\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"IONumber\">IO Number: <input type=\"text\" name=\"IOnumber\" id=\"B\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"typeCode\">Type Code: <input type=\"text\" name=\"typeCode\" id=\"C\" maxlength=\"1\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"zoneName\">Zone Name: <input type=\"text\" name=\"zoneName\" id=\"D\" maxlength=\"16\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"valueName\" style=\"display:none\">Value Name: <input type=\"text\" name=\"valueName\" id=\"E\" maxlength=\"8\" value=\"Counter\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"units\">Units: <input type=\"text\" name=\"units\" style=\"display:block;margin-left:25px\" id=\"F\" maxlength=\"4\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"highAlarm\" style=\"display:none\">High-High Set Point: <input type=\"text\" name=\"highHighSetPoint\" id=\"G\" maxlength=\"3\"></p><p id=\"highWarning\" style=\"display:none\">High Set Point: <input type=\"text\" name=\"highSetPoint\" id=\"H\" maxlength=\"3\"></p><p id=\"lowWarning\" style=\"display:none\">Low Set Point: <input type=\"text\" name=\"lowSetPoint\" id=\"I\" maxlength=\"3\"></p><p id=\"lowAlarm\" style=\"display:none\">Low-Low Set Point: <input type=\"text\" name=\"lowLowSetPoint\" id=\"J\" maxlength=\"3\"></p><p id=\"4mA\" style=\"display:none\">4mA Scale Value: <input type=\"text\" name=\"4mAScaleValue\" id=\"K\" maxlength=\"3\"></p><p id=\"20mA\" style=\"display:none\">20mA Scale Value: <input type=\"text\" name=\"20mAScaleValue\" id=\"L\" maxlength=\"3\"></p><p id=\"counterScale\">Counter Scale: <input type=\"text\" name=\"counterScale\" id=\"M\" maxlength=\"3\" onblur=\"return blockSpecialChar(this.value,this.id)\"></p><p id=\"onText\" style=\"display:none\">ON Text: <input type=\"text\" name=\"onText\" id=\"N\" maxlength=\"8\"></p><p id=\"offText\" style=\"display:none\">OFF Text: <input type=\"text\" name=\"offText\" id=\"O\" maxlength=\"8\"></p><p id=\"setAlarm\" style=\"display:none\">Set Alarm: &nbsp;&nbsp;&nbsp;&nbsp;<select name=\"onColorCode\" id=\"P\"> <option value=\"\">Choose one...</option> <option value=\"0\">OFF state</option> <option value=\"1\">ON state</option></select></p>";

document.getElementById('deviceForm').appendChild(counterDiv);


counterContent.insertBefore(deviceDropdown,counterContent.firstChild);
deviceForm.appendChild(cancelBtn);
document.getElementById('deviceForm').appendChild(saveBtn);
document.getElementById('saveBtn').style.display='inline-block';



  } else {
//node.insertBefore(newnode,existingnode)

  document.getElementById('clearDiv').style.display = "block";
  deviceForm.insertBefore(deviceDropdown,deviceForm.firstChild);
  saveBtnShowing = false;
  clearForm();

  }

}



function tempType(type) {


    if (document.getElementById("FarenheitOption").selected == true) {
      document.getElementById("F").value = "F";

    } else if (document.getElementById("CelsiusOption").selected == true) {
      document.getElementById("F").value = "C";
    } else {
      alert("Please select Farenheit or Celsius.");
      document.getElementById("F").value = "";

    }




  }


  function clearForm() {

if (tempSelected == true) {
    deviceForm.insertBefore(deviceDropdown,deviceForm.firstChild);
    var temp = document.getElementById("tempContent");
    temp.parentNode.removeChild(temp);

    var temp2 = document.getElementById("tempContent2");
    temp2.parentNode.removeChild(temp2);

    tempSelected = false;
  
  } else if (humiditySelected == true) {
    deviceForm.insertBefore(deviceDropdown,deviceForm.firstChild);
    var humidity = document.getElementById("humidityContent");
    humidity.parentNode.removeChild(humidity);

     var humidity2 = document.getElementById("humidityContent2");
    humidity2.parentNode.removeChild(humidity2);

    humiditySelected = false;
  
  } else if (analogSelected == true) {
    deviceForm.insertBefore(deviceDropdown,deviceForm.firstChild);
    var analog = document.getElementById("analogContent");
    analog.parentNode.removeChild(analog);

     var analog2 = document.getElementById("analogContent2");
    analog2.parentNode.removeChild(analog2);

    analogSelected = false;
  
  } else if (digitalSelected == true) {
    deviceForm.insertBefore(deviceDropdown,deviceForm.firstChild);
    var digital = document.getElementById("digitalContent");
    digital.parentNode.removeChild(digital);
    digitalSelected = false;
  
  } else if (counterSelected == true) {
    deviceForm.insertBefore(deviceDropdown,deviceForm.firstChild);
    var counter = document.getElementById("counterContent");
    counter.parentNode.removeChild(counter);
    counterSelected = false;
  }


  if (saveBtnShowing == false) {
    var theSaveBtn = document.getElementById("saveBtn");
   theSaveBtn.parentNode.removeChild(theSaveBtn);
  }

  }


function writeTxt(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen) {



   // setTimeout(function(){
   //      window.location = link.href;
   //  }, 1000);



var newDeviceInt = count;
console.log(newDeviceInt);


A[newDeviceInt] = document.getElementById(one).value;
B[newDeviceInt] = document.getElementById(two).value;
C[newDeviceInt] = document.getElementById(three).value;
D[newDeviceInt] = document.getElementById(four).value;
E[newDeviceInt] = document.getElementById(five).value;
F[newDeviceInt] = document.getElementById(six).value;
G[newDeviceInt] = document.getElementById(seven).value;
H[newDeviceInt] = document.getElementById(eight).value;
I[newDeviceInt] = document.getElementById(nine).value;
J[newDeviceInt] = document.getElementById(ten).value;
K[newDeviceInt] = document.getElementById(eleven).value;
L[newDeviceInt] = document.getElementById(twelve).value;
M[newDeviceInt] = document.getElementById(thirteen).value;
N[newDeviceInt] = document.getElementById(fourteen).value;
O[newDeviceInt] = document.getElementById(fifteen).value;
P[newDeviceInt] = document.getElementById(sixteen).value;



document.getElementById("addDiv").innerHTML = "<h1 style=\"color:#000000\">Saving.  Please wait.</h1>";



if ((E[newDeviceInt] == "Temp")||(E[newDeviceInt] == "Humidity")||(E[newDeviceInt] == "Analog")) {


if (E[newDeviceInt] == "Analog") {

if(A[newDeviceInt] == "" || B[newDeviceInt] == "" || D[newDeviceInt] == "" || E[newDeviceInt] == "" || F[newDeviceInt] == "" || G[newDeviceInt] == "" || H[newDeviceInt] == "" || I[newDeviceInt] == "" || J[newDeviceInt] == "" || K[newDeviceInt] == "" || L[newDeviceInt] == "") {

  alert("Please fill out all form fields.");
  return false;
}
// M[newDeviceInt] = null;
// N[newDeviceInt] = null;
// O[newDeviceInt] = null;
// P[newDeviceInt] = null;

//C[newDeviceInt] = null;

} else if (E[newDeviceInt] == "Temp" || E[newDeviceInt] == "Humidity") {

if(A[newDeviceInt] == "" || B[newDeviceInt] == "" || D[newDeviceInt] == "" || E[newDeviceInt] == "" || F[newDeviceInt] == "" || G[newDeviceInt] == "" || H[newDeviceInt] == "" || I[newDeviceInt] == "" || J[newDeviceInt] == "") {

  alert("Please fill out all form fields.");
  return false;
}
// M[newDeviceInt] = null;
// N[newDeviceInt] = null;
// O[newDeviceInt] = null;
// P[newDeviceInt] = null;

//C[newDeviceInt] = null;

}  

if (parseFloat(J[newDeviceInt]) >= parseFloat(H[newDeviceInt])) {

alert("Your Low Critical Level must be lower than your High Warning Level.");
return false;
}


if (parseFloat(G[newDeviceInt]) <= parseFloat(H[newDeviceInt])) {

alert("Your High Critical Level must be higher than your High Warning Level.");
return false;

}

if (parseFloat(I[newDeviceInt]) == parseFloat(H[newDeviceInt])) {
  alert("Your High Warning Level must be higher than your Low Warning Level.");
  return false;
}

if (parseFloat(J[newDeviceInt]) >= parseFloat(I[newDeviceInt])) {

alert("Your Low Critical Level must be lower than your Low Warning Level.");
return false;

}

} else if (E[newDeviceInt] == "Digital") {

if(A[newDeviceInt] == "" || B[newDeviceInt] == "" || D[newDeviceInt] == "" || N[newDeviceInt] == "" || O[newDeviceInt] == "" || P[newDeviceInt] == "") {
  alert("Please fill out all form fields.");
  return false;
}
// M[newDeviceInt] = null;
// N[newDeviceInt] = null;
// O[newDeviceInt] = null;
// P[newDeviceInt] = null;

//C[newDeviceInt] = null;

} else if (E[newDeviceInt] == "Counter") {

if(A[newDeviceInt] == "" || B[newDeviceInt] == "" || D[newDeviceInt] == "" || F[newDeviceInt] == "" ||  M[newDeviceInt] == "") {
  alert("Please fill out all form fields.");
  return false;
}

if(M[newDeviceInt] == "0") {
  alert("Counter scale must be greater than 0.");
  return false;
}

} 

 


var jsonStrings = [];


   for (i = 0; i < A.length; i++) { 

    jsonStrings[i] = "{\"A\":\""+A[i]+"\"," + "\"B\":\""+B[i]+"\"," + "\"C\":\""+C[i]+"\"," + "\"D\":\""+D[i]+"\"," + "\"E\":\""+E[i]+"\"," + "\"F\":\""+F[i]+"\"," + "\"G\":\""+G[i]+"\"," + "\"H\":\""+H[i]+"\"," + "\"I\":\""+I[i]+"\"," + "\"J\":\""+J[i]+"\"," + "\"K\":\""+K[i]+"\"," + "\"L\":\""+L[i]+"\"," + "\"M\":\""+M[i]+"\"," + "\"N\":\""+N[i]+"\"," + "\"O\":\""+O[i]+"\"," + "\"P\":\""+P[i]+"\"}";
}

for (i=0; i <= A.length; i++) {
    if (i==0) {
      formVariables="data = ?'["+jsonStrings[i];
      } else if (i < A.length) {
         formVariables=formVariables.concat(","+jsonStrings[i]);
     } else {
          formVariables=formVariables.concat("]';");
     
   }
 }


alert("Saved!");

//alert(formVariables);

   nocache = "&nocache=" + Math.random() * 1000000;
   var request4 = new XMLHttpRequest();
   request4.open("POST", formVariables, false);
   request4.onreadystatechange = function () {
    if (request4.readyState == 4 && request4.status == 200) {
        setTimeout(function(){
        window.location = "/formSubmit";
    }, 100); 
    }
  } 

   try {
   request4.send();
  } 
   catch(err){
    console.error("Error sending form variables");
    alert("Error saving new device.  Try again.");
   }


   // var request5 = new XMLHttpRequest();
   // request5.open("GET", "/hello", false); 
   // request5.send();
   

}




function hideAddDiv(){

    pollRunning = setInterval('pollInputs()', 1000);

    document.getElementById("addDiv").style.display = 'none';
    document.getElementById("contentDiv").style.display = 'inherit';




}




function submitIP(one) {

//name01 = document.getElementById(Name).value;
//var locc = document.getElementById(Loc).value;
var newIP;
newIP = document.getElementById(one).value;

if (checkIP(newIP) == false){
  return false;
} else {

if (confirm("Please confirm your new IP Address: \n" + newIP + "\n\nIf correct, press OK to continue.") == true) {


  nocache = "&nocache=" + Math.random() * 1000000;
   var request2 = new XMLHttpRequest();
   request2.open("POST", "IPADDRESS/" + newIP, false); 
    try {
   request2.send();
   window.location = "restart.htm";
  } 
   catch(err){
    console.error("Error setting up IP address.");
    alert("Error saving IP Address.  Please try again.");
   }
 } else {

 }

}
  
}

function showSetup(){

clearInterval(pollRunning);

    document.getElementById("setupDiv").style.display = 'inherit';

    document.getElementById("settingsBtn").style.color = 'black';
    document.getElementById("settingsBtn").style.backgroundColor = 'white';

document.getElementById("homeBtn").style.color = 'white';
    document.getElementById("homeBtn").style.backgroundColor = 'transparent';

 if (document.getElementById("addDiv").style.display != 'none'){
          document.getElementById("addDiv").style.display = 'none';
          }
          if (document.getElementById("editDiv").style.display != 'none'){
        document.getElementById("editDiv").style.display = 'none';
          }
           if (document.getElementById("contentDiv").style.display != 'none'){
        document.getElementById("contentDiv").style.display = 'none';
          }

}

function showHome(){

    clearInterval(pollRunning);

    bindOff();

    pollRunning = setInterval('pollInputs()', 1000);
    
    document.getElementById("contentDiv").style.display = 'inherit';

    document.getElementById("homeBtn").style.color = 'black';
    document.getElementById("homeBtn").style.backgroundColor = 'white';
    document.getElementById("settingsBtn").style.color = 'white';
    document.getElementById("settingsBtn").style.backgroundColor = 'transparent';



          if (document.getElementById("addDiv").style.display != 'none'){
          document.getElementById("addDiv").style.display = 'none';
          }
          if (document.getElementById("editDiv").style.display != 'none'){
        document.getElementById("editDiv").style.display = 'none';
          }
           if (document.getElementById("setupDiv").style.display != 'none'){
        document.getElementById("setupDiv").style.display = 'none';
          }


}


function bindOn(){
  var bindOn = new XMLHttpRequest();
                            bindOn.open("GET", "bindOn", true);
                            bindOn.send();

  document.getElementById("bindBtn").onclick = function(){ bindOff(); return false; };
  document.getElementById("bindBtn").className = "btnOn";
  document.getElementById("bindBtn").innerHTML = "ON";
}


function bindOff(){
   var bindOff = new XMLHttpRequest();
                            bindOff.open("GET", "bindOff", true);
                            bindOff.send();
  
  document.getElementById("bindBtn").onclick = function(){ bindOn(); return false; };
  document.getElementById("bindBtn").className = "btn";
    document.getElementById("bindBtn").innerHTML = "OFF";

}

//************************************************
//END OF JAVASCRIPT
//************************************************