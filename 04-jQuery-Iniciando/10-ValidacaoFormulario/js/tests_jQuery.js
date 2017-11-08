$(document).ready(function () {

    $('#title').html('Curso de jQuery');
    $('#desc').html('Iniciando com jQuery');

    $('#header').addClass('header btn btn-info');
    $('#header').removeClass('btn btn-info');

    $('#header').css('height', '60px');
    $('#header').css('padding', '10px');
    $('#title').css('margin-top', '0');
    $('#title').css('margin-bottom', '0');
    $('#desc').css('margin-top', '0');
    $('main').css('padding', '20px');

    $('form').submit(function () {
        var name = $(':input[name = name]').val();
        var email = $(':input[name = email]').val();
        var tel = $(':input[name = tel]').val();
        var term = $(':input[name = term]').is(":checked"); // <<-- true or false

        var error = "";
        $('#errors').html("");

        if (name === "") {
            error += "<p>Fill the name</p>";
        }

        if (email === "") {
            error += "<p>Fill the email</p>";
        }

        if (tel === "") {
            error += "<p>Fill the telephone</p>";
        }

        if (!term) { // <<-- true or false
            error += "<p>Accept the terms</p>";
        }

        if (error) {
            $('#errors').html(error);
            return false;
        }

        return true;
    });

});