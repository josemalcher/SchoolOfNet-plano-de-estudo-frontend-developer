# Javascript Avançado

Resumo do curso:

https://www.schoolofnet.com/curso-javascript-avancado/

---

## Índice

- [Configurando a aplicação](#parte1)
- [Definindo a lógica da aplicação](#parte2)
- [Listando dados](#parte3)
- [Formatando strings e valores](#parte4)    
- [Adicionando novos registros ](#parte5)    
- [Preparando para atualizar registros](#parte6)    
- [Atualizando dados ](#parte7)
- [Deletando dados](#parte8)    
- [Validando formulário](#parte9)    
- [Configurando o Gettotal](#parte10)    
- [Deletando lista](#parte11)    
- [Salvando registros no local storage](#parte12)    
- [Resumo](#parte13)    
   

---

## <a name="parte1">Configurando a aplicação</a>

Repo: https://github.com/schoolofnetcom/javascript-avancando

https://getbootstrap.com/docs/3.3/customize/?id=33f9361d492a75a116485f9e6020dc3a

 
[Voltar ao Índice](#indice)

---

## <a name="parte2">Definindo a lógica da aplicação</a>

```javascript
var list = [
    {"desc": "rice", "amount":"1", "value":"5.40"},
    {"desc": "beer", "amount":"12", "value":"1.99"},
    {"desc": "meat", "amount":"2", "value":"15.00"}
];

function getTotal(list) {
    var total = 0;
    for(var key in list){
        total += list[key].value * list[key].amount;
    }
    retun total;
}
console.log(getTotal(list));
```

[Voltar ao Índice](#indice)

---
## <a name="parte3">Listando dados</a>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>AULA 01 - Base dos Estudos</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a id="navTitle" class="navbar-brand" href="index.html"></a>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <table id="listTable" class="table">

    </table>
</div>

<script src="js/config.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for(var key in list){
        table += '<tr><td>'+ list[key].desc +'</td><td>'+ list[key].amount +'</td><td>'+ list[key].value +'</td><td>Edit | Delete</td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

setList(list);
console.log(getTotal(list))
```


[Voltar ao Índice](#indice)

---
## <a name="parte4">Formatando strings e valores</a>

```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for(var key in list){
        table += '<tr><td>'+ formatDescr(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td>Edit | Delete</td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function formatDescr(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}
function formatValue(value) {
    var str = parseFloat(value).toFixed(2)+ "";
    str = str.replace(".",",");
    str = "$ " + str;
    return str;
}

setList(list);
console.log(getTotal(list))
```

[Voltar ao Índice](#indice)

---
## <a name="parte5">Adicionando novos registros</a>
```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for(var key in list){
        table += '<tr><td>'+ formatDescr(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td>Edit | Delete</td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function formatDescr(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}
function formatValue(value) {
    var str = parseFloat(value).toFixed(2)+ "";
    str = str.replace(".",",");
    str = "$ " + str;
    return str;
}

function addData() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc":desc, "amount":amount,"value":value});
    setList(list);
}

setList(list);
console.log(getTotal(list))
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>AULA 01 - Base dos Estudos</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a id="navTitle" class="navbar-brand" href="index.html"></a>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" id="desc" placeholder="Description">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="amount" placeholder="Amount">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="value" placeholder="Value">
        </div>
        <button onclick="addData();" class="btn btn-default">Add</button>
    </div>
    <table id="listTable" class="table">

    </table>
</div>

<script src="js/config.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---
## <a name="parte6">Preparando para atualizar registros</a>

```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for(var key in list){
        table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td><button class="btn btn-default" onclick="setUpdate('+key+');" >Edit</button> Delete</td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}
function formatValue(value) {
    var str = parseFloat(value).toFixed(2)+ "";
    str = str.replace(".",",");
    str = "$ " + str;
    return str;
}

function addData() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc":desc, "amount":amount,"value":value});
    setList(list);
}

function setUpdate(id){
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
}

function resetForm(){
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
}

setList(list);
console.log(getTotal(list))
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>AULA 01 - Base dos Estudos</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a id="navTitle" class="navbar-brand" href="index.html"></a>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" id="desc" placeholder="Description">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="amount" placeholder="Amount">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="value" placeholder="Value">
        </div>
        <span id="btnUpdate" style="display: none;">
                <button onclick="updateData();" class="btn btn-default">Save</button>
                <button onclick="resetForm();" class="btn btn-default">Cancel</button>
        </span>
        <button id="btnAdd" onclick="addData();" class="btn btn-default">Add</button>
    </div>
    <table id="listTable" class="table">

    </table>
</div>

<script src="js/config.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```
[Voltar ao Índice](#indice)

---
## <a name="parte7">Atualizando dados</a>

```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list) {
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for (var key in list) {
        table += '<tr><td>' + formatDesc(list[key].desc) + '</td><td>' + list[key].amount + '</td><td>' + formatValue(list[key].value) + '</td><td><button class="btn btn-default" onclick="setUpdate(' + key + ');" >Edit</button> Delete</td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".", ",");
    str = "$ " + str;
    return str;
}

function addData() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc": desc, "amount": amount, "value": value});
    setList(list);
}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="' + id + '">';
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIDUpdate").innerHTML = "";
}

function updateData() {
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {"desc": desc, "amount": amount, "value": value};
    resetForm();
    setList(list);
}

setList(list);
console.log(getTotal(list))
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>AULA 01 - Base dos Estudos</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a id="navTitle" class="navbar-brand" href="index.html"></a>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" id="desc" placeholder="Description">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="amount" placeholder="Amount">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="value" placeholder="Value">
        </div>
        <span id="btnUpdate" style="display: none;">
            <span id="inputIDUpdate"></span>
            <button onclick="updateData();" class="btn btn-default">Save</button>
            <button onclick="resetForm();" class="btn btn-default">Cancel</button>
        </span>
        <button id="btnAdd" onclick="addData();" class="btn btn-default">Add</button>
    </div>
    <table id="listTable" class="table">

    </table>
</div>

<script src="js/config.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---
## <a name="parte8">Deletando dados</a>

```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list) {
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for (var key in list) {
        table += '<tr><td>' + formatDesc(list[key].desc) + '</td><td>' + list[key].amount + '</td><td>' + formatValue(list[key].value) + '</td><td><button class="btn btn-default" onclick="setUpdate(' + key + ');" >Edit</button>  <button class="btn btn-default" onclick="deleteData(\' + key + \');" >Delet</button></td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".", ",");
    str = "$ " + str;
    return str;
}

function addData() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc": desc, "amount": amount, "value": value});
    setList(list);
}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="' + id + '">';
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIDUpdate").innerHTML = "";
}

function updateData() {
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {"desc": desc, "amount": amount, "value": value};
    resetForm();
    setList(list);
}

function deleteData(id) {
    if(confirm("Delete this item")){
        list.pop();
    }else if(id == 0){
        list.shift();
    }else{
        var arrAuxIni = list.slice(0, id);
        var arrAuxEnd = list.slice(id + 1);
        list = arrAuxIni.concat(arrAuxEnd);
    }
    setList(list);
}

setList(list);
console.log(getTotal(list))
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>AULA 01 - Base dos Estudos</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a id="navTitle" class="navbar-brand" href="index.html"></a>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" id="desc" placeholder="Description">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="amount" placeholder="Amount">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="value" placeholder="Value">
        </div>
        <span id="btnUpdate" style="display: none;">
            <span id="inputIDUpdate"></span>
            <button onclick="updateData();" class="btn btn-default">Save</button>
            <button onclick="resetForm();" class="btn btn-default">Cancel</button>
        </span>
        <button id="btnAdd" onclick="addData();" class="btn btn-default">Add</button>
    </div>
    <table id="listTable" class="table">

    </table>
</div>

<script src="js/config.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---
## <a name="parte9">Validando formulário</a>

```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list) {
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for (var key in list) {
        table += '<tr><td>' + formatDesc(list[key].desc) + '</td><td>' + formatAmount(list[key].amount) + '</td><td>' + formatValue(list[key].value) + '</td><td><button class="btn btn-default" onclick="setUpdate(' + key + ');" >Edit</button>  <button class="btn btn-default" onclick="deleteData(\' + key + \');" >Delet</button></td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatAmount(amount) {
    return parseInt(amount);
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".", ",");
    str = "$ " + str;
    return str;
}

function addData() {
    if (!validation()) {
        return;
    }
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc": desc, "amount": amount, "value": value});
    setList(list);
}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="' + id + '">';
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIDUpdate").innerHTML = "";
    document.getElementById("errors").style.display = "none";
}

function updateData() {
    if (!validation()) {
        return;
    }
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {"desc": desc, "amount": amount, "value": value};
    resetForm();
    setList(list);
}

function deleteData(id) {
    if (confirm("Delete this item")) {
        list.pop();
    } else if (id == 0) {
        list.shift();
    } else {
        var arrAuxIni = list.slice(0, id);
        var arrAuxEnd = list.slice(id + 1);
        list = arrAuxIni.concat(arrAuxEnd);
    }
    setList(list);
}

function validation() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    var errors = "";
    document.getElementById("errors").style.display = "none";
    if (desc === "") {
        errors += '<p>Fill out Description!</p>';
    }
    if (amount === "") {
        errors += '<p>Fill out a quantity</p>';
    } else if (amount != parseInt(amount)) {
        errors += '<p>Fill out valid amount!</p>';
    }
    if (value === "") {
        errors += '<p>Fill out a Value</p>';
    } else if (value != parseFloat(value)) {
        errors += '<p>Fill out a valid Value</p>';
    }
    if (errors != "") {

        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").style.backgroundColor = "red";
        document.getElementById("errors").style.color = "white";
        document.getElementById("errors").style.padding = "10px";
        document.getElementById("errors").style.margin = "10p";
        document.getElementById("errors").style.borderRadius = "13px";


        document.getElementById("errors").innerHTML = "<h3>Error: </h3>" + errors;
        return 0;
    } else {
        return 1;
    }

}

setList(list);
console.log(getTotal(list))
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>AULA 01 - Base dos Estudos</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a id="navTitle" class="navbar-brand" href="index.html"></a>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" id="desc" placeholder="Description">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="amount" placeholder="Amount">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="value" placeholder="Value">
        </div>
        <span id="btnUpdate" style="display: none;">
            <span id="inputIDUpdate"></span>
            <button onclick="updateData();" class="btn btn-default">Save</button>
            <button onclick="resetForm();" class="btn btn-default">Cancel</button>
        </span>
        <button id="btnAdd" onclick="addData();" class="btn btn-default">Add</button>
    </div>
    <div id="errors" style="display: none;"></div>
    <table id="listTable" class="table">

    </table>
</div>

<script src="js/config.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---
## <a name="parte10">Configurando o GetTotal</a>

```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    document.getElementById("totalValue").innerHTML = formatValue(total);
}

function setList(list) {
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for (var key in list) {
        table += '<tr><td>' + formatDesc(list[key].desc) + '</td><td>' + formatAmount(list[key].amount) + '</td><td>' + formatValue(list[key].value) + '</td><td><button class="btn btn-default" onclick="setUpdate(' + key + ');" >Edit</button>  <button class="btn btn-default" onclick="deleteData(\' + key + \');" >Delet</button></td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;

    getTotal(list);
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatAmount(amount) {
    return parseInt(amount);
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".", ",");
    str = "$ " + str;
    return str;
}

function addData() {
    if (!validation()) {
        return;
    }
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc": desc, "amount": amount, "value": value});
    setList(list);
}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="' + id + '">';
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIDUpdate").innerHTML = "";
    document.getElementById("errors").style.display = "none";
}

function updateData() {
    if (!validation()) {
        return;
    }
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {"desc": desc, "amount": amount, "value": value};
    resetForm();
    setList(list);
}

function deleteData(id) {
    if (confirm("Delete this item")) {
        list.pop();
    } else if (id == 0) {
        list.shift();
    } else {
        var arrAuxIni = list.slice(0, id);
        var arrAuxEnd = list.slice(id + 1);
        list = arrAuxIni.concat(arrAuxEnd);
    }
    setList(list);
}

function validation() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    var errors = "";
    document.getElementById("errors").style.display = "none";
    if (desc === "") {
        errors += '<p>Fill out Description!</p>';
    }
    if (amount === "") {
        errors += '<p>Fill out a quantity</p>';
    } else if (amount != parseInt(amount)) {
        errors += '<p>Fill out valid amount!</p>';
    }
    if (value === "") {
        errors += '<p>Fill out a Value</p>';
    } else if (value != parseFloat(value)) {
        errors += '<p>Fill out a valid Value</p>';
    }
    if (errors != "") {

        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").style.backgroundColor = "red";
        document.getElementById("errors").style.color = "white";
        document.getElementById("errors").style.padding = "10px";
        document.getElementById("errors").style.margin = "10p";
        document.getElementById("errors").style.borderRadius = "13px";


        document.getElementById("errors").innerHTML = "<h3>Error: </h3>" + errors;
        return 0;
    } else {
        return 1;
    }

}

setList(list);
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>AULA 01 - Base dos Estudos</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a id="navTitle" class="navbar-brand" href="index.html"></a>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" id="desc" placeholder="Description">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="amount" placeholder="Amount">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="value" placeholder="Value">
        </div>
        <span id="btnUpdate" style="display: none;">
            <span id="inputIDUpdate"></span>
            <button onclick="updateData();" class="btn btn-default">Save</button>
            <button onclick="resetForm();" class="btn btn-default">Cancel</button>
        </span>
        <button id="btnAdd" onclick="addData();" class="btn btn-default">Add</button>
    </div>
    <div id="errors" style="display: none;"></div>
    <table id="listTable" class="table">

    </table>
</div>

<nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
        <h4 class="text-center text-success" >Total: <span id="totalValue">$ 0,00</span></h4>
    </div>
</nav>

<script src="js/config.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---
## <a name="parte11">Deletando lista</a>

```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    document.getElementById("totalValue").innerHTML = formatValue(total);
}

function setList(list) {
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for (var key in list) {
        table += '<tr><td>' + formatDesc(list[key].desc) + '</td><td>' + formatAmount(list[key].amount) + '</td><td>' + formatValue(list[key].value) + '</td><td><button class="btn btn-default" onclick="setUpdate(' + key + ');" >Edit</button>  <button class="btn btn-default" onclick="deleteData(\' + key + \');" >Delet</button></td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;

    getTotal(list);
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatAmount(amount) {
    return parseInt(amount);
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".", ",");
    str = "$ " + str;
    return str;
}

function addData() {
    if (!validation()) {
        return;
    }
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc": desc, "amount": amount, "value": value});
    setList(list);
}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="' + id + '">';
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIDUpdate").innerHTML = "";
    document.getElementById("errors").style.display = "none";
}

function updateData() {
    if (!validation()) {
        return;
    }
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {"desc": desc, "amount": amount, "value": value};
    resetForm();
    setList(list);
}

function deleteData(id) {
    if (confirm("Delete this item")) {
        list.pop();
    } else if (id == 0) {
        list.shift();
    } else {
        var arrAuxIni = list.slice(0, id);
        var arrAuxEnd = list.slice(id + 1);
        list = arrAuxIni.concat(arrAuxEnd);
    }
    setList(list);
}

function validation() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    var errors = "";
    document.getElementById("errors").style.display = "none";
    if (desc === "") {
        errors += '<p>Fill out Description!</p>';
    }
    if (amount === "") {
        errors += '<p>Fill out a quantity</p>';
    } else if (amount != parseInt(amount)) {
        errors += '<p>Fill out valid amount!</p>';
    }
    if (value === "") {
        errors += '<p>Fill out a Value</p>';
    } else if (value != parseFloat(value)) {
        errors += '<p>Fill out a valid Value</p>';
    }
    if (errors != "") {

        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").style.backgroundColor = "red";
        document.getElementById("errors").style.color = "white";
        document.getElementById("errors").style.padding = "10px";
        document.getElementById("errors").style.margin = "10p";
        document.getElementById("errors").style.borderRadius = "13px";


        document.getElementById("errors").innerHTML = "<h3>Error: </h3>" + errors;
        return 0;
    } else {
        return 1;
    }

}

function deleteList() {
    if(confirm("Delete List??")){
        list = [];
        setList(list);
    }
}

setList(list);
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>AULA 01 - Base dos Estudos</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a id="navTitle" class="navbar-brand" href="index.html"></a>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" id="desc" placeholder="Description">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="amount" placeholder="Amount">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="value" placeholder="Value">
        </div>
        <span id="btnUpdate" style="display: none;">
            <span id="inputIDUpdate"></span>
            <button onclick="updateData();" class="btn btn-default">Save</button>
            <button onclick="resetForm();" class="btn btn-default">Cancel</button>
        </span>
        <span id="btnAdd">
            <button onclick="addData();" class="btn btn-default">Add</button>
            <button onclick="resetForm();" class="btn btn-default">Reset </button>
            <button onclick="deleteList();" class="btn btn-default">Delte List</button>
        </span>
    </div>
    <div id="errors" style="display: none;"></div>
    <table id="listTable" class="table">

    </table>
</div>

<nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
        <h4 class="text-center text-success">Total: <span id="totalValue">$ 0,00</span></h4>
    </div>
</nav>

<script src="js/config.js"></script>
<script src="js/main.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---
## <a name="parte12">Salvando registros no local storage</a>

```javascript
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "2", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    document.getElementById("totalValue").innerHTML = formatValue(total);
}

function setList(list) {
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for (var key in list) {
        table += '<tr><td>' + formatDesc(list[key].desc) + '</td><td>' + formatAmount(list[key].amount) + '</td><td>' + formatValue(list[key].value) + '</td><td><button class="btn btn-default" onclick="setUpdate(' + key + ');" >Edit</button>  <button class="btn btn-default" onclick="deleteData(\' + key + \');" >Delet</button></td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;

    getTotal(list);
    saveListStorage(list);  // <<<<<<----------
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatAmount(amount) {
    return parseInt(amount);
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".", ",");
    str = "$ " + str;
    return str;
}

function addData() {
    if (!validation()) {
        return;
    }
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc": desc, "amount": amount, "value": value});
    setList(list);
}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="' + id + '">';
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIDUpdate").innerHTML = "";
    document.getElementById("errors").style.display = "none";
}

function updateData() {
    if (!validation()) {
        return;
    }
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {"desc": desc, "amount": amount, "value": value};
    resetForm();
    setList(list);
}

function deleteData(id) {
    if (confirm("Delete this item")) {
        list.pop();
    } else if (id == 0) {
        list.shift();
    } else {
        var arrAuxIni = list.slice(0, id);
        var arrAuxEnd = list.slice(id + 1);
        list = arrAuxIni.concat(arrAuxEnd);
    }
    setList(list);
}

function validation() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    var errors = "";
    document.getElementById("errors").style.display = "none";
    if (desc === "") {
        errors += '<p>Fill out Description!</p>';
    }
    if (amount === "") {
        errors += '<p>Fill out a quantity</p>';
    } else if (amount != parseInt(amount)) {
        errors += '<p>Fill out valid amount!</p>';
    }
    if (value === "") {
        errors += '<p>Fill out a Value</p>';
    } else if (value != parseFloat(value)) {
        errors += '<p>Fill out a valid Value</p>';
    }
    if (errors != "") {

        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").style.backgroundColor = "red";
        document.getElementById("errors").style.color = "white";
        document.getElementById("errors").style.padding = "10px";
        document.getElementById("errors").style.margin = "10p";
        document.getElementById("errors").style.borderRadius = "13px";


        document.getElementById("errors").innerHTML = "<h3>Error: </h3>" + errors;
        return 0;
    } else {
        return 1;
    }

}

function deleteList() {
    if(confirm("Delete List??")){
        list = [];
        setList(list);
    }
}

function saveListStorage(list) {  // <<<<<<----------
    var jsonStr = JSON.stringify(list);
    localStorage.setItem("list",jsonStr);
}

function initListStorage() {  // <<<<<<----------
    var testList = localStorage.getItem("list");
    if(testList){
        list = JSON.parse(testList);
    }
    setList(list);
}

initListStorage();   // <<<<<<----------
```

[Voltar ao Índice](#indice)

---
## <a name="parte13">Resumo</a>


[Voltar ao Índice](#indice)

---