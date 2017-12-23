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

http://getbootstrap.com/docs/3.3/components/#navbar

https://getbootstrap.com/docs/4.0/components/navbar/

---

A primeira funcionalidade do framework que iremos ensinar a criar é a barra de navegação, que geralmente é um dos primeiros itens de uma aplicação.

Mostraremos onde encontrar este recurso na documentação do Bootstrap. Vejam a imagem abaixo:

![bootstrap_navbar](https://github.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/blob/master/07-Bootstrap/img-git/bootstrap_navbar.png?raw=true)

Neste setor do site temos um exemplo de navbar padrão, porém ela não é fixada na tela, conforme a tela é rolada. Em nosso exemplo, criaremos a navbar fixa. Se o usuário rolar a tela, o menu ficará no topo, sempre, acompanhando o conteúdo da página.

A documentação ensina como colocar logomarca no menu, inserir campos de formulários, entre outros recursos. Para isso, basta ler com calma e procurar o que está precisando.

Veja o código completo da navbar do nosso projeto. Logo abaixo, comentaremos:

```html

<header>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="#" class="navbar-brand">Bootstrap brand</a>
            </div>
            <div id="navbarCollapse" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-header">Title 1</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header">Title 2</li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
```

### Comentando estrutura e classes

Criamos a tag header para englobar o menu inteiro. Depois inserimos a tag nav com as seguintes classes:

Classe  |	Função 
------  | -------
navbar  |	Tem a função identificar o menu e estilizar
navbar-inverse |	Inverte as cores principais da aplicação. A cor principal padrão é clara, quando utilizamos o inverse, ele trabalha com o menu escuro e inverte as cores das fontes, também.
navbar-fixed-top |	Responsável por fixar o menu ao topo, mesmo que o usuário role a tela para baixo o menu é fixado ao topo da página.

Depois, adicionamos uma div com a classe container, que serve para centralizar o conteúdo, adicionando margens. Há, também, a classe container-fluid, que libera as margens do container para que o layout seja fluído e pegue a tela inteira.

Logo após, temos o navbar-header:
```html
<div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>
    <a href="#" class="navbar-brand">Bootstrap brand</a>
</div>
```
Este botão possui as classes navbar-toggle e collapsed que são responsáveis por esconder o botão em dispositivos maiores. Ele deve ser mostrado, de outra forma, em dispositivos menores. Possui também atributos para javascript ,data-toggle e data-target. O data-toggle serve para o javascript disparar um evento para mostrar o menu, em dispositivos menores, e o data-target serve para fazer a identificação do menu correto a ser mostrado, ao clicar no botão.

Notem que o atributo id, da div que engloba o menu acima, tem o mesmo valor do atributo data-target, informado no botão. Vocês poderiam utilizar o data-target como sendo uma classe também, basta que a div do menu tenha a mesma classe. Vejam nos fragmentos de código abaixo:

```html
// Data target do botão
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded="false">
</button>

// ID da div que engloba o menu
<div id="navbarCollapse" class="navbar-collapse collapse">
</div>
```
Ambos devem ter o mesmo valor, isso assegura que ao clicar, no botão do menu, o código irá mostrar o menu que tem o mesmo ID, senão poderia mostrar algum outro menu existente na página. Vocês podem criar o data-target que quiserem, basta que coloquem o mesmo valor no id.

Veja imagem do botão em layouts menores:

![bootstrap_collapse_navbar](https://github.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/blob/master/07-Bootstrap/img-git/bootstrap_collapse_navbar.png?raw=true)

Depois do navbar-header, temos o menu, finalmente.

```html
<div id="navbarCollapse" class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-right">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="dropdown-header">Title 1</li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Title 2</li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
            </ul>
        </li>
    </ul>
</div>
```

Notem que temos uma estrutura html normal de menu, porém temos as classes que fazem toda a diferença.

Classe |	Função
------ | ------ 
nav e navbar-nav |	Identificar e estilizar o menu.
navbar-right |	Deslocar menu para o lado direito, caso não coloque, o menu sempre ficará para esquerda, como padrão.
active |	Destacar a página atual no menu, para mostrar ao usuário qual página ele se encontra, de uma forma visual.
dropdown |	 Informar que existe uma estrutura de submenus e fazer toda estilização. Reparem que dentro da classe dropdown vocês podem ter títulos e separadores tudo pronto, só basta utilizar.

Falamos um pouco sobre as classes, caso precisem saber mais, podem consultar a documentação, que encontrarão tudo sobre as mesmas, e todos os recursos possuem exemplos práticos.

### Conclusão

O objetivo deste capítulo é implementar um menu de navegação, inclusive deixá-lo ativo para dispositivos móveis. Nós utilizamos somente informações contidas na documentação do Bootstrap. Tudo que adicionamos vocês podem encontrar e tirar maiores dúvidas no site.

Façam mais testes, retirem classes e incluam novamente, para conhecerem o papel de cada uma. Adicionem mais elementos ao menu e façam testes diminuindo o tamanho do browser para conferir as modificações, nas versões mobiles.

Lembrem-se, quanto mais praticarem, maior será a fixação sobre o conteúdo. Menus são itens fundamentais em aplicações web. O mais importante é saber que a aplicação está servindo um menu para todos os tipos de dispositivos e o trabalho foi praticamente zero. O Bootstrap trouxe tudo pronto.

---

### v3 | v4

```html 
<header>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#navbarCollapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="#" class="navbar-brand">Bootstrap brand</a>
            </div>
            <div id="navbarCollapse" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">Dropdown <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-header">Title 1</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header">Title 2</li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
```

```html
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</header>
```


[Voltar ao Índice](#indice)

---
## <a name="parte3">Sistema de grid</a>

Começaremos a utilizar o sistema de grid, disponibilizado pelo Bootstrap. Com este sistema, conseguimos dividir a aplicação em blocos responsivos de tal maneira que eles se adaptam aos dispositivos.

Após a tag header do HTML, criaremos a tag main, para separar o conteúdo principal da aplicação. Em seguida criaremos uma section e dentro da section criaremos o container. Já falamos sobre o container e podemos dizer que todo elemento criado, no Bootstrap, deverá estar dentro de um container. Em seguida, podemos escolher se o container é normal ou fluid.

Próximo passo será criar um linha, que no Bootstrap adicionamos a classe row. O Bootstrap trabalha bastante com este conjunto de classes que são: container, row e grids. O tempo todo utilizamos estas classes para criarmos a estrutura da aplicação.

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Grid System</h1>
            </div>
        </div>
    </section>
</main>

```

Vejam a estrutura do primeiro bloco do projeto. Se forem até o navegador e atualizarem, verão que está funcionando, mas está por trás do menu que criamos. Isso acontece porque o menu está fixado no topo. Para resolvermos isso, criaremos uma folha de estilo para o projeto que estamos desenvolvendo e chamaremos, logo após o estilo do Bootstrap, para que ele sobrescreva qualquer CSS.


```
<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">

```

O arquivo de estilo que criamos se chama style.css e está dentro da mesma pasta do arquivo de CSS do Bootstrap. Vejam o conteúdo do arquivo style.css:

```css
main {
    margin-top: 50px;
}

```
Com esta alteração já temos o conteúdo principal da aplicação sendo mostrado por inteiro, porque criamos uma margem superior.

### Primeira grid

A principal informação que vocês precisam ter é que, cada linha ou row, é dividida em 12 colunas. Esta é uma definição do Bootstrap e cada coluna tem o seu tamanho próprio.

```html
<div class="row">
    <h1>Teste</h1>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
</div>

```

Este é o número máximo de divisões que podemos ter em uma linha. Se acrescentarmos mais um coluna, a aplicação quebrará e pulará para a próxima linha. O importante é saber que a soma das colunas sempre deverá ser 12, passando desse valor, não caberá em uma mesma linha.

Se não quiserem espaços nas laterais, basta alterarem a classe container para container-fluid. A divisão continuará sendo a mesma, cabendo apenas 12 colunas, porém, as colunas se tornam um pouco maiores e preenchem a tela toda.

Vejam mais dois exemplos de linhas:

```html
<!-- A primeira coluna tem o espaço de 3 colunas e mais 9 colunas padrão, somando 12 -->
<div class="row">
    <div class="col-md-3">col-md-3</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
    <div class="col-md-1">col-md-1</div>
</div>

```

```html
<!-- Duas colunas de 6 somando 12 colunas -->
<div class="row">
    <div class="col-md-6">col-md-6</div>
    <div class="col-md-6">col-md-6</div>
</div>
```

### Grid para 3 dispositivos - Desktop, tablet e mobiles

http://getbootstrap.com/docs/3.3/css/#grid

https://getbootstrap.com/docs/4.0/layout/grid/

```html
<div class="row">
    <h1>Desktop, tablet, mobile</h1>
    <div class="col-md-3 col-sm-6 col-xs-12">
        col-md-3 col-sm-6 col-xs-12
    </div>
    <div class="col-md-3 col-sm-6 col-xs-12">
        col-md-3 col-sm-6 col-xs-12
    </div>
    <div class="col-md-3 col-sm-6 col-xs-12">
        col-md-3 col-sm-6 col-xs-12
    </div>
    <div class="col-md-3 col-sm-6 col-xs-12">
        col-md-3 col-sm-6 col-xs-12
    </div>
</div>

```
Notem que na mesma div podemos definir qual o comportamento que teremos em cada dispositivo.

Classe | Dispositivo |	Comportamento
--- | --- | ---
col-md-3  |	 Desktop |	4 colunas - ( 3 + 3 + 3 + 3 ) = 12
col-sm-6  |	Tablet  | 2 colunas - ( 6 + 6 ) = 12
col-xs-12 |	Mobile  | 1 coluna - ( 12 ) = 12

###Trabalhando com offset
```html

<div class="row">
    <h1>Offset</h1>
    <div class="col-md-3 col-md-offset-3">col-md-3</div>
    <div class="col-md-3">col-md-3</div>
    <div class="col-md-3">col-md-3</div>
</div>

```
Quando precisamos ter algumas colunas em branco, podemos utilizar o offset. Significa que o Bootstrap pulará a quantidade do offset e começará a partir daquela coluna. Notem que continuamos com a soma de 12 colunas. É como se tivéssemos feito a reserva de 3 espaços, mas que são contabilizados. Vejam na imagem abaixo:

![bootstrap_grid_offset](https://github.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/blob/master/07-Bootstrap/img-git/bootstrap_grid_offset.png?raw=true)

###Ocultando elementos em diferentes dispositivos
```html

<div class="row">
    <h1>Responsive utilities</h1>
    <div class="visible-xs">Phones (<768px) visible-xs</div>
    <div class="visible-sm">Tablets (≥768px) visible-sm</div>
    <div class="visible-md">Desktops (≥992px) visible-md</div>
    <div class="visible-lg">Desktops (≥1200px) visible-lg</div>
</div>
```

Observem que, podemos mostrar elementos específicos em dispositivos específicos. Caso esteja em um dispositivo com o tamanho correto mostra, senão não mostra. Vejam que recurso maravilhoso podemos utilizar com o Bootstrap.

Na tabela, abaixo, encontrarão a documentação:

![bootstrap_grid_visible](https://github.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/blob/master/07-Bootstrap/img-git/bootstrap_grid_visible.png?raw=true)


## V.4 - Passará para outro treinamento!

[Voltar ao Índice](#indice)

---
## <a name="parte4">Formulários</a>

http://getbootstrap.com/docs/3.3/css/#forms

Mostraremos como os formulários são criados com o Bootstrap. Apresentaremos um formulário bem básico, mas saibam que poderão criar formulários mais complexos, basta consultarem a documentação.

### Estrutura básica
```html

<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Basic</h1>
                <form>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> Check me out
                        </label>
                    </div>
                    <button type="submit" class="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    </section>
</main>

```

Notem que a estrutura do formulário é bem parecida com a convencional. A diferença, como tudo no Bootstrap, são as classes.

Temos a classe form-group, que devemos colocar, englobando os campos. Em seguida, a classe form-control, inserida no campo, diretamente, para que eles ocupem o tamanho total da página, em qualquer que seja o dispositivo. Isso, para a maioria dos campos relacionados a texto.

Observem que no campo de checkbox a estrutura é um pouco diferente, basta acrescentarmos a classe checkbox e depois inserir o campo dentro da label, isso fará com que o campo seja selecionado, quando clicar em cima do texto do checkbox. Se colocarmos o campo fora da label, o mesmo só será selecionado na box.

Temos o botão que é bem simples, basta acrescentar as classes btn e btn-info. Temos tembém btn-default, btn-primary entre outros, que falaremos no próximo capítulo.

### Estrutura em linha

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Inline</h1>
                <form class="form-inline">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Name...">
                    </div>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="Email...">
                    </div>
                    <button type="submit" class="btn btn-success">Send</button>
                </form>
            </div>
        </div>
    </section>
</main>
```

A única diferença dessa estrutura para a anterior, é a classe principal que adicionamos, diretamente, na tag form, que se chama form-inline. Só isso, já faz com que o formulário tenha esta característica. Tirando esta classe, veremos que o formulário volta a ser igual ao anterior.

O Bootstrap oferece essa grande facilidade de criação de formulários. Isso agiliza a vida do programador, sem falar que os formulários são muito elegantes. Podemos estilizar um pouco mais, mas eles já estão, praticamente, perfeitos para o uso.

Criem formulários de todos os tipos, consultem a documentação para verem todas as opções de formulários que o Bootstrap oferece. Aproveitem para fixarem este conteúdo, porque formulários são muito utilizados em qualquer aplicação, assim como os menus.

[Voltar ao Índice](#indice)

---
## <a name="parte5">Trabalhando com botões </a>

Mostraremos como é simples trabalhar com os botões do Bootstrap. Vocês podem criar botões utilizando div, âncora, button ou input, mas o ideal é que utilizem a tag button, que foi criada, especificamente, para esta finalidade. Para caracterizar um botão, basta que adicionemos as classes btn e depois definamos o tipo do botão.

Vejam os exemplos existentes, na imagem abaixo:

![bootstrap_buttons](https://github.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/blob/master/07-Bootstrap/img-git/bootstrap_btn.PNG?raw=true)

```html

<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Buttons</h1>
                <button type="submit" class="btn btn-default">Default</button>
                <button type="submit" class="btn btn-primary">Primary</button>
                <button type="submit" class="btn btn-success">Success</button>
                <button type="submit" class="btn btn-info">Info</button>
                <button type="submit" class="btn btn-warning">Warning</button>
                <button type="submit" class="btn btn-danger">Danger</button>
                <button type="submit" class="btn btn-link">Link</button>
            </div>
        </div>
    </section>
</main>

```

### Trabalhando com botões de diferentes tamanhos

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Sizes</h1>
                <button type="submit" class="btn btn-success btn-lg">Large button</button>
                <button type="submit" class="btn btn-default">Default button</button>
                <button type="submit" class="btn btn-danger btn-sm">Small button</button>
                <button type="submit" class="btn btn-warning btn-xs">Extra small button</button>
            </div>
        </div>
    </section>
</main>

```
Vejam que o padrão é o mesmo dos primeiros exemplos, só precisamos adicionar mais uma classe, que definirá o tamanho destes botões. As classes existentes são:

- BTN-LG   
- BTN-SM   
- BTN-XS  
   
### Todas seguem o mesmo padrão de dispositivos.

Classe |	Dispositivo
--- | ---
btn-lg |	large - tvs ou projetores
btn-sm |	small - tablets
btn-xs |	extra small - celulares

###Trabalhando com botões do tipo block

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Block</h1>
                <button type="submit" class="btn btn-success btn-lg btn-block">Block level button</button>
            </div>
        </div>
    </section>
</main>

```
Este botão ocupa o espaço total da div em que estiver inserido. Ele é muito utilizado para o desenvolvimento de aplicativos, mas vocês podem utilizar da maneira que acharem melhor, no projeto.

### Resultados

Acessem o navegador depois de terem adicionado todos os tipos de botões, no projeto local. Vocês deverão obter o mesmo resultado da imagem abaixo:

![bootstrap_btn_examples](https://github.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/blob/master/07-Bootstrap/img-git/bootstrap_btn_size.PNG?raw=true)

Vocês podem ver que, trabalhar com botões é muito simples. Não deixem de olhar a documentação do Bootstrap, pois existem mais alguns tipos de botões a serem utilizados, que não são muito comuns. Sempre é muito bom saber o que o framework pode oferecer, pois algum dia, podemos precisar.aa

[Voltar ao Índice](#indice)

---
## <a name="parte6">Imagens</a>
Para trabalharmos com imagens, criaremos um diretório chamado img, na pasta raiz do projeto, para que possamos chamar no HTML. Em seguida, utilizaremos as classes do Bootstrap. Vocês podem utilizar um link para exibir uma imagem online. Em nossos exemplos faremos com uma imagem local.

Com apenas uma classe podemos fazer com que a imagem, que estivermos trabalhando, se adapte a qualquer dispositivo. Significa que se o usuário acessar de um desktop a imagem será de um tamanho, se ele acessar de um celular, por exemplo, a imagem será menor, porque ela se adaptou ao tamanho do dispositivo.

### Imagem responsiva

```html
<main>
    <section>
        <div class="container">
            <div class="row text-center">
                <h1>Image Responsive</h1>
                <img src="img/image.jpg" alt="image" class="img-responsive center-block">
            </div>
        </div>
    </section>
</main>

```
Notem que utilizamos, apenas, a classe img-responsive para que a imagem se adapte aos diversos dispositivos existentes. Esta única classe é capaz de fazer isso para nós. Utilizamos, também, a classe center-block. Esta classe serve, apenas, para centralizar a imagem. Sempre que utilizarem a classe img-responsive, é interessante que utilizem a center-block, para centralizar.

Se utilizarem uma imagem, sem utilizar a classe img-responsive, e quiserem centralizar a mesma, vocês podem usar a classe text-center junto com a classe row. Todo conteúdo da linha será centralizado.

Para verificarem se realmente está funcionando, vocês devem diminuir o tamanho do navegador, até o menor tamanho possível e verificar se a imagem diminuiu, proporcionalmente, junto com o navegador. Se não diminuiu, pode ser algum erro no código.

### Formatos de imagens

```html
<main>
    <section>
        <div class="container">
            <div class="row text-center">
                <h1>Image shape</h1>
                <img src="img/image.jpg" alt="image" class="img-rounded">
                <img src="img/image.jpg" alt="image" class="img-circle">
                <img src="img/image.jpg" alt="image" class="img-thumbnail">
            </div>
        </div>
    </section>
</main>

```
Classe |	Função
--- | ---
img-rounded |	Deixa os cantos da imagem, arredondados.
img-circle |	Deixa a imagem com formato circular, como se tivesse uma máscara.
img-thumbnail |	Insere um tipo de borda, na imagem, fazendo ter a aparência de um cartão.

Todas estas classes podem ser relacionadas com a classe img-responsive. Desta forma você soma as características. Além de ter os formatos, elas ainda serão responsivas e se adaptarão aos dispositivos.

Vocês podem, também, utilizar as classes, img-rounded e img-circle, em conjunto com a img-thumbnail. Assim, além de terem os formatos, terão a borda, para estilizarem. Vejam no exemplo abaixo:

```html
<img src="img/image.jpg" alt="image" class="img-circle img-thumbnail">
```
Neste exemplo, temos duas classes somadas e cada uma tem sua característica e função, mas trabalham juntas. Notem que se vocês utilizarem a classe img-thumbnail, a imagem já será responsiva, sem que precisem utilizar a classe img-responsive. Isso ocorre porque a classe img-thumbnail, também tem responsividade.

[Voltar ao Índice](#indice)

---
## <a name="parte7">Icones</a>

http://getbootstrap.com/docs/3.3/components/#glyphicons

Outro recurso, muito interessante e útil, que o Bootstrap disponibiliza, são os ícones. Ter ícones a disposição faz com que ganhemos muito tempo e consigamos estilizar, muito mais, a aplicação.

No primeiro capítulo, quando instalamos o Bootstrap, falamos de uma pasta chamada fonts. Os ícones são todos tratados como fontes. Isso é ótimo porque podemos alterar o tamanho e as cores dos ícones, de forma muito fácil, utilizando CSS, apenas.

Acessando o link de components, no site do Bootstrap, vocês verão os ícones em primeiro lugar, na documentação.

![bootstrap_icons](https://github.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/blob/master/07-Bootstrap/img-git/bootstrap_icons.png?raw=true)

Observem, nos exemplos abaixo, como é fácil utilizar ícones. Basta que olhem no site as opções e copiem as classes referentes a cada um deles, como mostra a imagem acima.

### Inserindo os ícones
```html

<main>
    <section>
        <div class="container">
            <div class="row text-center">
                <h1>Glyph icons</h1>
                <p><span class="glyphicon glyphicon-search" aria-hidden="true"></span></p>
                <p><span class="glyphicon glyphicon-education" aria-hidden="true" style="font-size: 40px;"></span></p>
                <p><span class="glyphicon glyphicon-user" aria-hidden="true" style="font-size: 40px; color: blue;"></span></p>
                <p><span class="glyphicon glyphicon-user text-danger" aria-hidden="true" style="font-size: 40px;"></span></p>
                <p><button class="btn btn-success glyphicon glyphicon-ok " aria-hidden="true" style="font-size: 40px;"></button></p>
            </div>
        </div>
    </section>
</main>

```

Acima, mostramos como utilizar ícones com a tag span e também com a tag button. Vocês podem ver que são maneiras muito parecidas e, em ambas, vocês podem utilizar o atributo style, para formatar da maneira que quiserem. Vocês podem alterar cores e tamanhos, facilmente.

Demos um exemplo de como alterar a cor, do ícone, utilizando classes do próprio Bootstrap.

Exemplo: text-danger.

Vale lembrar que, utilizamos o atributo aria-hidden="true", porque estamos utilizando uma tag span vazia. O span possui somente as classes e, o objetivo dele é produzir um ícone, apenas. Logo, não existe valor entre as tags de abertura e fechamento. Por isso o Bootstrap nos orienta a utilizar este atributo.

[Voltar ao Índice](#indice)

---
## <a name="parte8">Dropdown</a>

O Dropdown é um recurso muito utilizado em aplicação web. O Bootstrap, sempre querendo melhorar a vida do programador front-end, pensou neste recurso, também.

O Bootstrap disponibiliza o recurso dropdown utilizando html e css, associados com o recurso javascript, através da biblioteca jQuery.

Veremos o dropdown, que lista um menu de opções para baixo, como se fosse um botão, e também o recurso dropup, que lista o mesmo conteúdo, só que para cima.

### Dropdown
```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Dropdown</h1>
                <div class="dropdown">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Dropdown
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Link1</a></li>
                        <li><a href="#">Link2</a></li>
                        <li><a href="#">Link3</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</main>
```

### Dropup

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Dropup</h1>
                <div class="dropup">
                    <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropup
                        <span class="glyphicon glyphicon-usd" aria-hidden="true"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><a href="#">Link1</a></li>
                        <li><a href="#">Link2</a></li>
                        <li><a href="#">Link3</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</main>
```

Vejam que o primeiro passo a executar é criarmos uma div com a classe dropdown ou dropup. Isso fará com que o navegador já interprete que se trata de um elemento de listagem.

Em seguida, criaremos um botão com as classes referentes a botões e adicionaremos a classe dropdown-toggle, que caracteriza o efeito de rolar as opções, quando o botão é acionado. Informamos, ainda, um id, um atributo data-toggle="dropdown", para o javascript e mais dois atributos para que a semântica do HTML seja respeitada: aria-haspopup="true" aria-expanded="false".

Dentro do botão inserimos um ícone, para indicarmos o sentido do drop, ou qualquer outro ícone que quisermos utilizar na aplicação.

Para definirmos a lista de opções, basta criarmos uma lista normal do HTML, utilizando uma classe chamada dropdown-menu. Para fazermos a ligação da lista com o botão, utilizamos um atributo chamado, aria-labelledby, onde deveremos passar o valor do id do botão.

O restante é muito simples. Assim como nos menus, vocês podem criar os itens de li, podem utilizar separadores e também os headers, que são títulos de listagens, para diferenciarem dos itens.

Observem que a única diferença entre dropdown e dropup é a classe principal. O restante é muito parecido. Em nosso exemplo alteramos o ícone, somente para vocês verem que é possível utilizar outro ícone. Se utilizarem o <span class="caret"></span>, a própria classe dropup se encarrega de inverter o sentido da seta, para cima.

[Voltar ao Índice](#indice)

---
## <a name="parte9">Paginação</a>

Quando falamos de sistemas que costumam gerar relatórios, ou listas, muito grandes, a paginação se torna algo muito importante. O Bootstrap disponibiliza uma paginação estilizada.

### Estrutura paginação padrão
```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Pagination</h1>
                <nav>
                    <ul class="pagination">
                        <li class="disabled">
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</main>
```
Primeiro, temos que abrir a tag nav. O Bootstrap sempre utiliza esta tag quando se trata de algum tipo de navegação, seja menu ou paginação.

Em seguida, basta criar uma tag de listagem ul, com a classe pagination e os itens da navegação.

No exemplo acima, criamos os itens, previous e next, como sendo o primeiro e o último elemento da paginação, como qualquer paginação padrão. No meio da navegação, temos os números de cada página sendo listados.

Dentro da classe pagination, não precisamos utilizar classe nenhuma, que a estilização já será feita. Apenas utilizamos a classe active, para identificar a página atual e podemos adicionar a classe, disabled, em alguma li que quisermos desabilitar. Utilizando a classe disabled, o usuário não conseguirá clicar, o próprio Bootstrap fará isso para nós, basta acrescentarmos a classe.

### Estrutura paginação grande
```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Pagination Lg</h1>
                <nav>
                    <ul class="pagination pagination-lg">
                        <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</main>
```

### Estrutura paginação pequena

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Pagination Sm</h1>
                <nav>
                    <ul class="pagination pagination-sm">
                        <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</main>
```

Por incrível que pareça, para alterar os tamanhos, não precisamos alterar nada na estrutura da paginação inicial. Notem que os códigos são exatamente iguais ao primeiro. Basta que acrescentemos um classe, para que o tamanho da paginação seja modificado.

Temos as opções a seguir:

Classes	| Tamanho
 --- | ---
pagination |	Padrão
pagination pagination-lg |	Grande
pagination pagination-sm |	Pequeno

Realmente, o Bootstrap facilita a vida do programador, agilizando o processo de criação. Vejam como é fácil criar uma paginação. Basta que vocês utilizem uma linguagem de programação, para fazerem uma repetição e buscarem as informações de um banco de dados, por exemplo, mas a estrutura visual já está pronta para usar.

[Voltar ao Índice](#indice)

---
## <a name="parte10">Trabalhando com miniaturas </a>

Falaremos de um recurso muito interessante que o Bootstrap oferece. Uma estrutura muito utilizada em listagens de imagens ou galerias. O Bootstrap disponibiliza toda esta estrutura, prontinha, para os desenvolvedores, tanto para sistemas, quanto para sites ou blogs.

Falaremos, também, sobre os cards, que são os estilos cartões, do Bootstrap, que aceitam: títulos, legendas, botões, entre outros elementos.

### Estrutura de miniaturas

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Thumbnail</h1>
                <div class="col-xs-6 col-md-3">
                    <a href="#" class="thumbnail">
                        <img src="img/image.jpg" alt="image">
                    </a>
                </div>
                <div class="col-xs-6 col-md-3">
                    <a href="#" class="thumbnail">
                        <img src="img/image.jpg" alt="image">
                    </a>
                </div>
                <div class="col-xs-6 col-md-3">
                    <a href="#" class="thumbnail">
                        <img src="img/image.jpg" alt="image">
                    </a>
                </div>
                <div class="col-xs-6 col-md-3">
                    <a href="#" class="thumbnail">
                        <img src="img/image.jpg" alt="image">
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>
```

Trabalhar com thumbnails é realmente muito simples. O grande segredo está na montagem das grids, que já aprendemos.

Observem, no código acima, que temos a estrutura de uma grid normal. Dentro de cada grid inserimos uma âncora, com uma classe thumbnail dentro de uma imagem. A classe thumbnail é responsável por dar o efeito da borda na imagem e a responsividade. As grids definem quantas thumbnails serão mostradas, a cada linha.

Temos, no exemplo acima, quatro colunas por linha, em desktops. Nos celulares, serão duas colunas por linha. Basta diminuirmos o navegador, para acompanharmos as mudanças. A classe thumbnail faz com que a imagem preencha o conteúdo inteiro da grid, se a imagem for maior que a mesma. Caso a imagem seja menor do que a grid, ela não ampliará.

### Estrutura de cards

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Cards</h1>
                <div class="col-xs-12 col-md-4">
                    <div class="thumbnail">
                        <img src="img/image.jpg" alt="image">
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>Text thumbnail</p>
                            <p>
                                <button class="btn btn-default">Button</button>
                                <button class="btn btn-info">Button</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="thumbnail">
                        <img src="img/image.jpg" alt="image">
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>Text thumbnail</p>
                            <p>
                                <button class="btn btn-default">Button</button>
                                <button class="btn btn-info">Button</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="thumbnail">
                        <img src="img/image.jpg" alt="image">
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>Text thumbnail</p>
                            <p>
                                <button class="btn btn-default">Button</button>
                                <button class="btn btn-info">Button</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
```

Para cards, temos a mesma estrutura anterior, só que acrescentamos uma classe chamada caption, que trabalha como se fosse uma legenda da imagem. Podemos utilizar este recurso para adicionarmos título e descrição à imagem. Aproveitamos para adicionar botões, também, que podem ser links para acessarmos páginas específicas, por exemplo.

Levaríamos um bom tempo para criarmos esta estrutura no CSS. Com o Bootstrap, apenas inserimos as classes, que já estão prontas. Esta é a vantagem de utilizar um framework.

O ganho de tempo é imenso e, quanto mais vocês aprendem a utilizar os recursos do Bootstrap, mais tempo vocês ganham em seus projetos.

[Voltar ao Índice](#indice)

---
## <a name="parte11">Painel</a>

Falaremos sobre a criação de painéis com o Bootstrap. Estes painéis são muito utilizados para criação de áreas administrativas de sistemas.

Podemos definir heading, body e footer nestes painéis, ou seja, temos cabeçalho, corpo e rodapé.

É um recurso maravilhoso para distribuir dados ou informações e, por isso, é muito utilizado.

### Estrutura painel com heading e body

```html

<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Panel</h1>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Panel heading</h3>
                    </div>
                    <div class="panel-body">
                        Panel content ...
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
``` 

Observem que a estrutura é muito simples e intuitiva. Primeiro, criamos uma div com uma classe chamada panel. Em seguida, podemos adicionar cores a estes painéis, da mesma forma que configuramos os botões. Vejam as classes, abaixo:

-PANEL-PRIMARY  
-PANEL-INFO  
-PANEL-DANGER  
-PANEL-WARNING  
-PANEL-SUCCESS  

Temos outra div com uma classe chamada panel-heading, que é responsável por configurar o cabeçalho do painel. Nesta div colocaremos o título do painel e podemos utilizar outra classe chamada panel-title.

Logo em seguida, temos outra div com a classe panel-body, onde colocaremos todo conteúdo do painel.

Por último, podemos, ou não, ter outra div com a classe panel-footer, onde colocaremos informações de rodapé.

Nós aconselhamos utilizarem heading ou footer, porque uma estrutura com heading, body e footer não fica muito bonita e não é muito utilizada.

### Estrutura painel com body e footer

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <div class="panel panel-success">
                    <div class="panel-body">
                        Panel content ...
                    </div>
                    <div class="panel-footer">
                        Panel footer
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
```

Vocês podem escolher qual a melhor estrutura para o projeto e utilizarem, tranquilamente. Esta estrutura também é responsiva.

Usem muitos painéis para organizarem os conteúdos da aplicação. Utilizem painéis associados com grids e verão o poder que terão, visualmente.

[Voltar ao Índice](#indice)

---
## <a name="parte12">Listas</a>

Agora que estamos dominando algumas estruturas do Bootstrap como: grids, painéis, paginação e outros recursos, falaremos sobre listas.

Listas são muito utilizadas em qualquer tipo de aplicação, então vale a pena dar uma atenção especial a elas.

### Estrutura de listas

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>List</h1>
                <ul class="list-group">
                    <li class="list-group-item">Text default ...</li>
                    <li class="list-group-item">Text default ...</li>
                    <li class="list-group-item">Text default ...</li>
                    <li class="list-group-item">Text default ...</li>
                    <li class="list-group-item">Text default ...</li>
                </ul>
            </div>
        </div>
    </section>
</main>
```

Vejam que estrutura simples e intuitiva. Precisamos da tag ul, que já é uma estrutura de lista do HTML, onde precisamos adicionar uma classe chamada list-group.

Em seguida, podemos inserir quantos itens quisermos, basta que todos tenham a classe list-group-item, para que o Bootstrap consiga aplicar seu estilo.

A lista já é responsiva, por padrão. Logo, a mesma lista irá servir para outros dispositivos, também.

### Recursos de listagem

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <ul class="list-group">
                    <li class="list-group-item">
                        <span class="badge">13</span>
                        Text default ...
                    </li>
                    <li class="list-group-item">
                        <span class="badge">3</span>
                        Text default ...
                    </li>
                    <li class="list-group-item">
                        <span class="badge">44</span>
                        Text default ...
                    </li>
                </ul>
            </div>
        </div>
    </section>
</main>
```

Essa listagem é muito semelhante a anterior e a utilizamos quando queremos listas itens, que possam ser contabilizadas. Neste caso, adicionamos a tag span com a classe badge e informamos um valor. Este recurso é muito utilizado em blogs, onde possuem categorias e cada categoria informa quantos posts elas possuem. Em alguns casos é utilizada como contador de visualizações, também.

### Listando links sem tag ul e li

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <div class="list-group">
                    <a href="#" class="list-group-item active">Link text</a>
                    <a href="#" class="list-group-item">Link text</a>
                    <a href="#" class="list-group-item">Link text</a>
                    <a href="#" class="list-group-item">Link text</a>
                    <a href="#" class="list-group-item">Link text</a>
                    <a href="#" class="list-group-item">Link text</a>
                </div>
            </div>
        </div>
    </section>
</main>
```

Notem que a listagem de links fica muito semelhante às tabs. Temos também a opção de utilizar a classe active, para mostrar qual item está ativo.

Vocês podem utilizar todos os tipos de lista, apresentados aqui.

[Voltar ao Índice](#indice)

---
## <a name="parte13">Media</a>
Antes de começarmos a falar sobre media, vale lembrar que a documentação do Bootstrap é muito fácil, intuitiva e muito exemplificada. Isso quer dizer que tudo que estamos vendo, e outras coisas que, talvez não tenha neste conteúdo, vocês encontrarão na documentação, acessando o site do Bootstrap.

No menu superior do site, tem a parte de CSS e Components. Nestes dois links estão, praticamente, todo conteúdo. Acessando qualquer um destes links vocês encontrarão uma listagem com todos os recursos, onde podem acessar, um a um, e verificarem como aplicá-los.

Antes de utilizarem conteúdos, de qualquer blog ou fórum, consultem a documentação, que, provavelmente, irão encontrar a solução para suas dúvidas.

### Estrutura de media objects

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Media</h1>
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#">
                            <img src="img/image.jpg" alt="image" style="width: 64px;height: 64px;">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Middle aligned media</h4>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                    </div>
                </div>
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#">
                            <img src="img/image.jpg" alt="image" style="width: 64px;height: 64px;">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Middle aligned media</h4>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
```

Devemos começar com uma div e uma classe chamada media. Em seguida, colocamos outra div para configurar a posição da imagem. Em nosso caso, colocamos a classe media-left e media-middle. Dessa forma, estamos centralizando a imagem, horizontalmente, e alinhando para esquerda.

O próximo passo é definir o corpo da media, onde colocaremos o título e o conteúdo. Para isso, temos a classe media-body. Dentro desta classe podemos definir o título, utilizando a classe media-heading e depois, podemos inserir um texto ou um resumo.

Vocês podem adicionar link no título e até botões com links, dentro do body. Isso, é uma decisão de vocês, de acordo com o projeto.

Este recurso é muito utilizado para listar notícias, em portais.

[Voltar ao Índice](#indice)

---
## <a name="parte14">Alert</a>

Em todo sistema ou website, vocês precisarão enviar algum tipo de mensagem ou aviso, ao usuário. Os exemplos mais comuns são: mensagens de erro ou mensagens de confirmação.

Uma maneira muito prática e elegante de se fazer isso é utilizando os alerts do Bootstrap. São mensagens já estilizadas, à sua disposição.

### Estrutura de alerts

```html

<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Alert</h1>
                <div class="alert alert-success">Ok! Success.</div>
                <div class="alert alert-info">Ok! Info.</div>
                <div class="alert alert-warning">Ok! Warning.</div>
                <div class="alert alert-danger">Ok! Danger.</div>
            </div>
        </div>
    </section>
</main>

```

As mensagens de alerta trabalham de forma isolada. Basta criarmos a div e adicionarmos as classes relacionadas. Elas trabalham de forma muito parecida com os botões.

Temos a classe principal alert e depois as classes que definem as cores das mensagens, que são:

- ALERT-SUCCESS  
- ALERT-INFO  
- ALERT-WARNING  
- ALERT-DANGER  

Trabalhar com mensagens no Bootstrap é realmente muito fácil e muito prático.

Vale a pena observar que é possível fazer a alteração das cores principais do Bootstrap. Falaremos sobre este assunto, em um próximo capítulo. Ensinaremos como baixar, apenas, os arquivos necessários para o tipo de projeto que estiverem trabalhando, para não precisarem baixar todas as funcionalidades do Bootstrap, sabendo que não usarão, nem metade delas.

[Voltar ao Índice](#indice)

---
## <a name="parte15">Tabs</a>

Falaremos, novamente, sobre navegação. As tabs são uma espécie de navegação e vocês devem saber que o Bootstrap, também, disponibiliza este recurso.

As tabs são muito utilizadas para manipulação de conteúdos, páginas e também é um facilitador no preenchimento de alguns formulários. Vocês podem separar conteúdos do mesmo assunto, por tabs, em vez de criarem uma página para cada. Assim, tudo é carregado de uma só vez e o usuário não precisará acessar, página por página.

As tabs do Bootstrap são implementadas, automaticamente. Não é necessário utilizar javascript para fazer qualquer implementação.

### Modelos e estrutura das Tabs

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Tabs</h1>
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#">Images</a></li>
                    <li role="presentation"><a href="#">Blog</a></li>
                </ul>
                <br/>
                <ul class="nav nav-pills">
                    <li role="presentation" class="active"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#">Images</a></li>
                    <li role="presentation"><a href="#">Blog</a></li>
                </ul>
                <br/>
                <ul class="nav nav-pills nav-stacked">
                    <li role="presentation" class="active"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#">Images</a></li>
                    <li role="presentation"><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
    </section>
</main>
```

Podemos ver 3 exemplos de tabs do Bootstrap. O framework, mais uma vez, nos presenteia com esta facilidade de implementação.

Precisamos, apenas, criar uma listagem, adicionando as classes específicas e, como uma mágica, as tabs já estarão estilizadas e funcionando.

No código acima, apenas mostramos os modelos existentes. Notem que a estrutura de todas, são iguais. Basta alterarem as classes principais da tag ul, para alterarem o modelo. Cada item li precisará de uma âncora e representará uma tab. Por sua vez, cada tab terá um correspondente de conteúdo, que mostraremos, abaixo. O atributo role é indicado para que a semântica seja atendida, da melhor forma possível.

Classe	| Característica
--- | ---
nav-tabs |	São tabs sem preenchimento
nav-pills |	São tabs com preenchimento, com aparência de botões
nav-pills nav-stacked |	Somam as características da classe nav-pills, porém de forma vertical.

Acessem o navegador para visualizar os modelos e entenderem melhor as diferenças.

### Utilizando as Tabs

```html
<main>
    <section>
        <div class="container">
            <div class="row">
                <h1>Usage</h1>
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#home" aria-controls="home" data-toggle="tab">Home</a></li>
                    <li><a href="#images" aria-controls="images" data-toggle="tab" >Images</a></li>
                    <li><a href="#blog" aria-controls="blog" data-toggle="tab" >Blog</a></li>
                </ul>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">Home</div>
                    <div role="tabpanel" class="tab-pane" id="images">Images</div>
                    <div role="tabpanel" class="tab-pane" id="blog">Blog</div>
                </div>
            </div>
        </div>
    </section>
</main>
```

Para criarmos os conteúdos de cada tab, devemos criar uma div, de preferência logo abaixo das tabs, com uma classe tab-content. Dentro desta div, criaremos uma div para cada tab. Estas divs internas terão a classe tab-pane.

Utilizaremos a classe active para informar qual conteúdo estará ativo, inicialmente. Em nosso exemplo, a tab home se encontra com a classe active, portanto o conteúdo home, também, deverá conter a classe active. Vocês definem qual tab estará ativa, quando o navegador renderizar o código.

Notem que a ligação entre tab e conteúdo é feita através dos ids e aria-controls. Isso significa que o id do conteúdo deve ser igual ao id e aria-controls da âncora, que se encontram nas tabs. É desta forma que o Bootstrap liga a tab ao seu conteúdo correspondente.

O atributo role="tabpanel", também serve para atender a semântica do HTML, da mesma forma que nas tabs.

Agora que já sabem utilizar tabs, vocês podem criar mais conteúdo e mais tabs, para praticarem. Criem uma grid dentro do conteúdo de cada tab. Isso fará com que vocês entendam, cada vez mais, as funcionalidades do Bootstrap.

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


