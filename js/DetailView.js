var item = new URL(window.location.href).searchParams.get("name");
var id = new URL(window.location.href).searchParams.get("item");

console.log(item + " " + id);

var obj = {};
//const obj = getObj(objComplete,konto);

// Sets items
$(document).ready( function () {
  // Gets Obj
  obj = loadObj();

  console.log(obj);
  //
  buildPage();


} );

// searchs thought JSON Array
// Returns single Object
function getObj(objFull, id) {
  for (var i = 0; i < Object.keys(objFull.data).length; i++) {
    // If Konto (sn) equals sn
    if (objFull.data[i].id === id){
        return objFull.data[i];
    }
  }
  return "Konto not found!";
}

// Gets ajax JSON File
function getJson(urlPath) {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': urlPath,
    'dataType': "json",
    'success': function(data) {
      json = data;
    }
  });
  return json;
}

//
function getDetail(search) {
  return obj[search];
}

function loadObj() {
  let jsonObj = {};
  if (item === "Camera") {
    // Saves JSON in var
    jsonObj = getJson('./json/camera.json');
  }
  else {
    // Saves JSON in var
    jsonObj = getJson('./json/headset.json');
  }

  return getObj(jsonObj,id);
}

function buildPage() {
  // Sets Title
    //console.log(getDetail('geraetName'));
    document.querySelector("title").innerText = getDetail('geraetName');

    // Sets H1
    document.getElementById('headerName').innerText = "Gerätname: " + getDetail('geraetName');

    // Unables Submit Button until both inputs are filled out!
    document.getElementById('send').disabled = true;

    document.getElementById('pflichtFeldName').innerHTML  = "<span>Name</span><span style='color: darkred'>*</span><span>: </span>";
    document.getElementById('pflichtFeldDatum').innerHTML  = "<span>Datum</span><span style='color: darkred'>*</span><span>: </span>";

}

function checkInput() {
  document.getElementById('send').disabled = true;

  let x = document.getElementById('inputName').value;
  let y = document.getElementById('inputDate').value;
  if (x === "") {
      document.getElementById('send').disabled = true;
  }
  else if (y === "") {
    document.getElementById('send').disabled = true;
  }
  else{
    document.getElementById('send').disabled = false;
  }
}
