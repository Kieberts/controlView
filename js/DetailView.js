// Gets Konto (sn) from URL
var konto = getParameterByName('item');


// Saves JSON in var
const objComplete = getJson('./dataFolder/itenos.json');

const obj = getObj(objComplete,konto);

// Sets items
$(document).ready( function () {
    setItems();
} );


// Returns only Konto (sn);
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// searchs thought JSON Array
// Returns single Object
function getObj(objFull, sn) {
  for (var i = 0; i < Object.keys(objFull.data).length; i++) {
    // If Konto (sn) equals sn
    if (objFull.data[i].Konto === sn){
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

// If name is capitaliest = undefined
function setItems() {

    // TODO: if null place null

    let colArray = ['colName', 'colAbteilung', 'colTeam', 'colBezeichung', 'colStelle', 'colVertretung', 'colVorgesetzter', 'colRaum', 'colPostanschrift', 'colTelefon', 'colFax', 'colMobil', 'colEmail', 'colTaetigkeitsstichpunkte', 'colWebsite'];
    let itemArray = ['Anzeigename', 'Abteilung', 'Team', 'Stellenbezeichnung', 'Stellenbeschreibung', 'Vertretung', 'Vorgesetzter', 'B\u00fcro', 'Adresse', 'Telefon', 'Fax', 'Mobil', 'Email', 'T\u00e4tigkeitsstichpunkte1', 'Webseite' ];

    itemArray.forEach((item,index)=>{
        setItemHilfe(colArray[index],item);
    })
}

function setItemHilfe(col, item) {
    document.getElementById(col).innerHTML = getDetail(item);
}


