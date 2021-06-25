$(document).ready( function () {
    $('#table').DataTable( {
        paging: false,
        dom: 'Dfrtip',
        'ajax': './json/camera.json',
        'columns':  [
            { 'data': 'name' },
            { 'data': 'ausgeliehen',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    if (oData.ausgeliehen === "true") {
                      const vari = `<span>&#128308;</span>`;
                    }
                    else {
                      const vari = `<span>&#128994;</span>`;
                    }
                    $(nTd).html(vari);
                }
            },
            { 'data': 'ausleiher',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    if (oData.ausgeliehen === "true") {
                      const vari = `<span>${oData.ausleiher + " am " + oData.datum}</span>`;
                    }
                    else {
                      const vari = `<span> </span>`;
                    }
                    $(nTd).html(vari);
                  }
                },
            { 'data': 'id',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    if (oData.ausgeliehen === "false") {
                      const aLink = `<a href=indexDetail.html?item=${oData.id} style='color: #00B0F0;'>Jetzt ausleihen</a>`;
                      $(nTd).html(aLink);
                    }
                    else {
                      const vari = `<span>&#128994;</span>`;
                    }
                    $(nTd).html(vari);
                }
            },

        ]
    } );
} );
