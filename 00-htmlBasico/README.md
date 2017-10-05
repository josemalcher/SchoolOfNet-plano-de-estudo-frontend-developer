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



[Voltar ao Índice](#indice)

---
## <a name="parte5">O que é Tag</a>



[Voltar ao Índice](#indice)

---
## <a name="parte6">Ambiente de desenvolvimento com HTML</a>



[Voltar ao Índice](#indice)

---
## <a name="parte7">Primeiro exemplo de HTML</a>



[Voltar ao Índice](#indice)

---
## <a name="parte8">Paragráfos</a>



[Voltar ao Índice](#indice)

---
## <a name="parte9">Títulos</a>



[Voltar ao Índice](#indice)

---
## <a name="parte10">Centralização e quebra de linha</a>



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
