# Sass

https://www.schoolofnet.com/curso/frontend/css/sass/

---

## <a name="indice">Índice</a>

- [Introdução e instalação](#parte1)   
- [Compilando com Watch](#parte2)   
- [Entendendo o Nesting](#parte3)   
- [Herança](#parte4)   
- [Trabalhando com importação](#parte5)   
- [Variáveis](#parte6)   
- [Funções](#parte7)   
- [Criar funções](#parte8)   
- [Minificar o CSS](#parte9)   
- [Mixin](#parte10)   


---

## <a name="parte1">Introdução e instalação</a>

- https://sass-lang.com/install

"npm install -g sass"

[Voltar ao Índice](#indice)

---


## <a name="parte2">Compilando com Watch</a>

```
// arquivo específico
sass --watch teste.scss:teste.css

// para todos os arquivos
sass --watch . 
```




[Voltar ao Índice](#indice)

---


## <a name="parte3">Entendendo o Nesting</a>

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style.css">
    <title>Title Page</title>
</head>
<body>

<header>
    <h1>Title Page</h1>
    <p>Description page</p>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>
</header>

</body>
</html>

```

```sass
header{
  padding: 20px;
  h1{
    color: #00029a;
  }
  p{
    font-size: 18px;
    color: #2e6da4;
  }
  ul{
    display: block;
    line-height: 1.4;
    li{
      margin: 5px;
      display: inline;
      a{
        text-decoration: none;
        &:hover{
          color: red;
        }
      }
    }
  }
}
```

[Voltar ao Índice](#indice)

---


## <a name="parte4">Herança</a>

```html
<main>
    <section>
        <h1>Buttons</h1>
        <p><button class="btn-default">default</button></p>
        <p><button class="btn-blue">blue</button></p>
        <p><button class="btn-red">RED</button></p>
    </section>
</main>
```

```sass
.btn-default{
  padding: 10px 16px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #000;
  background-color: #fff;
  &:hover{
    opacity: 0.5;
  }
}
.btn-blue{
  @extend .btn-default;
  border: 1px solid #4c94cc;
  color: #fff;
  background-color: #2828ff;

}
.btn-red{
  @extend .btn-default;
  border: 1px solid #cc5a62;
  color: #fff;
  background-color: #ff1627;
}
```

[Voltar ao Índice](#indice)

---


## <a name="parte5">Trabalhando com importação</a>

- 09-Sass/projeto_aula/css/style.scss
```sass
@import "import/main";
@import "import/buttons";
```

[Voltar ao Índice](#indice)

---


## <a name="parte6">Variáveis</a>

```sass
/* buttons main */

$btn_color_default: #fff;
//$btn_color_blue: #2828ff;
$btn_color_red: #ff050c;

.btn-default{
  padding: 10px 16px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #000;
  background-color: $btn_color_default;
  &:hover{
    opacity: 0.5;
  }
}
.btn-blue{
  @extend .btn-default;
  border: 1px solid #4c94cc;
  color: #fff;
  $btn_color_blue: blue !default;
  background-color: $btn_color_blue;

}
.btn-red{
  @extend .btn-default;
  border: 1px solid #cc5a62;
  color: #fff;
  background-color: $btn_color_red;
}
```

[Voltar ao Índice](#indice)

---


## <a name="parte7">Funções</a>

- https://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions

```sass

.btn-default{
  padding: 10px 16px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ccc;

  border-radius: percentage(0.1);

  color: #000;
  background-color: $btn_color_default;
  &:hover{
    //opacity: 0.5;
    background-color: darken(gray, 0.5);
  }
}

```

[Voltar ao Índice](#indice)

---


## <a name="parte8">Criar funções</a>

```sass
/* funções */
@function btn_Color($cor){
  @return darken($cor, 5%);
}

```

```sass
&:hover{
    //opacity: 0.5;
    background-color: btn_Color(gray);
  }
```

[Voltar ao Índice](#indice)

---


## <a name="parte9">Minificar o CSS</a>

\css> sass --watch style.scss:style.min.css --style compressed


[Voltar ao Índice](#indice)

---


## <a name="parte10">Mixin</a>

```sass
/* buttons main */

$btn_color_default: #fff;
$btn_color_blue: #2828ff;
$btn_color_red: #ff050c;

/* funções */
@function btn_Color($cor){
  @return darken($cor, 5%);
}

@mixin newButton($color){
  padding: 10px 16px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ccc;

  border-radius: percentage(0.1);

  color: #000;
  background-color: $color;
  &:hover{
    opacity: 0.5;
    //background-color: btn_Color(gray);
  }
}

.btn-default{
  @include newButton($btn_color_default);
}
.btn-blue{
  @include newButton($btn_color_blue);
}
.btn-red{
  @extend .btn-default;
  border: 1px solid #cc5a62;
  color: #fff;
  background-color: $btn_color_red;
}

```

[Voltar ao Índice](#indice)

---

