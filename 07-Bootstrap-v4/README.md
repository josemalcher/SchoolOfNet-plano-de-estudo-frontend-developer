# Resumo Curso Twitter Bootstrap 4

https://www.schoolofnet.com/curso-twitter-bootstrap-4/

---

## <a name="indice">Índice</a>

- [Introdução](#parte1)   
- [Opções de Download](#parte2)   
- [Grid](#parte3)   
- [Colunas automáticas](#parte4)   
- [Empurrando e puxando coluna](#parte5)   
- [a objects](#parte6)   
- [Utilitátios de responsividade](#parte7)   
- [Reboot de estilos de conteúdo](#parte8)   
- [Estilos de conteúdo](#parte9)   
- [Formulários e components](#parte10)   

---

## <a name="parte1">Introdução</a>

https://getbootstrap.com

```html
<!doctype html>
<html lang="pt-BR">
<head>
    <title>Hello, world!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css" >
</head>
<body>
<h1>Hello, world!</h1>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="js/bootstrap.min.js" ></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte2">Opções de Download</a>

https://getbootstrap.com/docs/4.0/getting-started/download/

[Voltar ao Índice](#indice)

---

## <a name="parte3">Grid</a>

https://getbootstrap.com/docs/4.0/layout/grid/

```html
<!doctype html>
<html lang="pt-BR">
<head>
    <title>Twitter Bootstrap 4</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css" >
    <style>
        .row div{
            background: #dddddd;
            border: 1px solid #aaaaaa;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-2 col-lg-4">1 de 3</div>
        <div class="col-2 col-lg-4">1 de 3</div>
        <div class="col-8 col-lg-4">1 de 3</div>
    </div>
</div>


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="js/bootstrap.min.js" ></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte4">Colunas automáticas</a>

https://getbootstrap.com/docs/4.0/layout/grid/#equal-width

```html

<div class="container">
    <div class="row">
        <div class="col">1 de 3</div>
        <div class="col-auto">1 de 3 Ajusta ao conteudo</div>
        <div class="col">1 de 3</div>
    </div>
    <br>
    <div class="row">
        <div class="col">1 de 3</div>
        <div class="w-100">w-100</div>
        <div class="col">1 de 3</div>
    </div>
</div>


```

[Voltar ao Índice](#indice)

---

## <a name="parte5">Empurrando e puxando coluna</a>

https://getbootstrap.com/docs/4.0/layout/grid/#order-classes

```html
<div class="container">
<!--    <div class="row">
        <div class="col flex-unordered">1</div>
        <div class="col flex-last">2</div>
        <div class="col flex-first">3</div>
    </div>-->
    <br>
    <div class="row">
        <div class="col order-12">1</div>
        <div class="col order-1">2</div>
        <div class="col ">3</div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-9 order-2">conteudo</div>
        <div class="col-md-3 order-1">Menu</div>
    </div>

 </div>
```

[Voltar ao Índice](#indice)

---

## <a name="parte6">Media objects</a>

https://getbootstrap.com/docs/4.0/layout/media-object/

```html

<div class="container">
    <div class="media">
        <img class="mr-3" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16089fd5350%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16089fd5350%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image">
        <div class="media-body">
            <h5 class="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
    </div>

 </div>
```

[Voltar ao Índice](#indice)

---

## <a name="parte7">Utilitátios de responsividade</a>

https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints

[Voltar ao Índice](#indice)

---

## <a name="parte8">Reboot de estilos de conteúdo</a>

https://getbootstrap.com/docs/4.0/content/reboot/



[Voltar ao Índice](#indice)

---

## <a name="parte9">Estilos de conteúdo</a>

https://getbootstrap.com/docs/4.0/content/typography/

https://getbootstrap.com/docs/4.0/content/code/

https://getbootstrap.com/docs/4.0/content/images/

https://getbootstrap.com/docs/4.0/content/tables/

https://getbootstrap.com/docs/4.0/content/figures/

[Voltar ao Índice](#indice)

---

## <a name="parte10">Formulários e components</a>

https://getbootstrap.com/docs/4.0/components/forms/

[Voltar ao Índice](#indice)

---