$(document).ready( function () {
    $('#tableCamera').DataTable( {
        paging: false,
        searching: false,
        bInfo : false,
        dom: 'Dfrtip',
        'ajax': './json/camera.json',
        'columns':  [
            { 'data': 'geraetName' },
            { 'data': 'ausgeliehen',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    let vari = ``;
                    if (oData.ausgeliehen === "1") {
                      vari = `<span>&#128308;</span>`;
                    }
                    else {
                      vari = `<span>&#128994;</span>`;
                    }
                    $(nTd).html(vari);
                }
            },
            { 'data': 'ausleiher',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    let vari = ``;
                    if (oData.ausgeliehen === "1") {
                      vari = `<span>${oData.ausleiher + " am " + oData.datum}</span>`;
                    }
                    else {
                      vari = `<span> </span>`;
                    }
                    $(nTd).html(vari);
                  }
                },
            { 'data': 'id',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    let vari = ``;
                    if (oData.ausgeliehen === "0") {
                      vari = `<a href=indexAusleihen.php?item=${oData.id}&name=Camera style='color: #00B0F0;'>Jetzt ausleihen</a>`;
                    }
                    else {
                      vari = `<a href=indexAbgeben.php?item=${oData.id}&name=Camera style='color: #00B0F0;'>Zurückgeben</a>`;
                    }
                    $(nTd).html(vari);
                }
            },

        ]
    } );
} );
