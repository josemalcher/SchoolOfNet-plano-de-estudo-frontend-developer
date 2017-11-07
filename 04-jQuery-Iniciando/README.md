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


[Voltar ao Índice](#indice)

---

## <a name="parte6">Manipulando CSS e adicionando Class</a>


[Voltar ao Índice](#indice)

---

## <a name="parte7">Trabalhando com Show, Hide e Toggle</a>


[Voltar ao Índice](#indice)

---

## <a name="parte8">Animação</a>


[Voltar ao Índice](#indice)

---

## <a name="parte9">Slide Down Up e Toggle</a>


[Voltar ao Índice](#indice)

---

## <a name="parte10">Validação de formulários</a>


[Voltar ao Índice](#indice)

---

## <a name="parte11">Resumo final</a>


[Voltar ao Índice](#indice)

---