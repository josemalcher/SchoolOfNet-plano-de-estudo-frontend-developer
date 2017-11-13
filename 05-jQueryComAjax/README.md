# jQuery com Ajax

Resumo do curso:

https://www.schoolofnet.com/curso-jquery-com-ajax/

---

## Índice

- [Introdução e configuração](#parte1)
- [Preparando o Ajax](#parte2)
- [Recebendo os dados com PHP](#parte3)
- [Serialize e SerializaArray](#parte4)    
- [Done fail e always](#parte5)    
- [DataType](#parte6)    
- [Request](#parte7)
- [Manipulando dados](#parte8)    
- [Validando os dados](#parte9)    
- [Salvar dados no banco](#parte10)    
- [Listando registros parte 1](#parte11)    
- [Listando registros parte 2](#parte12)    
- [Listar último registro salvo](#parte13)    
- [Finalizando](#parte14)    

---

## <a name="parte1">Introdução e configuração</a>

https://www.apachefriends.org/pt_br/download.html

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Ajax request with jQuery</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
</head>
<body>
<main>
    <section class="container">
        <h1>Ajax request with jQuery</h1>
        <form id="AjaxRequest">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label>Telephone</label>
                <input type="text" class="form-control" name="tel" placeholder="Telephone">
            </div>
            <button type="submit" class="btn btn-info">Submit</button>
        </form>
    </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

```javascript
$(function(){
    $('#AjaxRequest').submit(function(){
        //ajax
        alert("ok");
        return false;
    });
});
```

[Voltar ao Índice](#indice)

---

## <a name="parte2">Preparando o Ajax</a>

```javascript
$(function(){
    $('#AjaxRequest').submit(function(){

        var request = $.ajax({
            method:"GET",
            uri:"post.php",
            data:{
                name: $(':input[name=name]'.val()),
                email: $(':input[name=email]'.val()),
                tel: $(':input[name=tel]'.val())
            }
        });

        return false;
    });
});
```

[Voltar ao Índice](#indice)

---
## <a name="parte3">Recebendo os dados com PHP</a>

```javascript
$(function () {
    $('#AjaxRequest').submit(function () {
        var request = $.ajax({
            method: "GET",
            url: "post.php",
            data: {
                name: $(':input[name=name]').val(),
                email: $(':input[name=email]').val(),
                tel: $(':input[name=tel]').val()
            }
        });

        request.always(function (e) {
            console.log(e);
        });

        return false;
    });
});
```

```
<?php

    if($_GET){
        var_dump($_GET); exit;
    }
    if($_POST){
            var_dump($_POST); exit;
    }


```

[Voltar ao Índice](#indice)

---
## <a name="parte4">Serialize e SerializaArray</a>

```javascript
$(function () {
    $('#AjaxRequest').submit(function () {
        var form = $(this).serialize();
        var formArray = $(this).serializeArray();

        console.log(form);
        console.log(formArray);

        var request = $.ajax({
            method: "GET",
            url: "post.php",
            data: form
        });

        request.always(function (e) {
            console.log(e);
        });

        return false;
    });
});
```

[Voltar ao Índice](#indice)

---
## <a name="parte5">Done fail e always</a>

```javascript
$(function () {
    $('#AjaxRequest').submit(function () {
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        //console.log(form);
        //console.log(formArray);

        var request = $.ajax({
            method: "GET",
            url: "post.php",
            data: form
        });

        request.done(function (e) {
            console.log(e);
        });

        request.fail(function (e) {
            console.log(e);
        });

        request.always(function (e) {
            console.log(e);
        });

        return false;
    });
});
```

```
<?php

    if($_GET){
        var_dump($_GET); exit;
        //header("HTTP/1.0 404 Not Found");exit;
    }
    if($_POST){
            var_dump($_POST); exit;
    }


```

[Voltar ao Índice](#indice)

---
## <a name="parte6">DataType</a>

```javascript
$(function () {
    $('#AjaxRequest').submit(function () {
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        //console.log(form);
        //console.log(formArray);

        var request = $.ajax({
            method: "GET",
            url: "post.php",
            data: form,
            dataType:"json",
        });

        request.done(function (e) {
            console.log("DONE");
            console.log(e);
            console.log(e.name);
        });

        request.fail(function (e) {
            console.log("FAIL!!");
            console.log(e);
        });

        request.always(function (e) {
            console.log("ALWAYS");
            console.log(e);
        });

        return false;
    });
});
```
```
<?php

    if($_GET){
        //var_dump($_GET); exit;
        //header("HTTP/1.0 404 Not Found");exit;
        //echo "<name>{$_GET['name']}</name>";
        echo json_encode($_GET);exit;
    }
    if($_POST){
            var_dump($_POST); exit;
    }


```

[Voltar ao Índice](#indice)

---
## <a name="parte7">Request</a>


[Voltar ao Índice](#indice)

---
## <a name="parte8">Manipulando dados</a>


[Voltar ao Índice](#indice)

---
## <a name="parte9">Validando os dados</a>


[Voltar ao Índice](#indice)

---
## <a name="parte10">Salvar dados no banco</a>


[Voltar ao Índice](#indice)

---
## <a name="parte11">Listando registros parte 1</a>


[Voltar ao Índice](#indice)

---
## <a name="parte12">Listando registros parte 2</a>


[Voltar ao Índice](#indice)

---
## <a name="parte13">Listar último registro salvo</a>


[Voltar ao Índice](#indice)

---
## <a name="parte14">Finalizando</a>


[Voltar ao Índice](#indice)

---