$(document).ready( function () {
    $('#table').DataTable( {
        paging: false,
        dom: 'Dfrtip',
        'ajax': './dataFolder/itenos.json',
        'columns':  [
            { 'data': 'Nachname',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    const surname = (oData.Nachname + oData.Vorname[0]).toLowerCase();
                    const aLink = `<a href=indexDetail.html?item=${surname} style='color: #00B0F0;'>${oData.Nachname}</a>`;
                    $(nTd).html(aLink);
                }
            },
            { 'data': 'Vorname',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    const surname = (oData.Nachname + oData.Vorname[0]).toLowerCase();
                    const aLink = `<a href=indexDetail.html?item=${surname} style='color: #00B0F0;'>${oData.Vorname}</a>`;
                    $(nTd).html(aLink);
                }
            },
            { 'data': 'Stellenbezeichnung',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    const surname = (oData.Nachname + oData.Vorname[0]).toLowerCase();
                    const aLink = `<a href=indexDetail.html?item=${surname} style='color: #00B0F0;'>${oData.Stellenbezeichnung}</a>`;
                    $(nTd).html(aLink);
                }
            },
            { 'data': 'Stellenbeschreibung' },
            { 'data': 'Telefon' },
            { 'data': 'Mobil' },
            { 'data': 'SMS', 'defaultContent': '<i class="fas fa-comment-dots fa-2x" ></i>'
            },
            { 'data': 'Master_Bachelor',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<a href='#' style='color: #00B0F0;'>"+oData.Master_Bachelor+"</a>");
                }
            },
            { 'data': 'externerMitarbeiter', 'classname': 'mitarbeiter',
                'fnCreatedCell': function (nTd, sData, oData, iRow, iCol) {
                    if (oData.externerMitarbeiter === "Zeitarbeit"){
                        $(nTd).html("<img alt='Zeitarbeit' height='10' src='./images/mark_extern.gif' width='10'> Zeitarbeit ");
                    }else if (oData.externerMitarbeiter === "Festangestellte(r)"){
                        $(nTd).html("<img alt='Mitarbeiter' height='10' src='./images/mark_extern1.gif' width='10'> Intern ");
                    }
                    else{
                        $(nTd).html("<img alt='Sonstige' height='10' src='./images/mark_extern2.gif' width='10'> Sonstige ");
                    }

                }
            },
            { 'data': 'T\u00e4tigkeitsstichpunkte1' }
        ]
    } );
} );

let number = 0;


function sendSMS() {
    // THis is called when clicked on SMS Item
}
