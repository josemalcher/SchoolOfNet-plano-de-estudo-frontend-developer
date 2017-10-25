# Iniciando com Javascript - Atualização-3 

Resumo do curso:

https://www.schoolofnet.com/curso-iniciando-com-javascript-rev3/

---

## <a name="indice" >Índice</a>

- [Boa vindas](#parte1)
- [História do Javascript](#parte2)
- [Estrutura da linguagem e seu funcionamento](#parte3)
- [Criando primeiro programa - Hello World](#parte4)
- [Introdução a variáveis](#parte5)
- [Variáveis caracteres](#parte6)
- [Variáveis numéricas e biblioteca Math](#parte7)
- [Finalizando variáveis](#parte8)
- [Input e ouput](#parte9)
- [Operadores](#parte10)
- [Trabalhando com condicionais if e else](#parte11)
- [Trabalhando com condicionais switch](#parte12)
- [Estrutura de repetições while e do while](#parte13)
- [Estrutura de repetições for](#parte14)
- [Introdução a funções](#parte15)
- [Tipos de funções e introdução a escopo](#parte16)
- [Finalizando](#parte17)

---

## <a name="parte1">Boa vindas</a>

Editor recomendável: https://code.visualstudio.com/


[Voltar ao Índice](#indice)

---

## <a name="parte2">História do Javascript</a>

Artigo: JavaScript – 20 anos de história e construção da web -> https://imasters.com.br/front-end/javascript/javascript-20-anos-de-historia-e-construcao-da-web/


[Voltar ao Índice](#indice)

---

## <a name="parte3">Estrutura da linguagem e seu funcionamento</a>

JavaScript é uma linguagem de programação que pode ser aplicada em um documento HTML e usada para criar interações dinâmicas em sites. Ela foi inventada por Brendan Eich, co-fundador do projeto Mozilla, da Fundação Mozilla e da Corporação Mozilla.

Você pode fazer muita coisa com JavaScript. Você vai começar com coisas simples como ajustar layouts, fazer coisas acontecerem quando botões são clicados, slides e galerias de imagem — mas a medida que você for ganhando experiência com a linguagem, você poderá criar jogos, animações gráficas em 2D e 3D, aplicativos com base de dados e muito mais.

JavaScript é por si só uma linguagem compacta, mas muito flexível, e desenvolvedores tem escrito diversas ferramentas para que você possa ter acesso à várias funcionalidades extras com pequeno esforço. Essas incluem:

Application Programming Interfaces (APIs) disponibilizada em navegadores web, possuem várias funções como criar HTML e atribuir estilos de CSS, para pegar e manipular um stream de vídeo da webcam de um usuário, ou gerar gráficos 3D e amostras de áudio.
APIs de terceiros, que permitem aos desenvolvedores incorporarem funcionalidades em seus sites de outras propriedades, como Twitter ou Facebook.
Frameworks e bibliotecas, que você pode aplicar em seu HTML para permitir que você construa rapidamente sites e aplicações.

FONTE: https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico

[Voltar ao Índice](#indice)

---

## <a name="parte4">Criando primeiro programa - Hello World</a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello World</title>
</head>
<body>
<script>
    alert("Olá Mundo!! Teste inicial")
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte5">Introdução a variáveis</a>


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Variáveis</title>
</head>
<body>
<script>
    var name = 'José Malcher jR.'
    var age = 21
    var height = 1.78
    var hasDog = true
    alert(name)

    name = 'Leonan'
    alert(name)
</script>
</body>
</html>
```


[Voltar ao Índice](#indice)

---

## <a name="parte6">Variáveis caracteres</a>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Variáveis caracteres</title>
</head>
<body>
    <script>
        var name     = 'José'
        var lastname = 'Malcher Jr.'
        var number = 10
        var fullName = name + ' ' + lastname.replace('Jr', 'jR')
        alert(number.toString())
        alert(fullName)
        // var name = 'José Malcher Jr'
        // name = name.toUpperCase()
        // alert(name)
    </script>
</body>
</html>
```


[Voltar ao Índice](#indice)

---

## <a name="parte7">Variáveis numéricas e biblioteca Math</a>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Variáveis numéricas e biblioteca Math</title>
</head>
<body>
<script>
    var number = 10.20  // "10.00" / '10.00' ponto fluante
    number.toString()
    number = parseInt(number)
    alert(number)


    var number2 = 5 // inteiro
    number2 = parseFloat(number2).toPrecision(3)
    alert(number2)

    var pi = Math.PI
    var random = Math.random()
    alert(pi)
    alert(random)
</script>
</body>
</html>
```



[Voltar ao Índice](#indice)

---

## <a name="parte8">Finalizando variáveis</a>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Finalizando variáveis</title>
</head>
<body>
<script>
    var name = undefined
    alert(name)
</script>
</body>
</html>
```



[Voltar ao Índice](#indice)

---

## <a name="parte9">Input e ouput</a>

```html
<!DOCTYPE html>
<html lang="pt-r">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Input e ouput</title>
</head>
<body>
<script>
    console.time()
    // alert() //output

    var name = prompt('What is your name?')
    alert('My name is: ' + name)

    confirm('My name is: ' + name) // "OK" e "CANCEL"

    console.log('My name is :' + name)
    console.warn('My name is :' + name)
    console.timeEnd()
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte10">Operadores</a>

REF: https://www.w3schools.com/js/js_operators.asp

```html
<!DOCTYPE html>
<html lang="pt-r">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Operadores</title>
</head>
<body>
<script>

    var name = 'Jose Malcher'

    //arithmetics
    var totalSum = 5 + 5
    var totalSub = 8 - 5
    var totalMult = 2 * 2
    var totalDiv = 4 / 2
    console.log(totalSum, totalSub, totalMult, totalDiv)

    //comparison
    var a = 50
    var b = 600
    var c = a >= b
    console.log(c)

    //logical
    // && and
    // || or
    // ! not
    var l = !(50 > 10) || (600 < 10)
    console.log((50 > 10), !(50 > 10), (600 < 10), l)

</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte11">Trabalhando com condicionais if e else</a>

Boa Ref: https://www.w3schools.com/js/js_if_else.asp

```html
<!DOCTYPE html>
<html lang="pt-r">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Condicional</title>
</head>
<body>
<script>

    var num1 = prompt('Número 1 :')
    var num2 = prompt('Número 2:')
    var op = prompt('Operador: ')
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (op == '+') {
        console.log(num1 + num2)
    } else if (op == '*') {
        console.log(num1 * num2)
    } else if (op == '-') {
        console.log(num1 - num2)
    } else if (op == '/') {
        console.log(num1 / num2)
    } else {
        console.error('Operador Não Encontrado')
    }
    // if ((5 > 1) || (600 < 10)) {
    // 	console.log('Is true')
    // }

</script>
</body>
</html>
```



[Voltar ao Índice](#indice)

---

## <a name="parte12"></a>



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
