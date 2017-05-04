# HTML 5

---

## <a name="indice">índice</a>

- [Introdução](#parte1)
- [Estrutura básica](#parte2)
- [Compatibilidade](#parte3)
- [Metadados]($parte4)
- [Semântica e definição do cabeçalho](#parte5)

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
|div class="header"> |	<header> |
|<div class="nav"> |	<nav> |
|<div class="section"> | 	<section> |
|<div class="article"> |	<article> |
|<div class="aside"> |	<aside> |
|<div class="footer"> |	<footer> | 



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