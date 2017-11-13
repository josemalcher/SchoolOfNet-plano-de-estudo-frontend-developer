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
```
<?php

    if($_REQUEST){
        echo json_encode(["msg"=>"Request"]);exit;
    }

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

[Voltar ao Índice](#indice)

---
## <a name="parte8">Manipulando dados</a>

```
<?php
/*
    if($_REQUEST){
        echo json_encode(["msg"=>"Request"]);exit;
    }*/

    if($_GET){
        //var_dump($_GET); exit;
        //header("HTTP/1.0 404 Not Found");exit;
        //echo "<name>{$_GET['name']}</name>";
        echo json_encode($_GET);exit;
    }
    if($_POST){
        $_POST['name'] = $_POST['name']. " DB";
        $_POST['email'] = $_POST['email']. " DB";
        $_POST['tel'] = $_POST['tel']. " DB";
        echo json_encode($_POST);exit;
    }


```

```javascript
$(function () {
    $('#AjaxRequest').submit(function () {
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        //console.log(form);
        //console.log(formArray);

        var request = $.ajax({
            method: "POST",
            url: "post.php",
            data: form,
            dataType:"json",
        });

        request.done(function (e) {
            console.log(e);
            for(var k in e){
                $(':input[name='+ k +']').val(e[k]);
            }
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

[Voltar ao Índice](#indice)

---
## <a name="parte9">Validando os dados</a>

```javascript
$(function () {
    $('#AjaxRequest').submit(function () {
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        //console.log(form);
        //console.log(formArray);

        var request = $.ajax({
            method: "POST",
            url: "post.php",
            data: form,
            dataType:"json",
        });

        request.done(function (e) {
            //console.log(e);
            $('#msg').html(e.msg);

            if(e.status){ // Caso haja erro, vai manter os dados, se OK vai limpar os campos
                $('#AjaxRequest').each(function () {
                    this.reset();
                });
            }

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
/*
    if($_REQUEST){
        echo json_encode(["msg"=>"Request"]);exit;
    }*/

    if($_GET){
        //var_dump($_GET); exit;
        //header("HTTP/1.0 404 Not Found");exit;
        //echo "<name>{$_GET['name']}</name>";
        echo json_encode($_GET);exit;
    }
    if($_POST){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];

        if($name == ""){
            echo json_encode(["status"=>false,"msg"=>"Fill in a name"]);exit;
        }

        if($email == ""){
            echo json_encode(["status"=>false,"msg"=>"Fill in a email"]);exit;
        }

        if($tel == ""){
            echo json_encode(["status"=>false,"msg"=>"Fill in a telephone"]);exit;
        }

        echo json_encode(["status"=>true,"msg"=>"Success!"]);exit;
    }


```


[Voltar ao Índice](#indice)

---
## <a name="parte10">Salvar dados no banco</a>

```
-- auto-generated definition
CREATE TABLE contacts
(
  id    INT AUTO_INCREMENT
    PRIMARY KEY,
  name  VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  tel   VARCHAR(45)  NOT NULL
);

```

```
<?php
/*
    if($_REQUEST){
        echo json_encode(["msg"=>"Request"]);exit;
    }*/

    if($_GET){
        //var_dump($_GET); exit;
        //header("HTTP/1.0 404 Not Found");exit;
        //echo "<name>{$_GET['name']}</name>";
        echo json_encode($_GET);exit;
    }
    if($_POST){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];

        if($name == ""){
            echo json_encode(["status"=>false,"msg"=>"Fill in a name"]);exit;
        }

        if($email == ""){
            echo json_encode(["status"=>false,"msg"=>"Fill in a email"]);exit;
        }

        if($tel == ""){
            echo json_encode(["status"=>false,"msg"=>"Fill in a telephone"]);exit;
        }

        $id = save($_POST);
           if($id){
               echo json_encode(["status"=>true,"msg"=>"Success! Id: {$id}"]);exit;
           }else{
               echo json_encode(["status"=>false,"msg"=>"Error Db!"]);exit;
        }
    }
    function conn(){
        $conn = new \PDO("mysql:host=localhost;dbname=ajax_jquery","root","");
        return $conn;
    }
    function save($data){
        $db = conn();
        $query ="Insert into `contacts` (`name`,`email`,`tel`) VALUES (:name,:email,:tel)";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':name',$data['name']);
        $stmt->bindValue(':email',$data['email']);
        $stmt->bindValue(':tel',$data['tel']);
        $stmt->execute();
        return $db->lastInsertId();
    }

```

[Voltar ao Índice](#indice)

---
## <a name="parte11">Listando registros parte 1</a>

```javascript

<?php
/*
    if($_REQUEST){
        echo json_encode(["msg"=>"Request"]);exit;
    }*/

    if($_GET){
        $data = listAll();
        echo json_encode($data);exit;
    }
    if($_POST){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];

        if($name == ""){
            echo json_encode(["status"=>false,"msg"=>"Fill in a name"]);exit;
        }

        if($email == ""){
            echo json_encode(["status"=>false,"msg"=>"Fill in a email"]);exit;
        }

        if($tel == ""){
            echo json_encode(["status"=>false,"msg"=>"Fill in a telephone"]);exit;
        }

        $id = save($_POST);
           if($id){
               echo json_encode(["status"=>true,"msg"=>"Success! Id: {$id}"]);exit;
           }else{
               echo json_encode(["status"=>false,"msg"=>"Error Db!"]);exit;
        }
    }
    function conn(){
        $conn = new \PDO("mysql:host=localhost;dbname=ajax_jquery","root","");
        return $conn;
    }
    function save($data){
        $db = conn();
        $query ="Insert into `contacts` (`name`,`email`,`tel`) VALUES (:name,:email,:tel)";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':name',$data['name']);
        $stmt->bindValue(':email',$data['email']);
        $stmt->bindValue(':tel',$data['tel']);
        $stmt->execute();
        return $db->lastInsertId();
    }

    function listAll(){
        $db = conn();
        $query ="Select * from `contacts`";
        $stmt = $db->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll();
    }

```

```javascript
$(function () {

    var requestList = $.ajax({
        method:"GET",
        url:"post.php",
        data:{listAll:"list"},
        dataType:"json"
    });

    requestList.done(function(e){
        console.log(e);
    });


    $('#AjaxRequest').submit(function () {
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        //console.log(form);
        //console.log(formArray);

        var request = $.ajax({
            method: "POST",
            url: "post.php",
            data: form,
            dataType:"json",
        });

        request.done(function (e) {
            //console.log(e);
            $('#msg').html(e.msg);

            if(e.status){ // Caso haja erro, vai manter os dados, se OK vai limpar os campos
                $('#AjaxRequest').each(function () {
                    this.reset();
                });
            }

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

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Ajax request with jQuery</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body>
<main>
    <section class="container">
        <h1>Ajax request with jQuery</h1>
        <span id="msg"></span>
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
        <div class="row">
            <table id="contacts" class="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Telephone</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

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