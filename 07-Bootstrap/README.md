# Resumo Bootstrap

https://www.schoolofnet.com/curso-bootstrap/

---

## <a name="indice">Índice</a>

- [Instalando o bootstrap ](#parte1)
- [Criar um menu de navegação](#parte2)
- [Sistema de grid ](#parte3)
- [Formulários](#parte4)
- [Trabalhando com botões ](#parte5)
- [Imagens](#parte6)
- [Icones](#parte7)
- [Dropdown](#parte8)
- [Paginação](#parte9)
- [Trabalhando com miniaturas](#parte10)
- [Painel](#parte11)
- [Listas](#parte12)
- [Media](#parte13)
- [Alert](#parte14)
- [Tabs](#parte15)
- [Modal](#parte16)
- [Popover](#parte17)
- [Customizando](#parte18)


---

## <a name="parte1">Instalando o bootstrap</a>

Sejam bem-vindos ao curso de Bootstrap da School of Net.

Vamos praticar muito, conhecer e entrar de cabeça neste mundo do framework Bootstrap. Ele é muito útil e muito utilizado por programadores do mundo inteiro, para agilizar a parte visual dos sistemas, aplicações e até websites.

Chegando ao final deste conteúdo vocês estarão aptos a trabalharem com um framework CSS chamado Bootstrap, facilitando assim, a criação da parte visual dos seus trabalhos web. Vocês não terão preocupação com a parte de estilos, porque o Bootstrap fará quase tudo por vocês.

### Iniciando com Bootstrap

Acessaremos o site

http://getbootstrap.com/.

Neste site podemos perceber que o Bootstrap veio para facilitar o desenvolvimento front-end. Ele torna o desenvolvimento mais rápido e fácil e também foi desenvolvido para pessoas de todos os níveis. O Bootstrap foi criado para adaptar-se a todos os dispositivos.

O Bootstrap rodará nos principais processadores de CSS como: Sass e Less . Além disso, existem muito recursos e plugins Jquery para utilizarem, facilmente.

Resumindo, podemos dizer que a vida do front-end fica muito mais fácil quando utilizamos o Bootstrap. Ele terá disponível, e pré configurado, toda parte de formulários, slides, menus, mensagens de alerta e muitos outros recursos.

Vocês podem encontrar no site, a documentação completa ou acessar pelo Github. Existem alguns templates prontos que utilizam o Bootstrap, vocês podem baixar e utilizar como início de projeto ou material de estudo.

### Instalação

Iniciaremos fazendo o download do Bootstrap no site. Na parte de download há três opções de download e mais uma quarta opção utilizando o CDN, para utilizar de forma online.

![bootstrap_download](https://github.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/blob/master/07-Bootstrap/img-git/bootstrap_download.png?raw=true)

Para dar continuidade, iremos baixar os arquivos da primeira opção de download, que foi sinalizada na imagem acima.

Depois de baixado e descompactado, teremos três diretórios: css, fonts e js. Estes diretórios contêm tudo o que precisamos para utilizar o framework.

### Criando projeto

Criem um diretório que será o projeto. Depois, copiem os três diretórios do Bootstrap, que foram baixados, e cole dentro do projeto.

O Bootstrap traz duas versões do css e do javascript: normal e minificada. A versão mais indicada, para produção, é a versão reduzida ou minificada, o arquivo é conhecido de ambas as formas. Algumas pessoas utilizam a versão normal para desenvolvimento e sobe a versão minificada para produção. A versão normal é mais simples e visual logo, é mais fácil entender o que está acontecendo com a aplicação ao analisar o código. Por este motivo alguns desenvolvedores utilizam esta versão durante o desenvolvimento.

Existem alguns arquivos de template que vêm na pasta de CSS, mas nós não iremos utilizá-los porque usaremos um padrão pronto do próprio Bootstrap, que é disponibilizado no site.

Então, ciente da estrutura, daremos início ao conteúdo.

### Basic Template

No site do Bootstrap encontramos um template básico para implementação do framework. Basta pesquisar por Basic Template ou acessar o link

http://getbootstrap.com/getting-started/#template.

Criaremos um arquivo chamado index.html, na raiz do projeto, e colaremos o conteúdo deste template básico do Bootstrap.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

Entre as implementações do código HTML acima, um fator importante que o Bootstrap configura é a escala padrão, para que todos os dispositivos possam reconhecê-la.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Esta linha é responsável por criar uma escala padrão, dessa forma poderemos acessar de um tablet ou um celular, que a aplicação se adaptará ao tamanho do dispositivo, automaticamente. Se não colocarem esta configuração no HTML, vocês terão problemas com alguns dispositivos.

Podemos tornar a aplicação nativa e desabilitar o recurso de zoom do aparelho, basta utilizar a meta tag abaixo em vez do exemplo acima. O fator que é responsável por desabilitar o zoom para o usuário é:

```html

user-scalable=no.

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

Estas informações encontram-se na parte de CSS da documentação, caso queiram ler mais sobre o assunto.

Concluído o assunto sobre a configuração de escala na meta tag, vamos falar sobre a chamada do css e do javascript no template básico. Notem que ele já chama os arquivos minificados.
```html
<link href="css/bootstrap.min.css" rel="stylesheet">

<script src="js/bootstrap.min.js"></script>
```

O template básico utiliza a biblioteca jquery de forma online, mas podemos fazer o download da biblioteca e a inclusão, de forma local, caso queiram. Vejam a inclusão online:

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

Acessem o navegador para visualizar o projeto. A aplicação já está rodando com o Bootstrap devidamente configurado e funcionando. O processo é bem simples, basta baixarem os arquivos, inserirem na aplicação e chamar o template básico. Se a aplicação utilizar outra estrutura de pastas, vocês deverão adequar a chamada dos arquivos css e javascript. Se estiverem usando a mesma estrutura, na pasta raiz, a implementação é idêntica a que o site sugere.

![bootstrap_running](https://github.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/blob/master/07-Bootstrap/img-git/bootstrap_running.png?raw=true)

Na imagem acima podemos observar que a aplicação já está rodando, porque a fonte está estilizada e vem do Bootstrap.

No próximo conteúdo criaremos um menu ou navbar, como é conhecido também, utilizando o Bootstrap, dando continuidade ao assunto e nos aprofundando um pouco mais.

O nosso objetivo, além de ensinar a utilizar o bootstrap, é ensinar pesquisar na documentação, que é muito boa. Aprendendo a pesquisar na documentação não terão problema algum para construir uma aplicação utilizando o Bootstrap.

--- 

### v.4.0

https://getbootstrap.com/docs/4.0/getting-started/introduction/

```html
<!doctype html>
<html lang="pt-BR">
<head>
    <title>Hello, world!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
</head>
<body>
<h1>Hello, world! v4 </h1>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---
## <a name="parte2">Criar um menu de navegação</a>

[Voltar ao Índice](#indice)

---
## <a name="parte3">Sistema de grid</a>

[Voltar ao Índice](#indice)

---
## <a name="parte4">Formulários</a>

[Voltar ao Índice](#indice)

---
## <a name="parte5">Trabalhando com botões </a>

[Voltar ao Índice](#indice)

---
## <a name="parte6">Imagens</a>

[Voltar ao Índice](#indice)

---
## <a name="parte7">Icones</a>

[Voltar ao Índice](#indice)

---
## <a name="parte8">Dropdown</a>

[Voltar ao Índice](#indice)

---
## <a name="parte9">Paginação</a>

[Voltar ao Índice](#indice)

---
## <a name="parte10">Trabalhando com miniaturas </a>

[Voltar ao Índice](#indice)

---
## <a name="parte11">Painel</a>

[Voltar ao Índice](#indice)

---
## <a name="parte12">Listas</a>

[Voltar ao Índice](#indice)

---
## <a name="parte13">Media</a>

[Voltar ao Índice](#indice)

---
## <a name="parte14">Alert</a>

[Voltar ao Índice](#indice)

---
## <a name="parte15">Tabs</a>

[Voltar ao Índice](#indice)

---
## <a name="parte16">Modal</a>

[Voltar ao Índice](#indice)

---
## <a name="parte17">Popover</a>

[Voltar ao Índice](#indice)

---
## <a name="parte18">Customizando</a>

[Voltar ao Índice](#indice)

---


