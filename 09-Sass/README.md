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


[Voltar ao Índice](#indice)

---


## <a name="parte5">Trabalhando com importação</a>


[Voltar ao Índice](#indice)

---


## <a name="parte6">Variáveis</a>


[Voltar ao Índice](#indice)

---


## <a name="parte7">Funções</a>


[Voltar ao Índice](#indice)

---


## <a name="parte8">Criar funções</a>


[Voltar ao Índice](#indice)

---


## <a name="parte9">Minificar o CSS</a>


[Voltar ao Índice](#indice)

---


## <a name="parte10">Mixin</a>


[Voltar ao Índice](#indice)

---

