# jQuery UI

Resumo do curso:

https://www.schoolofnet.com/curso-jquery-ui/

---

## Índice

- [Configurando e testando](#parte1)
- [Draggable](#parte2)
- [Droppable](#parte3)
- [Capturar informações do Droppable e Accordion](#parte4)    
- [Autocomplete](#parte5)    
- [Datepicker](#parte6)    
- [Dialog](#parte7)
- [Progressbar](#parte8)    
- [Tabs](#parte9)    
- [Tooltip](#parte10)    
- [Customizando o jQueryUI](#parte11)    
   

---

## <a name="parte1">Configurando e testando</a>

http://jqueryui.com/download/

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>jQuery UI</title>
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <link rel="stylesheet" href="css/jquery-ui.theme.min.css">
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.min.js"></script>
</head>
<body>
<p>Date: <input type="text" id="datepicker"></p>

<script>
    $(function(){
        $('#datepicker').datepicker();
    });

</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte2">Draggable</a>

http://jqueryui.com/draggable/

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>jQuery UI</title>
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <link rel="stylesheet" href="css/jquery-ui.theme.min.css">
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <style>
        #block {
            width: 100px;
            height: 150px;
            border: 2px solid #235ded;
            background-color: #235ded;
            color: white;
            text-align: center;
        }
        #container {
            width: 800px;
            height: 800px;
            border: 2px solid #235ded;
        }
    </style>
</head>
<body>

<div id="container">
    <div id="block">
        <p>draggable</p>
        <p>start: <span id="start"></span></p>
        <p>drag: <span id="drag"></span></p>
        <p>stop: <span id="stop"></span></p>
    </div>
</div>


<script>
    $(function () {
        var start = 0;
        var drag = 0;
        var stop = 0;
        $('#block').draggable({
            containment: "#container",
            start: function () {
                $('#start').html(start++);
            },
            drag: function () {
                $('#drag').html(drag++);
            },
            stop: function () {
                $('#stop').html(stop++);
            }
        });
    });
</script>
</body>
</html>
```


[Voltar ao Índice](#indice)

---

## <a name="parte3">Droppable</a>

http://jqueryui.com/droppable/

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>jQuery UI</title>
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <link rel="stylesheet" href="css/jquery-ui.theme.min.css">
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <style>
        #block {
            width: 100px;
            height: 150px;
            border: 2px solid #235ded;
            background-color: #235ded;
            color: white;
            text-align: center;
        }
        #droppable {
            width: 150px;
            height: 180px;
            border: 2px solid #eddc94;
            background-color: #eddc94;
            color: #12b367;
            text-align: center;
        }
        #container {
            width: 600px;
            height: 400px;
            border: 2px solid #235ded;
        }
    </style>
</head>
<body>
<div id="container">
    <div id="block">
        <p>draggable</p>
        <p>start: <span id="start"></span></p>
        <p>drag: <span id="drag"></span></p>
        <p>stop: <span id="stop"></span></p>
    </div>
    <div id="droppable">
        <p>droppable</p>
    </div>
</div>
<script>
    $(function () {
        var start = 0;
        var drag = 0;
        var stop = 0;
        $('#block').draggable({
            containment: "#container",
            start: function () {
                $('#start').html(start++);
            },
            drag: function () {
                $('#drag').html(drag++);
            },
            stop: function () {
                $('#stop').html(stop++);
            }
        });
        $('#droppable').droppable({
            accept: "#block", //limitar por elemento - id
            hoverClass: function () { // hoverClasse -> mudar cor ao passar por cima
                $(this).css("background-color", "#EDB059");
            },
            //activeClass: // muda quando estiver ativo
            drop: function (event, ui) {
                //console.log(ui.droppable[0].id); pegar elemento
                //console.log(ui.droppable[0].className);
                $(this).css("background-color", "#ED7C12");
                $(this).html("OK");
            }
        });
    });
</script>
</body>
</html>
```
[Voltar ao Índice](#indice)

---

## <a name="parte4">Capturar informações do Droppable e Accordion</a>

http://jqueryui.com/accordion/

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>jQuery UI</title>
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <link rel="stylesheet" href="css/jquery-ui.theme.min.css">
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <style>

    </style>
</head>
<body>
<div id="test_accordion">
    <h3>Info 1</h3>
    <div>
        <p>Description 1 ...</p>
    </div>
    <h3>Info 2</h3>
    <div>
        <p>Description 2 ...</p>
    </div>
    <h3>Info 3</h3>
    <div>
        <p>Description 3 ...</p>
    </div>
</div>
<script>
    $(function(){
        $('#test_accordion').accordion();
    });
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte5">Autocomplete</a>

http://jqueryui.com/autocomplete/

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>jQuery UI</title>
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <link rel="stylesheet" href="css/jquery-ui.theme.min.css">
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <style>

    </style>
</head>
<body>
<h1>Autocomplete</h1>
<input type="text" id="autocomplete">
<script>
    $(function(){
        var autocomplete = [
            'Javascript',
            'jQuery',
            'CSS',
            'HTML5'
        ];
        $('#autocomplete').autocomplete({
            source: autocomplete
        });
    });
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte6">Datepicker</a>

http://jqueryui.com/datepicker/

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>jQuery UI</title>
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <link rel="stylesheet" href="css/jquery-ui.theme.min.css">
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <style>

    </style>
</head>
<body>
<h1>Datepicker</h1>
    <input type="text" id="datepicker" placeholder="Date">
<script>
    $(function(){
        $('#datepicker').datepicker(); //inicializando
        $('#datepicker').datepicker('option','showAnim','slideDown'); //opções
    });
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte7">Dialog</a>

http://jqueryui.com/dialog/

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>jQuery UI</title>
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <link rel="stylesheet" href="css/jquery-ui.theme.min.css">
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <style>

    </style>
</head>
<body>
<h1>Dialog</h1>

<button id="btn">Dialog</button>

<div id="dialog" title="Teste Dialog" style="display: none;">
    <p>TLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat porta porta. Proin scelerisque euismod sodales. Proin accumsan congue porta. Duis aliquet, purus sed euismod ultricies, mi purus ullamcorper quam, a rhoncus lorem orci nec tortor. Cras eu auctor ligula, nec pellentesque turpis.</p>
</div>
<script>
    $(function(){
        $('#btn').click(function(){
            $('#dialog').dialog();
        });
    });
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte8">Progressbar</a>

http://jqueryui.com/progressbar/

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>jQuery UI</title>
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <link rel="stylesheet" href="css/jquery-ui.theme.min.css">
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <style>
        .ui-progressbar {
            position: relative;
        }
        .progress-label {
            position: absolute;
            left: 50%;
            top: 4px;
            font-weight: bold;
            text-shadow: 1px 1px 0 #fff;
        }
    </style>
</head>
<body>
<h1>Progressbar</h1>

<div id="progressbar">
    <div class="progress-label">Loading...</div>
</div>

<script>
    $(function () {
        $('#progressbar').progressbar({
            value: false,
            change: function () {
                $('.progress-label').text($('#progressbar').progressbar('value') + "%");
            },
            complete: function () {
                $('.progress-label').text("100%");
            }
        });

        function progress() {
            var val = $('#progressbar').progressbar("value") || 0;
            $('#progressbar').progressbar("value", val + 2);
            if (val < 99) {
                setTimeout(progress, 80); // 80 milessimo
            }
        }

        setTimeout(progress, 2000); //2 segundos
    });
</script>
</body>
</html>
```


[Voltar ao Índice](#indice)

---

## <a name="parte9">Tabs</a>


[Voltar ao Índice](#indice)

---

## <a name="parte10">Tooltip</a>


[Voltar ao Índice](#indice)

---

## <a name="parte11">Customizando o jQueryUI</a>


[Voltar ao Índice](#indice)

---