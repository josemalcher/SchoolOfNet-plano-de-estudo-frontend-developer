$(document).ready(function () {
    $('#title').html('Aulas de jQuery');
    $('#desc').html('Começando com jQuery...');

    var bird = $('#bird').html();
    $('#bird').html(bird + " in the sky (add via jQuery)");
    $('.classBird').css('color','orange');
    $('.classBird:first').css('color','red');
    $('.classBird:last').css('color','blue');

    $('div').html("Mudando todos os textos das DIV");

});