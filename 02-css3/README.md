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

[Voltar ao Índice](#indice)

---

## <a name="parte12">Animação</a>

[Voltar ao Índice](#indice)

---

## <a name="parte13">Trabalhando com Imagens</a>

[Voltar ao Índice](#indice)

---

## <a name="parte14">Criando Botões personalizados</a>

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