# CSS 3

Resumo do curso:

https://www.schoolofnet.com/curso-css3/

---

## Índice

- [Introdução](#parte1)
- [Bordas Arrendodadas](#parte2)
- [Usando imagens em bordas](#parte3)
- [Personalizando backgound](#parte4)
- [Cores e gradiente](#parte5)
- [Sombras em texto e elementos](#parte6)
- [Textos](#parte7)
- [Fontes](#parte8)
- [2D](#parte9)
- [3D](#parte10)
- [Transição](#parte11)
- [Animação](#parte12)
- [Trabalhando com Imagens](#parte13)
- [Criando Botões personalizados](#parte14)
- [Múltiplas colunas](#parte15)
- [Rendimensionar elementos](#parte16)
- [Consulta de mídias](#parte17)
- [Considerações finais](#parte18)

---

## <a name="parte1">Introdução</a>

CSS3 é a segunda mais nova versão das famosas Cascading Style Sheets (ou simplesmente CSS), onde se define estilos para páginas web com efeitos de transição, imagem, e outros, que dão um estilo novo às páginas Web 2.0 em todos os aspectos de design do layout.

### Novidades do CSS3

O CSS3 é extremamente capaz de construir animações que impressionam o mais avançado desenvolvedor web, tanto em 2 como em 3 dimensões. Os mais comuns são os efeitos de rotação, movimento e transição.

Existem, na web, empresas fazendo propaganda utilizando a criatividade e o poder dessa nova era de estilos.

Boas Referências

- [w3schools](https://www.w3schools.com/css/css3_intro.asp)
- [css3.info](http://www.css3.info/)
- [Maujor](http://www.maujor.com/)

[Voltar ao Índice](#indice)

---

## <a name="parte2">Bordas arredondadas</a>


[CSS3 Rounded Corners](https://www.w3schools.com/css/css3_borders.asp)

[Bordas Arredondadas CSS3: Estilizando bordas](http://www.devmedia.com.br/bordas-arredondadas-css3-estilizando-bordas/37210)

[Border-radius: create rounded corners with CSS!](http://www.css3.info/preview/rounded-border/)



[Voltar ao Índice](#indice)

---

## <a name="parte3">Usando imagens em bordas</a>

[Personalização de bordas com imagem](http://www.maujor.com/tutorial/css3-bordas-com-imagens.php)

[CSS3 Border Images](https://www.w3schools.com/css/css3_border_images.asp)

[Border-image: using images for your border](http://www.css3.info/preview/border-image/)


[Voltar ao Índice](#indice)

---

## <a name="parte4">Personalizando backgound</a>

[CSS3 Backgrounds](https://www.w3schools.com/css/css3_backgrounds.asp)

[Multiple Backgrounds with CSS3](http://www.css3.info/preview/multiple-backgrounds/)



[Voltar ao Índice](#indice)

---

## <a name="parte5">Cores e gradiente</a>

[CSS3 Colors](https://www.w3schools.com/css/css3_colors.asp)

[CSS3 Gradients](https://www.w3schools.com/css/css3_gradients.asp)

[Módulo para cores RGBA, HSL e HSLA](http://www.maujor.com/tutorial/css3-modulo-para-cores.php)



[Voltar ao Índice](#indice)

---

## <a name="parte6">Sombras em textos e elementos</a>

CSS3 SHADOWS: https://www.w3schools.com/css/css3_shadows.asp 

```css
#textshadow1{
    text-shadow: 1px 1px;
}

#textshadow2{
    color: white;
    text-shadow: 1px 1px 4px #000000;
}

#textshadow3{
    text-shadow: 1px -13px 6px #000000, 3px 10px 5px #960A0A;
}
#textshadow4{
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px #14D61A, 0 0 5px darkblue;
}

div.card{
    box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

}
div.header1{
    background-color: #00FF7E;
    color: white;
    padding: 10px;
    font-size: 30px;
}
div.container{
    padding: 5px;
}
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS3 - School of Net</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/examples.css">
</head>
<body>
<header>
    <h1 onmouseover="stopRotate()" id="test" style="transform: rotateY(0deg);">School of Net</h1>
</header>
<section>
    <h1 class="title">Color and Gradient</h1>
</section>
<section>
    <div class="row text-center">
        <div class="col-3">
            <h1 id="textshadow1">Text Shadow Effect</h1>
        </div>
        <div class="col-3">
            <h1 id="textshadow2">Text Shadow Effect</h1>
        </div>
        <div class="col-3">
            <h1 id="textshadow3">Text Shadow Effect</h1>
        </div>
        <div class="col-3">
            <h1 id="textshadow4">Text Shadow Effect</h1>
        </div>
    </div>
    <div class="row text-center">
        <div class="col-3">

        </div>
        <div class="col-3">
            <div class="card">
                <div class="header1">
                    <h1>Header</h1>
                </div>
                <div class="container">
                    <p>description</p>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="card">
                <img src="img/water.jpg" alt="water" width="100%">
                <div class="container">
                    <p>description</p>
                </div>
            </div>
        </div>
        <div class="col-3">

        </div>
    </div>

</section>

<script src="js/anim.js"></script>
</body>
</html>
```


[Voltar ao Índice](#indice)

---

## <a name="parte7">Textos</a>

CSS3 Text: https://www.w3schools.com/css/css3_text_effects.asp

```css
.text1{
    white-space: nowrap;
    width: 200px;
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: clip;
}
.text1:hover{
    text-overflow: inherit;
    overflow: visible;
}

.text2{
    white-space: nowrap;
    width: 200px;
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: ellipsis;
}
.text2:hover{
    text-overflow: inherit;
    overflow: visible;
}

.text3{
    white-space: nowrap;
    width: 200px;
    border: 1px solid #000000;
    overflow: hidden;
}
.text3:hover{
    text-overflow: inherit;
    overflow: visible;
}
.text4{
    width: 140px;
    border: 1px solid #000000;
    word-break: keep-all;
}

.text5{
    width: 140px;
    border: 1px solid #000000;
    word-break: break-all;
}

.text6{
    width: 140px;
    border: 1px solid #000000;
    word-wrap: break-word;
}
```
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>CSS3 - School of Net</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/examples.css">
</head>
<body>
<header>
    <h1 onmouseover="stopRotate()" id="test" style="transform: rotateY(0deg);">School of Net</h1>
</header>
<section>
    <h1 class="title">Color and Gradient</h1>
</section>
<section>
    <div class="row">
        <div class="col-3">
            <p class="text1">This is a text test for the course of the School of Net</p>
            <p class="text2">This is a text test for the course of the School of Net</p>
            <p class="text3">This is a text test for the course of the School of Net</p>
        </div>
        <div class="col-3">
            <p class="text4">This is a text test forforfofotforforforfoorrforfor the course of the School of Net</p>
            <p class="text5">This is a text test forforfofotforfordfdfdfdforfoorrforfor the course of the School of Net</p>
        </div>
        <div class="col-3">
            <p class="text6">This is a text test forforfofotforfordfdfdfdforfoorrforfor the course of the School of Net</p>
        </div>
        <div class="col-3">

        </div>
    </div>
</section>

<script src="js/anim.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte8">Fontes</a>

CSS3 fonts: https://www.w3schools.com/css/css3_fonts.asp

```css
@import url(https://fonts.googleapis.com/css?family=Lobster);
@import url(https://fonts.googleapis.com/css?family=Bad+Script);

@font-face {
    font-family: "MyFont";
    src: url(../font/ARDESTINE.ttf);
}

.font1{
    font-family: 'Lobster', cursive;
}

.font2{
    font-family: 'Bad Script', cursive;
}
.font3{
    font-family: 'MyFont';
}
```
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>CSS3 - School of Net</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/examples.css">
</head>
<body>
<header>
    <h1 onmouseover="stopRotate()" id="test" style="transform: rotateY(0deg);">School of Net</h1>
</header>
<section>
    <h1 class="title">Color and Gradient</h1>
</section>
<section>
    <div class="row">
        <div class="col-3">
            <p>Font 1 - Google Fonts</p>
            <p class="font1">This is a text test for the course of the School of Net</p>
        </div>
        <div class="col-3">
            <p>Font 2 - Google Fonts</p>
            <p class="font2">This is a text test for the course of the School of Net</p>
        </div>
        <div class="col-3">
            <p>Font 3 - My Font</p>
            <p class="font3">This is a text test for the course of the School of Net</p>
        </div>
        <div class="col-3">

        </div>
    </div>
</section>

<script src="js/anim.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte9">2D</a>

CSS3 2D Transforms: https://www.w3schools.com/css/css3_2dtransforms.asp

```css
#element{
    width: 200px;
    height: 80px;
    padding: 20px;
    text-align: center;
    font-size: 30px;
    background-color: #1b6d85;
    color: white;
}

.translate {
    -ms-transform: translate(50px,100px); /* IE 9 */
    -webkit-transform: translate(50px,100px); /* Safari */
    transform: translate(50px,100px);
}

.rotate {
    -ms-transform: rotate(20deg); /* IE 9 */
    -webkit-transform: rotate(20deg); /* Safari */
    transform: rotate(20deg);
}

.scale {
    -ms-transform: scale(2,3); /* IE 9 */
    -webkit-transform: scale(2,3); /* Safari */
    transform: scale(2,3);
}

.skewX {
    -ms-transform: skewX(20deg); /* IE 9 */
    -webkit-transform: skewX(20deg); /* Safari */
    transform: skewX(20deg);
}

.skewY {
    -ms-transform: skewY(20deg); /* IE 9 */
    -webkit-transform: skewY(20deg); /* Safari */
    transform: skewY(20deg);
}

.skew {
    -ms-transform: skew(20deg, 10deg); /* IE 9 */
    -webkit-transform: skew(20deg, 10deg); /* Safari */
    transform: skew(20deg, 10deg);
}

/* matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY()): */

.matrix {
    -ms-transform: matrix(1, -0.3, 0, 1, 0, 0); /* IE 9 */
    -webkit-transform: matrix(1, -0.3, 0, 1, 0, 0); /* Safari */
    transform: matrix(1, -0.3, 0, 1, 0, 0);
}
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>CSS3 - School of Net</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/examples.css">
</head>
<body>
<header>
    <h1 onmouseover="stopRotate()" id="test" style="transform: rotateY(0deg);">School of Net</h1>
</header>
<section>
    <h1 class="title">Color and Gradient</h1>
</section>
<section>
    <div class="row">
        <div class="col-3">

        </div>
        <div class="col-3">
            <p class="matrix" id="element">School of Net</p>
        </div>
        <div class="col-3">

        </div>
        <div class="col-3">

        </div>
    </div>
</section>

<script src="js/anim.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte10">3D</a>

CSS3 3D Transforms: https://www.w3schools.com/css/css3_3dtransforms.asp

```css
#element {
    width: 200px;
    height: 80px;
    padding: 20px;
    text-align: center;
    font-size: 30px;
    background-color: #1b6d85;
    color: white;
}

.rotateX {
    -webkit-transform: rotateX(150deg); /* Safari */
    transform: rotateX(10deg);
}

.rotateY {
    -webkit-transform: rotateY(130deg); /* Safari */
    transform: rotateY(130deg);
}

.rotateZ {
    -webkit-transform: rotateZ(90deg); /* Safari */
    transform: rotateZ(90deg);
}

/* perspective */

.p1 {
    position: relative;
    height: 150px;
    width: 242px;
    margin: 50px;
    padding: 10px;
    border: 1px solid black;
    -webkit-perspective: 150px; /* Chrome, Safari, Opera  */
    perspective: 150px;
}

.p2 {
    padding: 50px;
    position: absolute;
    border: 1px solid black;
    background-color: red;
    -webkit-transform: rotateX(45deg); /* Chrome, Safari, Opera  */
    transform: rotateX(45deg);
}

/* transform-style: preserve-3d */

#div1 {
    position: relative;
    height: 200px;
    width: 200px;
    margin: 100px;
    padding: 10px;
    border: 1px solid black;
}

#div2 {
    padding: 50px;
    position: absolute;
    border: 1px solid black;
    background-color: red;
    -webkit-transform: rotateY(60deg); /* Chrome, Safari, Opera */
    -webkit-transform-style: preserve-3d; /* Chrome, Safari, Opera */
    transform: rotateY(60deg);
    transform-style: preserve-3d;
}

#div3 {
    padding: 40px;
    position: absolute;
    border: 1px solid black;
    background-color: yellow;
    -webkit-transform: rotateY(-60deg); /* Chrome, Safari, Opera */
    transform: rotateY(-60deg);

}
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>CSS3 - School of Net</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/examples.css">
</head>
<body>
<header>
    <h1 onmouseover="stopRotate()" id="test" style="transform: rotateY(0deg);">School of Net</h1>
</header>
<section>
    <h1 class="title">3D</h1>
</section>
<section>
    <div class="row">
        <div class="col-3">
        </div>
        <div class="col-3">
            <div id="div1">
                <div id="div2">Shool
                    <div id="div3"> of Net</div>
                </div>
            </div>
        </div>

        <div class="col-3">
        </div>
    </div>
</section>

<script src="js/anim.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte11">Transição</a>

CSS3 Transitions: https://www.w3schools.com/css/css3_transitions.asp

```css
.element1{
    width: 200px;
    height: 30px;
    padding: 20px;
    text-align: center;
    font-size: 30px;
    background-color: #3D647F;
    color: white;
    -webkit-transition: background-color 2s, width 3s;
    transition: background-color 2s, width 3s;
}

.transitions1{
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease;
}
.transitions2{
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
}
.transitions3{
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}
.transitions4{
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}
.transitions5{
    -webkit-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
}
.transitions6{
    -webkit-transition-timing-function: cubic-bezier(0.4,2,0.2,1);
    transition-timing-function: cubic-bezier(0.4,2,0.2,1);
}
.transitions7{
    -webkit-transition-delay: 3s;
    transition-delay: 3s;
}



.element1:hover{
    width: 500px;
    background-color: #0793F3;
}

.element2{
    width: 200px;
    height: 30px;
    padding: 20px;
    text-align: center;
    font-size: 30px;
    background-color: #3D647F;
    color: white;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s; /* Safari */
    transition: width 2s, height 2s, transform 2s;
}

.element2:hover{
    width: 300px;
    height: 300px;
    -webkit-transform: rotate(180deg); /* Safari */
    transform: rotate(180deg);
}
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>CSS3 - School of Net</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/examples.css">
</head>
<body>
<header>
    <h1 onmouseover="stopRotate()" id="test" style="transform: rotateY(0deg);">School of Net</h1>
</header>
<section>
    <h1 class="title">Transição</h1>
</section>
<section>
    <div class="row">
        <div class="col-3">
            <p class="element1">School of Net</p>
            <p class="element1 transitions1">Ease</p>
            <p class="element1 transitions2">Linear</p>
            <p class="element1 transitions3">Ease In</p>
            <p class="element1 transitions4">Ease Out</p>
            <p class="element1 transitions5">Ease In Out</p>
            <p class="element1 transitions6">Cubic Bezier</p>
            <p class="element1 transitions7">Delay</p>

        </div>
        <div class="col-3">
            <p class="element2">School of Net</p>
        </div>

        <div class="col-3"></div>
        <div class="col-3"></div>
    </div>

</section>

<script src="js/anim.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte12">Animação</a>

CSS3 Animations: https://www.w3schools.com/css/css3_animations.asp

```css
.player{
    position: relative;
    -webkit-animation-name: animation2; /* Chrome, Safari, Opera */
    animation-name: animation2;
    -webkit-animation-duration: 4s; /* Chrome, Safari, Opera */
    animation-duration: 4s;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;

}

.player-body{
    width: 0;
    height: 0;
    border-right: 61px solid transparent;
    border-top: 92px solid #39A045;
    border-left: 61px solid #39A045;
    border-bottom: 27px solid #39A045;
    border-top-right-radius: 50px;
    border-top-left-radius: 139px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
}
.player-eye{
    position: absolute;
    left:72px;
    top:27px;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    background-color: white;
    width: 35px;
    height:23px;
    animation: blink 5s linear 1s infinite;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes animation1 {
    from {
        -ms-transform: translate(0,0); /* IE 9 */
        -webkit-transform: translate(0,0); /* Safari */
        transform: translate(0,0);
    }
    to {
        -ms-transform: translate(500px,0); /* IE 9 */
        -webkit-transform: translate(500px,0); /* Safari */
        transform: translate(500px,0);
    }
}

@keyframes animation1 {
    from{
        transform: translate(0,0);
    }
    to{
        transform: translate(500px,0);
    }
}

/* Chrome, Safari, Opera */
@-webkit-keyframes animation2 {
    0%{
        -ms-transform: translate(0,0); /* IE 9 */
        -webkit-transform: translate(0,0); /* Safari */
        transform: translate(0,0);
    }
    25%{
        -ms-transform: translate(100px,50px); /* IE 9 */
        -webkit-transform: translate(100px,50px); /* Safari */
        transform: translate(100px,50px);
    }
    50%{
        -ms-transform: translate(200px,0); /* IE 9 */
        -webkit-transform: translate(200px,0); /* Safari */
        transform: translate(200px,0);
    }
    100%{
        -ms-transform: translate(500px,-50px); /* IE 9 */
        -webkit-transform: translate(500px,-50px); /* Safari */
        transform: translate(500px,-50px);
    }
}


@keyframes animation2 {
    0%{transform: translate(0,0);}
    25%{transform: translate(100px,50px);}
    50%{transform: translate(200px,0);}
    100%{transform: translate(500px,-50px);}
}

@keyframes blink {
    0%{background-color: white}
    98%{background-color: white}
    100%{background-color: #39A045}
}
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>CSS3 - School of Net</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/examples.css">
</head>
<body>
<header>
    <h1 onmouseover="stopRotate()" id="test" style="transform: rotateY(0deg);">School of Net</h1>
</header>
<section>
    <h1 class="title">Animação</h1>
</section>
<section>
    <div class="row">
        <div class="col-3">
            <div class="player">
                <div class="player-body"></div>
                <div class="player-eye"></div>
            </div>
        </div>
        <div class="col-3"> </div>
        <div class="col-3"></div>
        <div class="col-3"></div>
    </div>

</section>

<script src="js/anim.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte13">Trabalhando com Imagens</a>

CSS Images: https://www.w3schools.com/css/css3_images.asp

```css
.image1{
    background-color: #122b40;
    border-radius: 8px;
}
.image2{
    background-color: #122b40;
    border-radius: 50%;
}
.image3{
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
}
.link{
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    trasition: 0.3s
}
.link:hover{
    box-shadow: 0 0 2px 1px rgba(206,228,18,0.72);
}
.img-responsive{
    max-width:100%;
    height: auto;
}

.card{
    width: 300px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.card img{
    width: 100%;
}

.card .container{
    text-align: center;
    padding: 10px 20px;
}

.filter{
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>CSS3 - School of Net</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/examples.css">
</head>
<body>
<header>
    <h1 onmouseover="stopRotate()" id="test" style="transform: rotateY(0deg);">School of Net</h1>
</header>
<section>
    <h1 class="title">Image</h1>
</section>
<section>
    <div class="row">
        <div class="col-3">
            <img src="img/back2.png" class="image1" width="100" alt="Homer">
        </div>
        <div class="col-3">
            <img src="img/back2.png" class="image2" width="100" alt="Homer">
        </div>
        <div class="col-3">
            <img src="img/back2.png" class="image3" width="100" alt="Homer">
        </div>
        <div class="col-3">
            <a href="#" class="link">
                <img src="img/back2.png" width="100" alt="Homer">
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <figure>
                <img src="img/responsive.jpg" class="img-responsive" alt="responsive">
                <figcaption>Image responsive</figcaption>
            </figure>

        </div>
        <div class="col-3">
            <div class="card">
                <img src="img/responsive.jpg" alt="Card">
                <div class="container">
                    <p>Image card...</p>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="card">
                <img src="img/responsive.jpg" class="filter" alt="Card">
                <div class="container">
                    <p>Image card...</p>
                </div>
            </div>
        </div>
        <div class="col-3"></div>
    </div>

</section>

<script src="js/anim.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte14">Criando Botões personalizados</a>

CSS Buttons: https://www.w3schools.com/css/css3_buttons.asp

```css
.btn{
    border:none;
    padding: 9px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
.btn-green{
    background-color: #4CAF50;
    color: white;
}
.btn-lg{
    padding: 12px 18px;
    font-size: 20px;
}
.btn-sm{
    padding: 8px 12px;
    font-size: 14px;
}
.btn-round{
    border-radius: 8px;
}
.btn-border-color{
    background-color: white;
    color: #4CAF50;
    border:2px solid #4CAF50;
}
.btn-effect{
    -webkit-transition-duration: 4s;
    transition-duration: 0.4s;
}
.btn-blue{
    background-color: #2e6da4;
    color: white;
    border: 2px solid #2e6da4;
}
.btn-blue:hover{
    color:#2e6da4;
    background-color: white;
}
.btn-shadow{
    box-shadow: 0 9px 15px 0 rgba(0,0,0,0.2), 0 4px 15px 0 rgba(0,0,0,0.15);
}

.disabled{
    opacity:0.6;
    cursor: not-allowed;
}
.btn-width{
    width: 100%;
}

.btn-group{
    float: left;
}

.btn-animate {
    display: inline-block;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}

.btn-animate span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.btn-animate span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.btn-animate:hover span {
    padding-right: 25px;
}

.btn-animate:hover span:after {
    opacity: 1;
    right: 0;
}

.btn-animate-click {
    position: relative;
    font-size: 28px;
    width: 200px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.btn-animate-click:after {
    content: "";
    background: #90EE90;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.btn-animate-click:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>CSS3 - School of Net</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/examples.css">
</head>
<body>
<header>
    <h1 onmouseover="stopRotate()" id="test" style="transform: rotateY(0deg);">School of Net</h1>
</header>
<section>
    <h1 class="title">Image</h1>
</section>
<section>
    <div class="row">
        <div class="col-3">
            <button class="btn">Default</button>
            <button class="btn btn-green">Green</button>
        </div>
        <div class="col-3">
            <button class="btn btn-green btn-sm">Small</button>
            <button class="btn btn-green btn-lg">Large</button>
        </div>
        <div class="col-3">
            <button class="btn btn-green btn-lg btn-round">Round</button>
            <button class="btn btn-border-color btn-lg btn-round">Border</button>
        </div>
        <div class="col-3">
            <button class="btn btn-blue btn-effect btn-round">Hover</button>
            <button class="btn btn-blue btn-effect btn-round btn-shadow">Shadow</button>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <button class="btn btn-blue btn-effect btn-round btn-shadow disabled">Disabled</button>
        </div>
        <div class="col-3">
            <button class="btn btn-blue btn-effect btn-round btn-shadow btn-width">Width</button>
        </div>
        <div class="col-3">
            <button class="btn btn-blue btn-effect  btn-shadow  btn-group">Group</button>
            <button class="btn btn-blue btn-effect  btn-shadow  btn-group">Group</button>
            <button class="btn btn-blue btn-effect  btn-shadow  btn-group">Group</button>
        </div>
        <div class="col-3">
            <button class="btn btn-green btn-animate "><span>Animation </span></button>
            <button class="btn btn-green btn-animate-click "><span>Animation Click </span></button>
        </div>
    </div>
</section>

<script src="js/anim.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte15">Múltiplas colunas</a>

[Voltar ao Índice](#indice)

---

## <a name="parte16">Rendimensionar elementos</a>

[Voltar ao Índice](#indice)

---

## <a name="parte17">Consulta de mídias</a>

[Voltar ao Índice](#indice)

---

## <a name="parte18">onsiderações finais</a>

[Voltar ao Índice](#indice)

---