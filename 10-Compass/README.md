# Compass

https://www.schoolofnet.com/curso/frontend/css/compass/

---

## <a name="indice">Índice</a>

- [Falando sobre o Compass](#parte1)   
- [Instalando e configurando o Compass](#parte2)   
- [Mixin Box Shadow e Text Shadow](#parte3)   
- [Border radius](#parte4)   
- [Helpers image Url](#parte5)   
- [Sprite](#parte6)   
- [Backgound size e gradiente](#parte7)   
- [Animação](#parte8)   
- [Font](#parte9)   
- [Transição](#parte10)   
- [User interface](#parte11)   
- [Minificando](#parte12)   
- [Finalizando](#parte13)   


---

## <a name="parte1">Falando sobre o Compass</a>

- http://compass-style.org/



[Voltar ao Índice](#indice)

---


## <a name="parte2">Instalando e configurando o Compass</a>

- http://compass-style.org/install/

- http://compass-style.org/help/

```
\10-Compass>compass create projeto
directory projeto/sass/
directory projeto/stylesheets/
   create projeto/config.rb
   create projeto/sass/screen.scss
   create projeto/sass/print.scss
   create projeto/sass/ie.scss
    write projeto/stylesheets/ie.css
    write projeto/stylesheets/print.css
    write projeto/stylesheets/screen.css

*********************************************************************
Congratulations! Your compass project has been created.

You may now add and edit sass stylesheets in the sass subdirectory of your project.

Sass files beginning with an underscore are called partials and won't be
compiled to CSS, but they can be imported into other sass stylesheets.

You can configure your project by editing the config.rb configuration file.

You must compile your sass stylesheets into CSS when they change.
This can be done in one of the following ways:
  1. To compile on demand:
     compass compile [path/to/project]
  2. To monitor your project for changes and automatically recompile:
     compass watch [path/to/project]

More Resources:
  * Website: http://compass-style.org/
  * Sass: http://sass-lang.com
  * Community: http://groups.google.com/group/compass-users/


To import your new stylesheets add the following lines of HTML (or equivalent) to your webpage:
<head>
  <link href="/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <link href="/stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
  <!--[if IE]>
      <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <![endif]-->
</head>

```


```

compass watch


```


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CURSO COMPASS</title>
    <link href="css/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <link href="css/print.css" media="print" rel="stylesheet" type="text/css" />
    <!--[if IE]>
    <link href="css/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <![endif]-->

</head>
<body>
<header>
    <session>COMPASS</session>
</header>
</body>
</html>

```

[Voltar ao Índice](#indice)

---



## <a name="parte3">Mixin Box Shadow e Text Shadow</a>

```sass
/* Welcome to Compass.
 * In this file you should write your main styles. (or centralize your imports)
 * Import this file using the following HTML or equivalent:
 * <link href="/css/screen.css" media="screen, projection" rel="stylesheet" type="text/css" /> */

@import "compass/reset";
@import "compass/css3/box-shadow";
//@import "compass/css3/text-shadow";


@mixin mixin-nav-bar($backBolor, $colorText, $sizeTitle, $sizeDesc){
  width: 100%;
  height: 80px;
  padding: 10px;
  background-color: $backBolor;
  margin-bottom: 25px;
  border: 1px solid $backBolor;
  color: $colorText;
  @include box-shadow(#a39a9b 2px 2px 10px);
  h1{
    margin: 0;
    font-size: $sizeTitle;
  }
  p{
    margin: 0;
    font-size: $sizeDesc;
  }
}

.nav{
  @include mixin-nav-bar(#3866cc, #fff, 50px, 15px);
}

#main_h1{
  //@include single-text-shadow; // erro persistente... não encontrei solução!
  font-size: 50px;
  text-align: center;
  color: #000;
}
```

[Voltar ao Índice](#indice)

---



## <a name="parte4">Border radius</a>



[Voltar ao Índice](#indice)

---



## <a name="parte5">Helpers image Url</a>



[Voltar ao Índice](#indice)

---



## <a name="parte6">Sprite</a>



[Voltar ao Índice](#indice)

---



## <a name="parte7">Backgound size e gradiente</a>



[Voltar ao Índice](#indice)

---



## <a name="parte8">Animação</a>



[Voltar ao Índice](#indice)

---



## <a name="parte9">Font</a>



[Voltar ao Índice](#indice)

---



## <a name="parte10">Transição</a>



[Voltar ao Índice](#indice)

---



## <a name="parte11">User interface</a>



[Voltar ao Índice](#indice)

---
****


## <a name="parte12">Minificando</a>



[Voltar ao Índice](#indice)

---



## <a name="parte13">Finalizando</a>



[Voltar ao Índice](#indice)

---

