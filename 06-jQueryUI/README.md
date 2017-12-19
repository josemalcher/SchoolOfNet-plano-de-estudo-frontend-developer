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


[Voltar ao Índice](#indice)

---

## <a name="parte5">Autocomplete</a>


[Voltar ao Índice](#indice)

---

## <a name="parte6">Datepicker</a>


[Voltar ao Índice](#indice)

---

## <a name="parte7">Dialog</a>


[Voltar ao Índice](#indice)

---

## <a name="parte8">Progressbar</a>


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