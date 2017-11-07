$(document).ready(function () {
    $('#title').html('Aulas de jQuery');
    $('#desc').html('Começando com jQuery...');

    //$('header').hide();
    //$('header').html('<h1>Colocando outro Texto</h1>');

    $('h1').css('color','red');
    $('h2').css('color','green');
    $('h3').css('color','gray');
    $('h4').css('color','blue');

    $('button').click(function () {
        $(this).css('color','red');
    });

});