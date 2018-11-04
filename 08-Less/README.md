# Less

https://www.schoolofnet.com/curso-less/

---

## <a name="indice">Índice</a>

- [Instalação e primeiros testes](#parte1)   
- [Comprimindo CSS e alinhamento no Less](#parte2)   
- [Variáveis](#parte3)   
- [Mixins](#parte4)   
- [Funções e Operações](#parte5)   
- [Trabalhando com Guards](#parte6)   
- [Namespace](#parte7)   
- [Organizando com importação](#parte8)   
- [Finalizando e compilando o CSS](#parte9)   


---

## <a name="parte1">Instalação e primeiros testes </a>

http://lesscss.org/

add patch(windows):

C:\Users\Me\AppData\Roaming\npm

- https://stackoverflow.com/a/21346115/3587379

```
$ npm install less -g

$ lessc
```
### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Course Less</title>
    <link rel="stylesheet/less" type="text/css" href="css/style.less">
    <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>
</head>
<body>
<header>
    <nav>
        <h1>Course Less</h1>
    </nav>
</header>

</body>
</html>
```

### style.less
```less
h1{
  font-size: 40px;
  p{
    color: blue;
  }
}
```

```
$ lessc style.less

$ lessc style.less > style.css
```

[Voltar ao Índice](#indice)

---

## <a name="parte2">Comprimindo CSS e alinhamento no Less</a>

Criar arquivo minificado:

```
lessc --clean-css style.less > style.min.css

The compress option has been deprecated. We recommend you use a dedicated css minifier, for instance see less-plugin-clean-css.
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Course Less</title>
    <link rel="stylesheet/less" type="text/css" href="css/style.less" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.7.1/less.min.js" ></script>
</head>
<body>
<header>
    <nav class="title-nav">
        <h1>Course Less</h1>
        <p>Description</p>
    </nav>
</header>

</body>
</html>
```

```less
.title-nav{
  font-size: 30px;
  h1{
    color: #ff2718;
  }
  p{
    font-size: 16px;
  }
}
```


[Voltar ao Índice](#indice)

---

## <a name="parte3">Variáveis</a>

```less
@font_size_header: 20px;
@color_text_header: #ff2718;
@font_size_desc_header: 14px;

.title-nav{
  font-size: @font_size_header;
  h1{
    color: @color_text_header;
  }
  p{
    font-size: @font_size_desc_header;
  }
}
```

[Voltar ao Índice](#indice)

---

## <a name="parte4">Mixins</a>

```less

.nav-bar(@color_back:#4d3aff,@color_text:#fff,@size_title:30px,@size_desc:12px){
  width: 100%;
  height: 80px;
  background-color: @color_back;
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid @color_back;
  color: @color_text;
  h1{
    position: relative;
    margin-top: 14px;
    margin-left: 20px;
    margin-bottom: 0;
    font-size: @size_title;
  }
  p{
    position: relative;
    margin-top: 0;
    margin-left: 30px;
    font-size: @size_desc;
  }
}

.nav1{
  .nav-bar(#3437ff, #f3f3ff,30px,15px);
}
.nav2{
  .nav-bar(#cb3bff, #fbffb4,40px,16px);
}
```

[Voltar ao Índice](#indice)

---

## <a name="parte5">Funções e Operações</a>


[Voltar ao Índice](#indice)

---

## <a name="parte6">Trabalhando com Guards </a>


[Voltar ao Índice](#indice)

---

## <a name="parte7">Namespace</a>


[Voltar ao Índice](#indice)

---

## <a name="parte8">Organizando com importação</a>


[Voltar ao Índice](#indice)

---

## <a name="parte9">Finalizando e compilando o CSS</a>


[Voltar ao Índice](#indice)

---