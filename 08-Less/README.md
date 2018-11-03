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


[Voltar ao Índice](#indice)

---

## <a name="parte4">Mixins</a>


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