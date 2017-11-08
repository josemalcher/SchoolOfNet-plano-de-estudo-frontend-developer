$(document).ready(function () {
    $('#title').html('Aulas de jQuery');
    $('#desc').html('Começando com jQuery...');

    $('#header').addClass('header btn btn-info');
    $('#header').removeClass('btn btn-info');
    $('#header').css('height', '60px');
    $('#header').css('padding', '10px');
    $('#title').css('margin-top', '0');
    $('#title').css('margin-bottom', '0');
    $('#desc').css('margin-top', '0');
    $('main').css('padding', '20px');

    //$('main').prepend('<h3>test h3</h3>');
    $('main').append('<p id="test">test show, hide and toggle!</p>');
    $('main').append('<button id="showbtn">Show</button>');
    $('main').append('<button id="hidebtn">Hide</button>');
    $('main').append('<button id="togglebtn">Toggle</button>');

    $('#showbtn').click(function () {
        $('#test').show();
    });

    $('#hidebtn').click(function () {
        $('#test').hide();
    });

    $('#togglebtn').click(function () {
        $('#test').toggle();
    });

});