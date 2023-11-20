$(document).ready(function() {

    $('#get-data').click(function() {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')

            .done(function(data) {

                let pFirma = $('<p></p>').text(`Post ID: ${data.firma}`);
                let pImie = $('<p></p>').text(`Post ID: ${data.imie}`);
                let pNazwisko = $('<p></p>').text(`Post ID: ${data.nazwisko}`);
                let pZawod = $('<p></p>').text(`Post ID: ${data.zawod}`);

                let jqDiv = $('div');

                jqDiv.append(pFirma);
                jqDiv.append(pImie);
                jqDiv.append(pNazwisko);
                jqDiv.append(pZawod);

            })

            .fail(function(error) {
                console.log(error);
            });

    });

});