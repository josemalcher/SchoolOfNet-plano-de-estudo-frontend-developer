# HTML 5

---

## <a name="indice">índice</a>

- [Introdução](#parte1)
- [História da Internet](#parte2)
- [WEB e protocolo HTTP](#parte3)
- [O que é HTML]($parte4)
- [O que é Tag](#parte5)
- [Ambiente de desenvolvimento com HTML](#parte6)
- [Primeiro exemplo de HTML](#parte07)
- [Paragráfos](#parte08)
- [Títulos](#parte09)
- [Centralização e quebra de linha](#parte10)
- [Listas](#parte11)
- [Tabelas](#parte12)
- [Estilização e cores](#parte13)
- [Links](#parte14)
- [Navegação](#parte15)
- [Imagens](#parte16)
- [Formulários](#parte17)
- [Formulário de pesquisa no Google](#parte18)

---

## <a name="parte1">Introdução</a>

Vídeo para motivar!

[Voltar ao Índice](#indice)

---

## <a name="parte2">História da Internet</a>

A história da internet começa com a ARPAnet, que é a percursora da internet atual, tendo sido desenvolvida pela Advanced Research Projects Agency, agência do Departamente de Defesa dos Estados Unidos em 1969. A intenção deles era poder interligar vários pontos numa só rede, e fazendo com que os computadores podessem se comunicar e compartilhar informações sem ter um computador “matriz”, para não se tornarem vulneráveis a possíveis ataques da URSS (na época ainda existente e em um embate ideológico com os Estados Unidos, ‘Guerra Fria’.) No ínicio da década de 70, universidades e outros departamentos de defesa tiveram permissão para se conectar também a ARPAnet, e esta no final da década de 70 tinha crescido tanto que já estava se tornando inadequada, forçando a troca de protocolo para o protocolo TCP/IP,que é o utilizado atualmente. 

Nos anos 80 já se usava o termo internet, e ela começou a ser vista como um ótimo meio de comunicação. Tim Berners-Lee foi o desenvolvedor junto com sua equipe um sistema a base de hipertexto que funcionaria em redes de computadores, visando facilitar a vida dos pesquisadores para compartilhar suas pesquisas entre si. Logo criou-se a World Wide Web, que no início não possuia muitas imagens e sim textos mas em 1992 foi criado o primeiro navegador para internet o Mosaic, que possuía uma interface mais amigável ja que esta gozava de navegação por links e de imagens. 

A evolução da internet despertou o interesse de empresas, que viram nela mais uma possibilidade de marketing, além de ser segura e atualmente de fácil acesso. A interner atualmente é um grande facilitador para as pessoas, oferecendo desde diversão em salas de bate-papo e games até informação suficiente e precisa para pesquisas e trabalhos, essas sendo apresentadas de forma mais resumida, a tornando mais atraente do que um livro aos que buscam tais informações

Fonte(s): SPINFOR

[Voltar ao Índice](#indice)

---

## <a name="parte3">WEB e protocolo HTTP</a>

Computadores conectados à Web são chamados clientes e servidores (clients e servers). Um diagrama simplificado de como eles interagem com requisições (requests) e respostas (responses) parece algo do tipo:

![WEb Cliente-Servidor](https://raw.githubusercontent.com/josemalcher/SchoolOfNet-plano-de-estudo-frontend-developer/master/00-htmlBasico/img/Client-server.jpg)

* Clientes são os usuários típicos da Web conectados à Internet (por exemplo, seu computador conectado ao seu Wi-Fi, ou seu smartphone conectado à sua rede móvel) e programas de acesso à Web disponíveis nesses aparelhos (geralmente um browser como Firefox ou Chrome).
* Servidores são computadores que guardam páginas ou aplicativos. Quando o dispositivo de um cliente quer acessar uma página, uma cópia dela é baixada do servidor à máquina do cliente para ser mostrada no browser.

### Além do cliente e do servidor, nós precisamos dizer oi para:

* Sua conexão de Internet: Permite que você mande e receba dados da Web. É basicamente como a rua entre sua casa e a loja.
* TCP/IP: Transmission Control Protocol e Internet Protocol são protocolos de comunicação que definem como os dados viajam pela Web. Isso é como os mecanismos de transporte que te permitem ir ao shopping, fazer um pedido e comprar. Você pode andar e comprar o que você quer, mas nesse caso vamos imaginar que você ligue para a loja, pague seu pedido pelo telefone e espere pela entrega.
* DNS: Domain Name Servers são como listas de endereços para sites. Quando você digita um endereço web no seu navegador, este procura o real endereço da página web no servidor DNS antes de poder lhe entregar a página. O navegador precisa encontrar em qual servidor web a página está hospedada, para que ele mande mensagens HTTP para o lugar certo (veja abaixo). Isso é como pesquisar o endereço e o telefone da loja para que você possa entrar em contato.
* HTTP: Hypertext Transfer Protocol é um protocolo de aplicação que define uma linguagem para clientes e servidores conversarem entre si. É como a linguagem que você usa para fazer seu pedido e falar com a pessoa que está entregando seu pedido.
* Arquivos do componente: Um website é feito de muitos arquivos diferentes, que são diferentes partes daquilo que você comprou na loja. Esses arquivos são divididos em dois tipos principais:
    * Arquivos de Código: Websites são feitos primariamente de HTML, CSS e JavaScript, mas você vai encontrar outras tecnologias depois.
    * Assets: Esse é o nome coletivo para todas as outras coisas que compõem um website, como imagens, música, vídeo, documentos do Word e PDFs

### DNS explicado

Endereços de internet reais não são legais, textos fáceis de lembrar que você digita na sua barra de endereços para achar seus sites favoritos. Eles são conjuntos de números, como esse: 63.245.217.105.

Isso é chamado endereço IP, e representa um local único na Web. No entanto, não é fácil de lembrar, é? É por isso que o Domain Name Service foi inventado. Esses são servidores especiais para relacionar um endereço web digitado no navegador (como "mozilla.org") para o endereço real do website (IP).

Websites podem ser alcançados diretamente pelo seu endereço IP. Tente acessar o site do Mozilla digitando 63.245.217.105 na barra de endereços em uma nova aba do navegador.

Pacotes?Edit

Anteriormente nós usamos o termo "pacotes" para descrever o formato que os dados são enviados de servidor para o cliente. O que nós queremos dizer? Basicamente, quando dados são enviados pela Web, são enviados milhares de pequenos pedaços, para que muitos usuários possam baixar o mesmo site ao mesmo tempo. Se os site são enviados em pedaços grandes, somente um usuário poderia baixar de cada vez, o que obviamente poderia fazer da Web um meio pouco eficiente e não muito divertido de se usar.

FONTE: https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/Como_a_Web_funciona

O protocolo de transferência de hipertexto (HTTP – HyperText Transfer Protocol) é o protocolo padrão para a Web. Através dele, os navegadores requisitam as páginas da Web e as recebem. Dessa forma, o HTTP define, entre outras formalidades, como são requisitadas as páginas da Web, como são enviados os dados que o usuário insere em formulários e como o servidor envia mensagens de erro para o navegador do usuário. No entanto, como o HTTP é um protocolo baseado em texto, ou seja, toda a informação transmitida está em texto, os dados do usuário e do servidor podem ser interceptados ou alterados no meio do caminho.

Com o uso do HTTPS, que é o HTTP seguro, adiciona-se alguns princípios de segurança, como confidencialidade, integridade e autenticação. Por confidencialidade, entende-se que a mensagem só é lida pelo destinatário real da mensagem. A integridade representa que a mensagem não foi alterada e o princípio da autenticação prova que o servidor é realmente quem diz ser. Nesse artigo, apresenta-se, portanto, os mecanismos utilizados pelo HTTPS para atingir esses três princípios básicos.
A maioria das explicações resume o HTTPS como um HTTP com o SSL (Secure Sockets Layer) ou, seu sucessor, o TLS (Transport Layer Security). TLS ou SSL são camadas de segurança que fornecem confidencialidade e integridade. No entanto, a autenticação dos sites da Web é feita pelos certificados e pela infraestrutura de chaves públicas da Internet. No entanto, neste artigo, abordaremos as questões mais conceituais. A base do TLS/SSL e dos certificados da Internet é a criptografia.

Para a construção de um Website com HTTPS, o administrador do site precisa criar um par de chaves, uma pública e uma privada. Assim, quando um usuário solicita uma conexão com esse site, o servidor envia a sua chave pública para o usuário. De posse da chave pública, o usuário pode se comunicar com o servidor, garantindo que todas as mensagens enviadas para o servidor somente serão lidas pelo servidor, pois apenas o servidor possui a chave privada. Basta, para isso, que o navegador do usuário encripte todas as requisições e decripte as respostas recebidas com a chave pública do servidor.

FONTE: http://www.techtudo.com.br/artigos/noticia/2012/07/qual-a-diferenca-entre-http-e-https.html 

[Voltar ao Índice](#indice)

---
## <a name="parte4">O que é HTML</a>

HTML é uma das linguagens que utilizamos para desenvolver websites. O acrônimo HTML vem do inglês e significa Hypertext Markup Language ou em português Linguagem de Marcação de Hipertexto.

O HTML é a liguagem base da internet. Foi criada para ser de fácil entendimento por seres humanos e também por máquinas, como por exemplo o Google ou outros sistemas que percorrem a internet capturando informação.

### Quem criou o HTML?
Tim Berners-Lee. Esse é o nome do homem que criou o HTML. Ele criou o HTML para a comunicação e disseminação de pesquisas entre ele e seu grupo de colegas. O HTML ficou bastante conhecido quando começou a ser utilizada para formar a rede pública daquela época, o que se tornaria mais tarde a internet que conhecemos hoje.

### O que são as tags do HTML?
O HTML é uma linguagem baseada em marcação. Nós marcamos os elementos para mostrar quais informações a página exibe. Por exemplo, um título importante. Aquele título do artigo, da manchete do site, nós marcamos com uma tag/elemento chamado H1.

Todo HTML começa do mesmo jeito. Não há segredos aqui. Você pode simplesmente copiar em algum lugar para usar esse código toda vez iniciar um novo HTML.

```html
<!DOCTYPE html>

<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>Título da página</title>
</head>
<body>
 ... aqui vai todo o codigo HTML que faz seu site...
</body>
</html>
```

A primeira linha se chamada DOCTYPE. O Doctype avisa aos browsers, robôs de busca, leitores de tela e outras coisas que tipo de documento e aquele que eles estao prestes a carregar. Existem outros códigos que podemos carregar, por exemplo XML. Por isso o Doctype avisa o browser para que ele saiba como se comportar ao ler o código.

Depois começamos com a Tag HTML. Isso quer dizer que todo o que estiver entre as tags é escrito em HTML. Ao lado da palavra HTML tem um atributo (explico o que são atributos mais pra frente) chamado lang, onde indicamos qual o idioma do texto que escreveremos.

Logo após a tag html temos a tag . Na tag Head nós indicamos o título do documento e indicamos a tabela de caractéres que o browser deve usar para renderizar seu texto. Também não se preocupe com isso agora.

A tag &lttitle> é muito importante. É com ela que você indica o título do documento. O Google e outros sistemas de busca utilizam essa tag para indicar em suas buscas o título da págin. Isso é muito importante para que você apareça bem nas buscas.

Logo depois da tag de fechamento começamos a tag . Dentro deste elemento é que vamos escrever todo o código HTML do resto do site.

```html
<!DOCTYPE html>

<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>Título da página</title>
</head>
<body>
   <h1>Aqui vai o texto do título</h1>
   <p>Aqui vai o texto do parágrafo. 
   Geralmente parágrafos tem muitas palavras, letras menores que as do título</p>
</body>
</html>
```

FONTE: https://tableless.com.br/o-que-html-basico/

### SOBRE O W3C

O Consórcio World Wide Web (W3C) é um consórcio internacional no qual organizações filiadas, uma equipe em tempo integral e o público trabalham juntos para desenvolver padrões para a Web. Liderado pelo inventor da web Tim Berners-Lee e o CEO Jeffrey Jaffe, o W3C tem como missão Conduzir a World Wide Web para que atinja todo seu potencial, desenvolvendo protocolos e diretrizes que garantam seu crescimento de longo prazo. Para mais informações, contate-nos.

FONTE: http://www.w3c.br/Sobre/MissaoW3C



[Voltar ao Índice](#indice)

---
## <a name="parte5">O que é Tag</a>

Já que o HTML serve para dar significado para a informação, como ele faz isso? Simples: ele marca a informação com as tags.

Por exemplo, para falarmos que um título é um título colocamos um pedaço de texto entre uma tag chamada H1. Veja o código abaixo:

```html
<h1>Aqui vai o texto que é um título</h1>
```

E dessa forma vamos fazendo todos os outros elementos. Um parágrafo, por exemplo:

```html
<p>Aqui vai muito texto, um parágrafo</p>
```

### O que são Tags?

Tags são o conjunto de caracteres que formam um elemento, ou seja, quando nos referenciamos à Tag "p" estamos falando disso: <p>

Existem dois tipos de Tags, as que necessitam de fechamento e as que não necessitam de fechamento.

Para as que necessitam de fechamento, utilizamos o sinal de menor ( < ), seguido do nome do elemento e o sinal de maior ( > ) para abertura. Para fechamento, utilizamos o sinal de menor ( < ), seguido de barra ( / ), nome do elemento e o sinal de maior ( > ).

```html
    <!-- Exemplo de elemento que necessita de fechamento -->
    <p>A tag do elemento de parágrafo necessita de fechamento.</p>
```

Os elementos que não necessitam de fechamento, também conhecidos como elementos vazios, somente utilizamos o sinal de menor ( < ), seguido do nome do elemento e o sinal de maior ( > ).

```html
    <!-- Exemplo de elemento vazio -->
    Texto utilizando<br>
    quebra de linha
```

### O que são Elementos?

Elementos são formados a partir de Tags e entre as Tags é que está o conteúdo do Elemento.

Se quisermos exibir um parágrafo em um site utilizamos a Tag <p> que semanticamente quer dizer que o conteúdo que se espera nesse Elemento é um parágrafo.

Alguns exemplos:

```html
    <!-- A Tag <label> define que o conteúdo do Elemento é uma label (rótulo)  -->
    <label>Informe o seu nome</label>
```

```html
    <!-- A Tag <address> define que o conteúdo do Elemento é um endereço (endereços físicos à virtuais)  -->
    <address>
      Este guia é uma iniciativa da comunidade e do Tableless <a href="http://tableless.com.br/contato">www.tableless.com.br</a>
    </address>
```

### Não confunda Tags com Elementos

As Tags servem para marcar onde começam e terminam os Elementos. Já os Elementos são uma parte conceitual/semântica que têm um começo e fim determinados.

Parece uma diferença boba, mas mantenha ela sempre em mente e isso vai fazer toda a diferença no seu entendimento de HTML.

### O que são Atributos?
Atributos são informações que passamos na Tag para que ela se comporte da maneira esperada. Existem atributos globais (que funcionam em todas as Tags) e específicos (que são direcionados para cada Tag, através de especificação).

Os Atributos possuem nome e um valor, existem Atributos que você vai usar praticamente sempre e existem outros que serão mais raros.

#### Atributos globais
Seguem alguns atributos globais importantes e suas descrições simplificadas:

* accesskey
    * Determina uma (ou mais) tecla(s) de atalho para o elemento. Para definir mais de uma tecla, coloque-as separadas por espaço.
* class
    * Determina uma (ou mais) classe(s) para o elemento. Para definir mais de uma classe, coloque-as separadas por espaço.
* draggable
    * Define se um elemento é arrastável ou não.
* hidden
    * Oculta o elemento onde for declarado.
* id
    * É o identificador único do elemento. Somente deve ser declarado um id por elemento. E este id não deve ser repetido na mesma página.
* lang
    * Determina o idioma em que está escrito o conteúdo do elemento.
* style
    * Determina propriedades CSS diretamente no elemento.
* tabindex
    * Organiza os elementos por ordem de tabulação. Deve-se usar valor numérico.
* title
    * Representa um auxílio ao elemento. Semelhante a dica do elemento.

Existem Atributos em que os valores não precisam ser passados entre aspas, mas manter um padrão ajuda você e ajuda quem quer que seja que no futuro tenha que trabalhar com o seu HTML. Portanto, não é uma regra mas uma boa prática você envolver os valores dos Atributos entre aspas.

```html
    <!-- Isso funciona, mas não é recomendável -->
    <a href="http://tableless.com.br" target=_blank>www.tableless.com.br</a>
 
    <!-- Isso funciona e é recomendável -->
    <a href="http://tableless.com.br" target="_blank">www.tableless.com.br</a>
```

### Na prática

Agora que você entendeu separadamente o papel das Tags, Elementos e Atributos, vamos ver um exemplo prático:

```html
    <!-- A Tag <img> define que o conteúdo do Elemento é uma imagem e os atributos que utilizamos são src e alt -->
    <img src="logo.png" alt="HTML 5 Logo" />
```

Analisando o exemplo:
No exemplo acima definimos o caminho onde está a imagem com o Atributo src e utilizamos o Atributo alt para descrever que imagem é essa (a utilização do atributo alt é altamente recomendado, pois, mesmo que a imagem não seja carregada por qualquer motivo, o usuário conseguirá identificar que ali era para ser carregado o logo do HTML5).


FONTE: http://tableless.github.io/iniciantes/manual/html/oquetags.html

[Voltar ao Índice](#indice)

---
## <a name="parte6">Ambiente de desenvolvimento com HTML</a>

ARTIGO: Editor de código gratuito: 8 opções para você escolher o seu - https://www.kinghost.com.br/blog/2017/02/editor-de-codigo-gratuito-8-opcoes-para-voce-escolher-o-seu/

SUBLIME TEXT 3: https://www.sublimetext.com/

[Voltar ao Índice](#indice)

---
## <a name="parte7">Primeiro exemplo de HTML</a>

O documento HTML sempre inicia com o que chamamos de estrutura básica. Esta estrutura é quase que imutável. Sempre será dessa forma e você sempre, sempre começará seu HTML começando por esse código. Geralmente os editores como o Sublime Text já tem atalhos para iniciar os documentos HTMLs com essa estrutura, logo, você não precisa se preocupar em decorá-la, mas é bom que faça. Veja abaixo como ela se inicia:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Olá Mundo - Aula 07</title>
</head>
<body>
    
</body>
</html>
```
É possível compreender o documento em HTML de uma maneira muito simples, através de uma divisão de blocos das tags essenciais, conforme a a seguinte estrutura:

* Definição do documento (doctype)
* Cabeça (head)
* Corpo (body)

### Doctype - Definindo o documento
Uma coisa importante: SEMPRE deve existir o doctype, que é este código <!DOCTYPE html>.

O doctype não é uma tag HTML, mas uma instrução para o navegador e outros programas que podem ler seu site, que o código encontrado ali é um código HTML. Assim eles sabem o que fazer para mostrar seu site da melhor forma possível. Lembre-se: o doctype é OBRIGATÓRIO e deve ser sempre a PRIMEIRA LINHA do seu documento.

### HEAD
Contém informações que não são transpostas visivelmente para o usuário/leitor do documento. São dados implícitos, de uso e controle do documento: vinculação com outros arquivos, aplicação de lógica de programação de scripts e metadados. Na prática, todo o conteúdo do cabeçalho fica delimitado entre a abertura e fechamento tag head.

### BODY
Trata-se do documento em si, ou seja, a informação legível para o usuário/leitor do documento. É todo e qualquer texto que se deseja apresentar, assim como toda e qualquer forma de mídia de saída (imagens, sons, miniaplicativos embutidos, conteúdo multimídia, etc). Além disso, toda a apresentação de entrada de dados (formulários) também se aplica neste seção do documento. Na prática, o corpo do documento é delimitado pelo par de tags <body> e </body>.

Este é o preceito básico que deve estar muito bem claro para você: onde as marcações se aplicam, e quais são os resultados deste modelo. Por exemplo: se vocês deseja informar conteúdo textual para saída legível ao usuário do seu sistema web, esta marcação deverá obrigatoriamente estar no bloco do corpo da página. Ainda: para definir qual o tipo de codificação da página (uma meta informação do documento), esta deve obrigatoriamente estar marcada no cabeçalho do mesmo documento.

Dentro do elemento BODY sua estrutura de página terá os elementos semânticos da construção da sua página, onde serão declarados e identificados cabeçalhos, rodapé, conteúdo principal, etc.

FONTE: http://tableless.github.io/iniciantes/manual/html/estruturabasica.html

[Voltar ao Índice](#indice)

---
## <a name="parte8">Paragráfos</a>

A linguagem HTML considera os parágrafos como blocos de texto. Os navegadores repartem o melhor possível o seu conteúdo na janela, a menos que um atributo NOWRAP ou NOBR seja especificado explicitamente. Dentro de um parágrafo, os espaços, as tabulações e a quebra de linha contam como um só um espaço. Por quebra de linha entende-se o uso da tag <br> para terminar uma linha sem começar um parágrafo. Esta tag pode forçar a quebra de linha onde for preciso na frase por exemplo no meio dela. 

Assim, configuração da página por blocos de texto é realizada através de balizas <p> e </p> e a quebra de linha sem iniciar um parágrafo é realizada graças à baliza <br>.

FONTE: http://br.ccm.net/contents/246-paragrafos-em-html

definições e instruções tag
<P> tag define um parágrafo.

<P> elemento criará automaticamente um espaço antes ou depois. O navegador irá adicionar automaticamente esses espaços, você também pode especificar na folha de estilo.

FONTE: http://www.w3big.com/pt/tags/tag-p.html

```html
<!DOCTYPE html>
<html>
<body>

<p>
This paragraph
contains a lot of lines
in the source code,
but the browser 
ignores it.
</p>

<p>
This paragraph
contains      a lot of spaces
in the source     code,
but the    browser 
ignores it.
</p>

<p>
The number of lines in a paragraph depends on the size of the browser window. If you resize the browser window, the number of lines in this paragraph will change.
</p>

</body>
</html>

```

```html
<!DOCTYPE html>
<html>
<body>

<p>This is a paragraph.
<p>This is a paragraph.
<p>This is a paragraph.

<p>Don't forget to close your HTML tags!</p>

</body>
</html>
```

[Voltar ao Índice](#indice)

---
## <a name="parte9">Títulos</a>

O elemento HTML <title> (Elemento HTML Título) define o título do documento, mostrado na barra de título de um navegador ou na aba da página. Pode conter somente texto e quisquer marcações contidas no texto não são interpretadas.

```html
<!DOCTYPE html>
<html>

<head>
  <title>HTML Reference</title>
</head>

<body>
The content of the document......
</body>

</html>
```

As tags "h1" até "h6" são elementos representam seis níveis de cabeçalhos de seção. "h1" é o nível de seção mais alto e "h6" é o mais baixo.

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```



[Voltar ao Índice](#indice)

---
## <a name="parte10">Centralização e quebra de linha</a>

The HTML Center Element (<center>) is a block-level element that can contain paragraphs and other block-level and inline elements. The entire content of this element is centered horizontally within its containing element (typically, the <body>).

This tag has been deprecated in HTML 4 (and XHTML 1) in favor of the CSS text-align property, which can be applied to the <div> element or to an individual <p>. For centering blocks, use other CSS properties like margin-left and margin-right and set them to auto (or set margin to 0 auto).

FONTE: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/center

```html
<center>This text will be centered.
<p>So will this paragraph.</p></center>

```

Ex:
```html
<div style="text-align:center">This text will be centered.
<p>So will this paragraph.</p></div>
```
EX:
```html
<p style="text-align:center">This line will be centered.<br>
And so will this line.</p>
```
NOTE: Applying text-align:center to a <div> or <p> element centers the contents of those elements while leaving their overall dimensions unchanged.

Outro Exemplo?
```html
<!DOCTYPE html>
<html>
<head>
<style>
h1 {text-align:center;}
p {text-align:center;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

O elemento HTML quebra-de-linha <br> produz uma quebra de linha em um texto (carriage-return).É útil para escrever poemas ou um endereço, onde a divisão de linha é significante.

Não use <br> para aumentar o espaço entre as linhas de texto; para isso use a propiedade CSS margin ou o elemento <p>.

```html
Mozilla Foundation<br>
1981 Landings Drive<br>
Building K<br>
Mountain View, CA 94043-0801<br>
USA
```

#### Differences Between HTML and XHTML

* In HTML, the <br> tag has no end tag.

* In XHTML, the <br> tag must be properly closed, like this: <br />.

[Voltar ao Índice](#indice)

---
## <a name="parte11">Listas</a>



[Voltar ao Índice](#indice)

---
## <a name="parte12">Tabelas</a>



[Voltar ao Índice](#indice)

---
## <a name="parte13">Estilização e cores</a>



[Voltar ao Índice](#indice)

---
## <a name="parte14">Links</a>



[Voltar ao Índice](#indice)

---
## <a name="parte15">Navegação</a>



[Voltar ao Índice](#indice)

---
## <a name="parte16">Imagens</a>



[Voltar ao Índice](#indice)

---
## <a name="parte17">Formulários</a>



[Voltar ao Índice](#indice)

---
## <a name="parte18">Formulário de pesquisa no Google</a>



[Voltar ao Índice](#indice)

---
