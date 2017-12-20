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


