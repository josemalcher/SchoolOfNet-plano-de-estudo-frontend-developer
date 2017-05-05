# HTML 5

---

## <a name="indice">índice</a>

- [Introdução](#parte1)
- [Estrutura básica](#parte2)
- [Compatibilidade](#parte3)
- [Metadados]($parte4)
- [Semântica e definição do cabeçalho](#parte5)
- [Organização do CSS e criação de Sections](#parte6)
- [Trabalhando com conteúdo relacionado - Aside](#parte07)
- [Rodape - Footer](#parte08)
- [Imagem e Legenda](#parte09)
- [Tipos de entradas - color, data, datatime e email](#parte10)
- [Month - Number - Range](#parte11)
- [Search - Time - Url - Week](#parte12)
[](#parte13)
[](#parte14)
[](#parte15)
[](#parte16)
[](#parte17)
[](#parte18)

---

## <a name="parte1">Introdução</a>

Sejam bem-vindos ao conteúdo de HTML5 da School of Net.

Falaremos sobre HTML5, que é a mais recente evolução do padrão que define o HTML. O termo representa dois diferentes conceitos:

- Uma nova versão da linguagem HTML, com novos elementos, atributos e comportamentos.
- Conjunto maior de tecnologias, que permite o desenvolvimento de aplicações e web sites, mais diversos e poderosos.

Alguns assuntos que abordaremos

- SEMÂNTICA QUE PERMITE DESCREVER, MAIS ESPECIFICAMENTE, O SEU CONTEÚDO.
- QUESTÕES SOBRE CONECTIVIDADE, OU SEJA, FORMAS MODERNAS E INOVADORAS DE COMUNICAÇÃO COM SERVIDORES.
- FUNCIONALIDADE OFFLINE E ARMAZENAMENTO, QUE O HTML5 OFERECE, PERMITINDO QUE PÁGINAS WEB ARMAZENEM DADOS PARA EXIBIÇÃO OFFLINE. ESTE ARMAZENAMENTO É TODO DO LADO DO CLIENTE.
- FALAREMOS SOBRE MULTIMÍDIAS, QUE VIABILIZAM A UTILIZAÇÃO DE ÁUDIOS E VÍDEOS, DE FORMA PRIMOROSA, NA WEB ABERTA.
- GRÁFICOS E EFEITOS 2D E 3D, VIABILIZANDO UM LEQUE, DIVERSIFICADO, DE OPÇÕES PARA REPRESENTAÇÕES GRÁFICAS.
- GANHO DE PERFORMANCE E INTEGRAÇÕES, OFERECENDO UMA MELHOR UTILIZAÇÃO DA MÁQUINA DO USUÁRIO, QUE ACESSA O NAVEGADOR.
- ACESSO AO DISPOSITIVO QUE VIABILIZA A UTILIZAÇÃO DE DIVERSOS MÉTODOS E DISPOSITIVOS DE ENTRADA E SAÍDA.
- ESTILIZAÇÃO, PERMITINDO AOS AUTORES A ESCRITA DE TEMAS MAIS SOFISTICADOS.
- O HTML 5 abrange desde a criação de sites web, quanto a criação de dispositivos móveis.

Tudo que passarmos neste conteúdo será de forma bem simples, para que vocês possam entender e fixar o conceito da forma mais fácil possível.

Os novos recursos do HTML5 permitem uma maior indexação. A nova semântica do HTML5, além de proporcionar uma visualização mais limpa, mantém o código organizado e padronizado.

Esta, é apenas uma introdução, no próximo módulo iniciaremos com os conceitos principais e começaremos a praticar.

A dica que podemos dar é que, pratiquem junto com a gente, criem seus próprios exemplos e, de preferência, criem exemplos próprios, para fixarem melhor.

[Voltar ao Índice](#indice)

---

## <a name="parte2">Estrutura básica</a>

Após a introdução, passada no módulo anterior, gostaríamos de reforçar que, o HTML5 é a mais nova versão do HTML e oferece diversas novas funcionalidades, além de facilitar e potencializar as suas aplicações web, facilitando a interação com o usuário.

Além de ser uma versão mais nova do HTML, ele traz o conceito de melhorar a aplicação. Além de todas as funcionalidades e melhorias, o HTML 5 trouxe um grande recurso de armazenamento de dados, no lado cliente, que possibilita a navegação de um site offline e melhora o desempenho no servidor.

Para resumir, podemos dizer que o HTML5 nos revela um mundo de possibilidades, muito maior do que antigamente, melhorando a vida do desenvolvedor.

Para iniciarmos os estudos, vamos entender a estrutura básica para a criação de uma página em HTML5.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title of the document</title>
</head>
<body>
    Content of the document...
</body>
</html>
````
O primeiro passo é informar ao navegador que estamos trabalhando com o HTML5, e esta á a função do <!DOCTYPE html>.

Em seguida, basta abrir a tag html, onde definimos a linguagem. A tag html engloba o restante da estrutura.

Dentro desta estrutura básica, temos o cabeçalho(head), onde definimos a codificação da página, que será UTF-8 e também o título.

Por último, temos o body que é responsável por englobar todo conteúdo que a página possuir.

Esta é uma estrutura bem simples. Falaremos de muitas outras tags e estruras para o desenvolvimento de uma página mais complexa. Passaremos, também, os novos conceitos.

No próximo módulo, começaremos a falar, mais detalhadamente, de cada elemento da nossa estrutura. Falaremos mais sobre os possíveis metadados que podemos utilizar, melhorando o posicionamento da página em relação aos motores de buscas, como o Google.

Trabalharemos bastante com semântica, para que os motores de busca possam indexar, da melhor forma, as nossas aplicações.

Falaremos sobre compatibilidade entre navegadores. Os navegadores mais atuais já reconhecem o HTML5, mas quando estamos desenvolvendo alguns sistemas, temos que levar em consideração as pessoas que ainda utilizam os navegadores antigos e desatualizados. Faremos com que estes navegadores, também, reconheçam o HTML 5, para que nossa aplicação não fique toda quebrada na tela do usuário.

[Voltar ao Índice](#indice)

---

## <a name="parte3">Compatibilidade</a>

Como falamos, no módulo passado, a maioria dos navegadores modernos, já reconhecem o HTML 5, nativamente. Existem alguns navegadores, não atualizados, que ainda não o reconhece.

Quando um navegador não reconhece qualquer elemento que seja novo, ele trata como código inline. Podemos ensinar o navegador antigo a reconhecer estes elementos, que para ele, são novos, permitindo que o recurso do HTML 5 tenha seu papel garantido em qualquer navegador. Para isso, utilizaremos o CSS.

Para começarem a praticar, criem uma pasta para o projeto. Em seguida, criem um arquivo chamado index.html, dentro desta pasta. Este será nosso arquivo de exemplos. Desta forma, vocês poderão acompanhar a evolução dos módulos.

```html
<style>
    header, section, footer, nav, main, article, figure {
        display: block;
    }
</style>
```
O código acima, garante que os navegadores antigos reconheçam os novos elementos do HTML 5, como blocos e não mais in line, como anteriormente.

Criar elementos personalizados
Podemos criar elementos personalizados, utilizando o javascript.

```
<script>
    document.createElement("myTag");
</script>
```
Observem que utilizamos o método createElement para criar uma tag personalizada, onde podemos colocar o nome que quisermos. Após a criação da tag, podemos estilizar com o css. Vejam no exemplo abaixo:

```
<style>
    header, section, footer, nav, main, article, figure {
        display: block;
    }
    myTag{
        display: block;
        bachground-color: #ddd;
        padding: 50px;
        font-size: 30px;
    }
</style>
```

Depois, basta que utilizemos, dentro da tag body, o nosso elemento criado e estilizado.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title of the document</title>
</head>
<body>
    Content of the document...

    <myTag></myTag>

</body>
</html>
```

Assim, já teremos o resultado esperado no browser. Façam as alterações acima, no arquivo index.html e depois acessem o navegador, para visualizar.

```
html5_createTag
```

Está tudo muito lindo, tudo funcionando, mas os navegadores antigos não reconhecem esta forma de criação de novos elementos. Para isso, foi criado um arquivo de ativação, via Javascript. Vocês deverão adicionar, dentro da tag head, o código abaixo:

```
<!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

Fazendo isso, estamos ativando o reconhecimento destes novos recursos, apenas, nos navegadores do Internet Explorer abaixo da versão 9. Isso acontece porque os novos navegadores reconhecem este código, como um comentário. Ele não executará a chamada do arquivo javascript. Os navegadores antigos não reconhecerão os comentários e incluirão o arquivo.

Nossa dica é que copiem este código, em algum local, ou decorem, para utilizarem em todos os projetos.

[Voltar ao Índice](#indice)

---

## <a name="parte4">Metadados</a>

Metadados são um conjunto de informações a respeito da página e do conteúdo, nela publicada. Estas informações são utilizadas por motores de buscas ou robôs, que as utilizam para saber o conteúdo principal da página e depois exibe para os usuários que estão pesquisando.

Estes dados são invisíveis para o usuário, porque ficam dentro da tag head, da nossa estrutura.

Criaremos alguns dos principais metadados e depois comentaremos sobre alguns deles:

```
    <meta charset="UTF-8">
    <meta name="keywords" content="HTML, SON, School of net, HTML basic">
    <meta name="description" content="Learning to work with HTML 5">
    <meta name="author" content="Guilherme Ferreira">
    <meta name="robots" content="index, follow">
    <!-- <meta name="robots" content="noindex, nofollow"> -->
```

charset, já informamos que é o tipo de codificação da página.

keywords, são palavras-chave que, antigamente, mecanismos de busca dariam ênfase, durante as buscas dos usuários. Atualmente, elas não tem tanta força como antes. Isso ocorreu pelo fato de muitos usuários adicionarem palavras-chave em excesso. Muitas vezes, até palavras que não tinham relação com o setor de atuação do site. Isso fez com o que os motores de busca evoluíssem e não levassem em consideração as keywords.

Hoje em dia, os motores de busca priorizam a criação de conteúdos novos e palavras que utilizamos nos conteúdos.

description serve, também, para os buscadores poderem apresentar um breve resumo da página que foi pesquisada. Quando compartilhamos uma página, os recursos de compartilhamento buscarão esta informação. Os buscadores juntarão, principalmente, a tag title com o metadado description, para formar um breve resumo.

author, indicam o nome do autor do documento ou página.

robots, indicam se os motores de busca poderão indexar o seu site ou não e, se permitirão buscas dos links, presentes no site. O primeiro parâmetro é sobre indexação e o segundo é a permissão de exposição dos links do site. No exemplo, colocamos as duas opções possíveis e comentamos a menos utilizada.

Fora estes metadados, existem alguns que são específicos para cada rede social ou plataforma. Existem os metadados do Facebook, Twitter e até mesmo o Google. Mas, não é nosso objetivo. Vocês podem ler mais sobre os metadados, caso se interessem.

[Voltar ao Índice](#indice)

---

## <a name="parte5">Semântica e definição do cabeçalho</a>
Semântica é um dos conceitos mais importantes que o HTML 5 trouxe de novidade para o mundo web, que serve para padronizar as estruturas.

Podemos dizer que, semântica é um padrão de marcação que facilita os navegadores reconhecerem qual tipo de conteúdo está sendo exibido. Podemos definir: cabeçalho, rodapé, conteúdo principal, artigos, entre outros. Os elementos de marcação são:

- HEADER
- SECTION
- FOOTER
- NAV
- ASIDE
- MAIN
- ARTICLE
- FIGURE

Antigamente, as pessoas não deixavam de marcar os blocos dos sites, porém, marcavam com o nome que queriam e isso dificultava para os motores de buscas. Por este motivo o HTML 5 decidiu padronizar estas marcações. Se todos marcarem os blocos com os mesmos nomes, o mecanismo de busca consegue melhorar seu algoritmo e otimizar as buscas.

Vejam como foi a evolução dos códigos:

|HTML 4 | HTML 5 |
|---|---|
| ```div class="header">``` |	```<header>``` |
| ```<div class="nav">``` |	```<nav>``` |
| ```<div class="section">``` | 	```<section>``` |
| ```<div class="article">``` |	```<article>``` |
|```<div class="aside">``` |	```<aside>``` |
|```<div class="footer">``` |	```<footer>``` | 



Estamos exemplificando, levando em consideração que o desenvolvedor estivesse utilizando o mesmo nome que a tag atual, porém não é bem o que acontecia. Alguns colocavam nomes que não eram intuitivos e que somente ele conhecia.

Criando nosso header

```html
<header>
    <h1>Main title</h1>
    <h2>Secondary title</h2>
    <nav>
        <ul class="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
```
Notem que utilizamos as tag header para englobar todo cabeçalho. Utilizamos h1 para título principal, h2 para título secundário e depois a tag nav, para criação do menu.

Façam, também, no arquivo index.html e depois acessem o navegador para conferirem o resultado.

[Voltar ao Índice](#indice)

---

## <a name="parte6">Organização do CSS e criação de Sections</a>

Veremos como criar uma section no HTML 5. Esta tarefa não é complicada.

Primeiro, criem uma pasta, na raiz do projeto, chamada css. Dentro desta pasta, criem um arquivo chamado style.css e dentro deste arquivo, coloquem o conteúdo abaixo. Não esqueçam de remover as tags style, pois arquivos de css não precisam das mesmas.

```
<style>
    header, section, footer, nav, main, article, figure {
        display: block;
    }
    myTag{
        display: block;
        bachground-color: #ddd;
        padding: 50px;
        font-size: 30px;
    }
</style>
```

Após termos adicionado o conteúdo acima, no arquivo style.css, apagaremos o mesmo conteúdo do arquivo index.html e chamaremos este arquivo externo. Para isso, vocês deverão adicionar o seguinte código:

```
<link rel="stylesheet" type="text/css" href="./css/style.css">
```

Desta forma, estamos mantendo o mesmo efeito. Estamos, somente, passando a responsabilidade de estilização para um arquivo externo. Assim, o código fica mais limpo e organizado. Outra vantagem é que, quando trabalhamos com a mesma folha de estilo para várias páginas, como centralizamos em apenas um arquivo, basta alterarmos em, apenas, um arquivo. Se fosse de outra forma, teríamos que alterar arquivo por arquivo.

Outro ponto que precisamos elucidar, antes de continuarmos com as sections, é sobre os scripts. Antigamente, precisávamos informar o tipo do script, dentro da abertura da tag. Com o HTML 5 não precisamos mais. Por padrão, o navegador já entenderá que se trata de um Javascript. Vejam o exemplo abaixo:

|HTML 4 |	HTML 5 |
|---|---|
|```<script type="text/javascript"></script>``` |	```<script></script>``` |

### Sections

A section é o menos específico, dos novos elementos do HTML 5.

Todos os outros servem para um determinado fim, porém, o section, serve para dividir os demais elementos. Em uma section podemos ter todos os outros elementos sendo utilizados, ou seja, podemos ter um header dentro de uma section, ter, também, um footer dentro de uma section.

Desta forma, podemos subdividir o projeto em sections, sem problema algum. O importante é mantermos o código, sempre, bem dividido e organizado.

A diferença da section e da div é que, a div serve para dividir qualquer elemento e a section foi criada para dividir os próprios elementos do HTML 5. Nada impede de utilizarem divs. Vocês podem utilizar melhor as sections, porque, semanticamente, estarão trabalhando da forma mais correta.

```html
<section>
    <article>
        <header>
            <h1>Title of a content</h1>
            <p>Description of contents...</p>
        </header>
        ... contents ...
        <footer>
            <small>
                <a href="news.html">View more...</a>
            </small>
        </footer>
    </article>
</section>
```

Notem que subdividimos nossa section. Utilizamos um article com header e footer para que comecem a entender que, cada tag tem seu papel específico, dentro do contexto em que se encontra.

Utilizamos a tag header para o cabeçalho do documento principal, mas isso não quer dizer que não possamos utilizar a tag header, novamente, para delimitar o cabeçalho de qualquer outra section.

Poderíamos, também, ter adicionado uma tag aside. Deixaremos para o próximo módulo.

[Voltar ao Índice](#indice)

---

## <a name="parte07">Trabalhando com conteúdo relacionado - Aside</a>

Se acessarem o browser, verão que não temos nada muito bonito sendo apresentado. Não se preocupem, o nosso intuito, quando criamos as marcações com HTML 5 e seus recursos, é somente a semântica e a boa prática de marcação.

Desta maneira, nossas aplicações serão priorizadas, durante as pesquisas, porque os motores de busca indexarão melhor a aplicação.

O estilo, depois podemos criar, da maneira que quisermos. Nosso foco, neste conteúdo, é deixarmos a aplicação com a melhor estrutura possível e dentro dos padrões de desenvolvimento. Isso quer dizer que o navegador estará esperando uma estrutura deste tipo e caso não encontre o seu site, ou aplicação, já estará um ponto atrás das demais.

O elemento aside tem a função de mostrar conteúdos que fazem referência ao conteúdo principal. Podendo ser, desde simples informações até blocos de navegações e publicidades.

Vamos ao exemplo, depois comentamos:

```html
    <main>
        <section>
            <article>
                <header>
                    <h1>Title of a content</h1>
                    <p>Description of contents...</p>
                </header>
                ... contents ...
                <footer>
                    <small>
                        <a href="news.html">View more...</a>
                    </small>
                </footer>
            </article>
        </section>
        <aside>
            <h3>Sidebar</h3>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </aside>
    </main>
```

Adicionamos uma tag main, para delimitarmos o conteúdo principal. Lembrando que esta tag não deve se repetir na mesma página porque devemos ter apenas uma setor principal na página.

Depois, mantivemos o section, criado na aula anterior, e em seguida, criamos a tag aside. Desta forma, os motores de busca identificarão que, na tag aside, existe um conteúdo relacionado a section que está acima. Semanticamente, estamos trabalhando da forma correta e, teoricamente, o aside deveria estar ao lado do conteúdo, pois se trata de uma sidebar.

Todos os elementos estão sendo tratados como blocos, pois definimos no css. O navegador colocará cada um em uma linha. Depois de adicionarem o código acima, no arquivo index, acessem o navegador para conferirem.

Como queremos que seja uma sidebar e que o conteúdo do aside fique do lado direito, devemos alterar isso no css. Vejam o código abaixo:

```
main section, main aside {
    display: inline-block;
}
```

Adicionem este conteúdo no arquivo style.css e já teremos o resultado esperado. Acessem o navegador para conferirem, novamente.

Um exemplo mais real seria imaginarem que o artigo publicado na section, pertencesse a uma categoria Esporte e no aside poderíamos listar mais 3 notícias da mesma categoria, por exemplo. É para isso que serve o aside, para relacionar conteúdos de mesmo tema ou categoria, basta que sejam relacionados de alguma forma.

[Voltar ao Índice](#indice)

---

## <a name="parte08">Rodape - Footer</a>

Como o próprio título diz, o footer representa o rodapé da página ou de qualquer outro contexto que ele estiver inserido.

Este elemento pode conter informações relacionadas ao autor, direitos reservados ou blocos de navegação.

Criando conteúdo do footer

```html
<footer>
    <p>School of Net</p>
    <small>&copy All rights reserve</small>
</footer>
```

Assim, já temos o nosso rodapé funcionando e estruturado. Basta estilizarem, caso queiram. Este elemento é muito simples, como todos os outros.

Voltamos a repetir, muitos acreditam que nada mudou do HTML 4 para o 5, dizem que é exatamente o que faziam antes com as divs. Acreditem, a web está se voltando para um futuro bem mais estruturado.

Por mais que pareça não mudar nada, utilizem as tags do HTML 5 para a criação de todos os projetos, porque fará a diferença em um futuro bem próximo e, também, no que diz respeito a mecanismos de busca. Os sites nos padrões antigos, por mais bonitos que estejam, e bem estruturados, ficarão para trás em relação aos novos, que as vezes, se encontram até mais simples.

Caso as aplicações estejam nos padrões de desenvolvimento, vocês poderão criar recursos externos para lerem estas páginas e criarem estatísticas. Porque a ferramenta conseguirá identificar, facilmente, onde está o cabeçalho da página, o conteúdo principal. Verificará se existem artigos, se os artigos tem cabeçalho e rodapé e muito mais.

Isso quer dizer que estamos caminhando para um controle muito maior de todas as aplicações.

[Voltar ao Índice](#indice)

---

## <a name="parte09">Imagem e Legenda</a>

Falaremos, em primeiro lugar, sobre a semântica para definição de imagens no HTML 5.

```html
<main>
    <section>
        <article>
            <header>
                <h1>Title of a content</h1>
                <p>Description of contents...</p>
            </header>
           Here's an introduction to the text of the content...
           <figure>
               <img src="img/figure.jpg" alt="Description of the Figure">
               <figcaption>Description of the Figure</figcaption>
           </figure>
            <footer>
                <small>
                    <a href="news.html">View more...</a>
                </small>
            </footer>
        </article>
    </section>
    <aside>
        <h3>Sidebar</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
        </ul>
    </aside>
</main>
```

Colocamos o código inteiro para que vocês possam ver o contexto em que a imagem foi inserida.

Observem que criamos uma pasta chamada img, na raiz do projeto, e dentro desta pasta colocamos uma imagem. Façam isso e podem escolher a imagem que quiserem.

Agora vamos falar sobre o elemento figure, que faz parte da semântica para imagens no HTML 5.

Adicionamos as tags figure e logo após a tag img, com o caminho da imagem, no atributo src, e uma descrição no atributo alt.

Logo após, adicionamos as tags figcaption, que serve para aplicações de inclusão social, que conseguem transformar este figcaption em áudio. Assim, os deficientes visuais conseguem interagir com o site e saber o que está acontendo nas imagens adicionadas.

O HTML 5 tem esta vantagem de estar se adequando para deficientes e é muito importante estarem desenvolvendo da maneira correta e incluindo todos os recursos, disponíveis, enriquecendo a aplicação.

Além de todas estas vantagens, nunca esqueçam que, os motores de busca estarão indexando o site, melhor do que os outros sites, que não utilizam todos estes elementos, porque o site, semanticamente, estará perfeito.

[Voltar ao Índice](#indice)

---

## <a name="parte10">Tipos de entradas - color, data, datatime e email</a>

Falaremos sobre os tipos de entrada no HTML 5.

Os tipos de entrada que a nova versão trouxe são:

- COLOR
- DATE
- DATETIME
- DATETIME-LOCAL
- EMAIL
- NUMBER
- RANGE
- SEARCH
- TEL
- TIME
- URL
- WEEK

Faremos alguns exemplos práticos, para que vocês possam entender, para que servem e como utilizamos, estes novos recursos da linguagem.

Para que o projeto fique dinâmico, criaremos um novo arquivo para identificar os elementos de entrada. Criem um arquivo chamado form.html e adicionaremos um link, para este novo arquivo, no menu do arquivo index.html.

```html
<header>
    <h1>Main title</h1>
    <h2>Secondary title</h2>
    <nav>
        <ul class="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="form.html">Input Types</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
```

Conteúdo do arquivo form.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML 5 Input Types</title>
</head>
<body>
    <header>
        <h1>HTML 5 Input Types</h1>
    </header>
    <section>
        <form>
            <div class="form-group">
                <label>Color</label>
                <input type="color">
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="date">
            </div>
            <div class="form-group">
                <label>DateTime-local</label>
                <input type="datetime-local">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email">
            </div>
            <button>Submit</button>
        </form>
    </section>
</body>
</html>
```

Este é o conteúdo do arquivo form.html. Comentaremos os tipos de entrada.

color - Antigamente precisávamos implementar o color picker utilizando javascript. Agora, podemos ter a entrada de cor, nativamente, nos novos browsers, utilizando somente o HTML 5. Basta adicionarmos a entrada e informar que é do tipo color. Alguns navegadores podem não reconhecer.

date - Da mesma forma que o item anterior, antigamente, precisávamos utilizar javascript para conseguirmos ter suporte a um formato de data, facilitando para o usuário. Agora, temos isso, facilmente, informando o tipo date. A data já vem formatada para o usuário, basta clicar na data que ele gostaria. Anteriormente, o usuário precisaria digitar a data.

datetime-local - Temos a mesma característica do date. Neste recurso temos a possibilidade de adicionarmos as horas, também.

email - O campo de email, aparentemente, não modifica nada, mas se inserirem um email inválido e tentarem submeter o formulário, o HMTL 5 trata isso e dispara uma mensagem de erro. Antigamente, precisávamos fazer este filtro, manualmente.

O modo de usar os tipos de entrada é muito fácil. O importante é notar a facilidade que o HTML 5 nos disponibiliza e o ganho de tempo e produtividade que temos.

Vale lembrar que, caso informem um tipo inválido para o navegador, ele, automaticamente, transformará para tipo texto. Vocês devem testar em mais de um navegador, para saberem se eles reconhecem os recursos que estão utilizando.

Não deixem de acessar o navegador para conferirem o resultado que o código proporcionará.

No próximo módulo falaremos sobre mais alguns tipos de entradas.

[Voltar ao Índice](#indice)

---

## <a name="parte11">Month - Number - Range</a>

Falaremos sobre mais alguns tipos de input, neste módulo.

Utilizaremos o mesmo arquivo form.html, do módulo anterior, para adicionarmos os novos tipos de entrada.

```html
<div class="form-group">
    <label>Month</label>
    <input type="month">
</div>
<div class="form-group">
    <label>Number</label>
    <input type="number" min="0" max="100" step="10">
</div>
<div class="form-group">
    <label>Range</label>
    <input type="text" id="textinput">
    <input type="range" min="0" max="10" step="2" onchange="updateTextInput(this.value);">
    <script>
        function updateTextInput(num){
            document.getElementById("textinput").value = num;
        }
    </script>
</div>
```

Adicionamos, o código acima, bem abaixo do input email e antes do input submit.

Agora, vamos falar sobre eles. Não deixem de acessar o navegador e checar, na prática, o que cada um nos oferece.

month: novo recurso que nos permite informar o mês e o ano que quisermos. Isso pode ser útil para sistemas de arquivos que não precisam do dia para busca. Temos acesso ao mês e ano, diretamente, sem precisarmos tratar os dados.

number: Aparentemente, é uma utilização bem simples. Um campo que só aceitará números. Caso tentem informar um texto, neste campo, o próprio HTML não aceitará. Temos uma validação nativa. Fora estas funcionalidades, temos a possibilidade de configurar o incremento com o atributo step. Podemos adicionar valor máximo e mínimo, para os números adicionados.

range: Este elemento é muito útil quando precisamos limitar valores de uma forma visual. Ele cria uma barra, onde o usuário pode definir valores, arrastando a barra. Neste elemento podemos definir valor mínimo e máximo ou, até mesmo, utilizar o step, que é o incremento.

No input do tipo range, utilizamos o javascript para vocês conseguirem entender o que está acontecendo. Somente o input, não informa os valores, ele mostra somente a barra e vocês não conseguiriam enxergar os exemplos funcionando. Deste modo, criamos um input, do tipo texto, e adicionamos um evento javascript para atualizar o valor deste campo, cada vez que a barra seja modificada de lugar. Assim, ele atualiza os valores e vocês podem enxergar os testes de range, funcionando.

Existe uma forma de não precisar utilizar o javascript para mostrar os dados. Mostraremos nos próximos módulos. Por enquanto, decidimos fazer desta forma, apenas para que possam entender melhor.

Daremos continuidade aos outros elementos, no próximo módulo.

[Voltar ao Índice](#indice)

---

## <a name="parte12">Search - Time - Url - Week</a>

Vejam o código que adicionamos depois do elemento range, do módulo passado.

```html
<div class="form-group">
    <label>Search</label>
    <input type="search">
</div>
<div class="form-group">
    <label>Time</label>
    <input type="time">
</div>
<div class="form-group">
    <label>Url</label>
    <input type="url">
</div>
<div class="form-group">
    <label>Week</label>
    <input type="week">
</div>
```

search: O campo search, aparentemente, é igual a um campo de texto, mas ele cria um botão para limpar o campo de busca. O que é muito bom para o usuário.

time: Este campo possibilita ao usuário definir horários.

url Este campo, assim como o campo de email, filtrará e tratará o valor informado. Caso o usuário não informe uma url, o HTML disparará uma mensagem avisando e não aceitará, até que o usuário informe o valor que estamos pedindo.

week: Este recurso possibilita selecionar as semanas do ano inteiro, por numeração. Em alguns casos, pode ser muito útil.

Chegamos ao final deste assunto, tipos de dados de entrada, que o HTML 5 nos proporciona. A atualização trouxe muitas melhorias e novidades.

Tentamos mostrar os principais campos. Existem alguns que não falamos e, outros que o Chrome ainda não suporta. Vocês podem pesquisar mais sobre este assunto, tendo interesse.

Nosso objetivo é mostrar como os campos funcionam. Não implementaremos nada, com eles.

Façam os testes práticos no navegador, para entenderem cada um deles.


[Voltar ao Índice](#indice)

---

## <a name="parte13"></a>

[Voltar ao Índice](#indice)

---

## <a name="parte14"></a>

[Voltar ao Índice](#indice)

---

## <a name="parte15"></a>

[Voltar ao Índice](#indice)

---

## <a name="parte16"></a>

[Voltar ao Índice](#indice)

---

## <a name="parte17"></a>

[Voltar ao Índice](#indice)

---

## <a name="parte18"></a>

[Voltar ao Índice](#indice)

---