window.onload = function() {
    loadJSON(function(response) {
        // Parsing JSON string into object
        var person = JSON.parse(response);


        let i = 0;
        for(i = 0;i<person.Kamera.length;i++) {
            $("#productTable tbody").append("<tr>" +
                "<td>"+person.Kamera[i].name+"</td>" +
                "<td>"+person.Kamera[i].age+"</td>" +
                "<td>"+person.Kamera[i].city+"</td>" +
                "<td>"+person.Kamera[i].id+"</td>" +
                "</tr>");
        }


    });
}
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'infos.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function itemAusleihen() {


}

function UpdateTableKameras() {
    loadJSON(function(response) {
        // Parsing JSON string into object
        var person = JSON.parse(response);

        $("#productTable tbody").append("<tr>" +
            "<td>"+person.name+"</td>" +
            "<td>"+person.age+"</td>" +
            "<td>"+person.city+"</td>" +
            "<td>"+person.id+"</td>" +
            "</tr>");
    });
    let text = '{ "name":"John", "age":30, "city":"New York", "id":2}';

}



