# jQuery - Iniciando

Resumo do curso:

https://www.schoolofnet.com/curso-jquery-iniciando/

---

## Índice

- [Introdução e instalação](#parte1)
- [Trabalhando com CDN](#parte2)
- [Sintaxe](#parte3)
- [Seletores](#parte4)    
- [Events](#parte5)    
- [Manipulando CSS e adicionando Class](#parte6)    
- [Trabalhando com Show, Hide e Toggle](#parte7)
- [Animação](#parte8)    
- [Slide Down Up e Toggle](#parte9)    
- [Validação de formulários](#parte10)    
- [Resumo final](#parte11)    

---

## <a name="parte1">Introdução e instalação</a>

http://jquery.com/download/

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <script src="js/jquery-3.2.1.min.js"></script>
</head>
<body>
<header>
    <h1 id="title"></h1>
    <p id="desc"></p>
</header>

<script src="js/tests_jQuery.js"></script>
</body>
</html>
```

```javascript
$(document).ready(function () {
    $('#title').html('Aulas de jQuery');
    $('#desc').html('Começando com jQuery...');
});
```

[Voltar ao Índice](#indice)

---

## <a name="parte2">Trabalhando com CDN</a>

Documentação:

https://developers.google.com/speed/libraries/#jquery

https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview#Using_jQuery_from_the_CDN_21

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <!-- Google CDN -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
    <!-- Microsoft CDN -->
    <!-- <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.0.min.js"></script> -->
    <script src="js/jquery-3.2.1.min.js"></script>
</head>
<body>
<header>
    <h1 id="title"></h1>
    <p id="desc"></p>
</header>

<script src="js/tests_jQuery.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte3">Sintaxe</a>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <script src="js/jquery-3.2.1.min.js"></script>
</head>
<body>
<header>
    <h1 id="title"></h1>
    <p id="desc"></p>
    <h1>H1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <p>Paragrafo sem ID</p>
</header>
<main>
    <section>
        <button>this HIDE()</button>
        <button>this HIDE() 2</button>
    </section>
</main>

<script src="js/tests_jQuery.js"></script>
</body>
</html>
```
```javascript
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
```

[Voltar ao Índice](#indice)

---

## <a name="parte4">Seletores</a>

https://www.w3schools.com/jquery/jquery_ref_selectors.asp

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <script src="js/jquery-3.2.1.min.js"></script>
</head>
<body>
<header>

    <h1 id="title"></h1>

</header>
<main>
    <section>
        <div id="bird" class="classBird">Bird</div>
        <div class="classBird">Bird</div>
        <div class="classBird">Bird</div>
        <div class="classBird">Bird</div>
        <div class="classBird">Bird</div>
    </section>
</main>

<script src="js/tests_jQuery.js"></script>
</body>
</html>
```

```javascript
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
```


[Voltar ao Índice](#indice)

---

## <a name="parte5">Events</a>

```javascript
$(document).ready(function () {
    $('#title').html('Aulas de jQuery');
    $('#desc').html('Começando com jQuery...');

    $('#click').click(function () {
        $(this).html('OK');
    });
    $('#dblclick').dblclick(function () {
        $(this).html('OK');
    });
    $('#mouseenter').mouseenter(function () {
        $(this).html('OK');
    });
    $('#mouseleave').mouseleave(function () {
        $(this).html('OK');
    });

    $('#keypress').keypress(function () {
        $('#eventKey').html('keypress - ' + $(this).val());
    });

    $('#keydown').keydown(function () {
        $('#eventKey').html('keydown - ' + $(this).val());
    });

    $('#keyup').keyup(function () {
        $('#eventKey').html('keyup - ' + $(this).val());
    });

});
```
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <script src="js/jquery-3.2.1.min.js"></script>
</head>
<body>

<header>
    <h1 id="title"></h1>
    <p id="desc"></p>
</header>

<main>
    <section>
        <h1>Mouse Events</h1>
        <button id="click">click()</button>
        <button id="dblclick">dblclick()</button>
        <button id="mouseenter">mouseenter()</button>
        <button id="mouseleave">mouseleave()</button>

        <br>

        <h1>Keyboard Events</h1>
        <input type="text" id="keypress" placeholder="keypress">
        <input type="text" id="keydown" placeholder="keydown">
        <input type="text" id="keyup" placeholder="keyup">
        <p id="eventKey"></p>
    </section>
</main>

<script src="js/tests_jQuery.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte6">Manipulando CSS e adicionando Class</a>

https://www.w3schools.com/jquery/jquery_css_classes.asp

```css
body {
    margin: 0;
    padding: 0;
}

.header {
    background-color: rgb(107, 167, 163);
    width: 100%;
    height: 100px;
    margin-top: 0;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
```

```javascript
$(document).ready(function () {
    $('#title').html('Aulas de jQuery');
    $('#desc').html('Começando com jQuery...');

    $('#header').addClass('header btn btn-info');
    $('#header').removeClass('btn btn-info');
    $('#header').css('height','60px');
    $('#header').css('padding','10px');
    $('#title').css('margin-top','0');
    $('#title').css('margin-bottom','0');
    $('#desc').css('margin-top','0');
    $('main').css('padding','20px');

});
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <script src="js/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header id="header">
    <h1 id="title"></h1>
    <p id="desc"></p>
</header>

<main>
    <section>
        <h1>addClass and css with jQuery</h1>
        <br><br><br>
    </section>
</main>

<script src="js/tests_jQuery.js"></script>
</body>
</html>
```


[Voltar ao Índice](#indice)

---

## <a name="parte7">Trabalhando com Show, Hide e Toggle</a>

```javascript
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
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <script src="js/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header id="header">
    <h1 id="title"></h1>
    <p id="desc"></p>
</header>

<main>

</main>

<script src="js/tests_jQuery.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte8">Animação</a>

https://www.w3schools.com/jquery/jquery_animate.asp

```javascript
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

    $('main').append('<p id="test">Teste de animação</p>');
    $('main').append('<button id="animatebtn">Animação</button>');

    $('#test').css('border', '1px solid green');
    $('#test').css('width', '100px');
    $('#test').css('text-align', 'center');

    $('#animatebtn').click(function () {
        $('#test').animate({
            fontSize: '4em',
            borderWidth: '10px',
            width: '70%'
        }, 2000, function () {
            $(this).css('border-color', 'red'); // <<--- função exe qnd terminar
        });
    });

});
```
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <script src="js/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header id="header">
    <h1 id="title"></h1>
    <p id="desc"></p>
</header>

<main>

</main>

<script src="js/tests_jQuery.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte9">Slide Down Up e Toggle</a>

https://www.w3schools.com/jquery/jquery_slide.asp

```javascript
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

    $('main').append('<p id="test">Text slideDown, slideUp and slideToggle!</p>');
    $('main').append('<button id="downbtn">SlideDown</button>');
    $('main').append('<button id="upbtn">SlideUp</button>');
    $('main').append('<button id="togglebtn">SlideToggle</button>');
    $('#test').css('border','1px solid green');
    $('#test').css('width','600px');
    $('#test').css('height','80px');
    $('#test').css('text-align','center');

    $('#downbtn').click(function () {
        $('#test').slideDown();
    });

    $('#upbtn').click(function () {
        $('#test').slideUp();
    });

    $('#togglebtn').click(function () {
        $('#test').slideToggle();
    });

});
```

[Voltar ao Índice](#indice)

---

## <a name="parte10">Validação de formulários</a>

https://www.w3schools.com/jquery/event_submit.asp

https://www.w3schools.com/jquery/jquery_ref_events.asp

```javascript
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
```

[Voltar ao Índice](#indice)

---

## <a name="parte11">Resumo final</a>

http://api.jquery.com/

https://nandovieira.com.br/usando-jquery-na-pratica

https://www.w3schools.com/jquery/


[Voltar ao Índice](#indice)

---