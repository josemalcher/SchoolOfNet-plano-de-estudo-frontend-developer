# ES6

https://www.schoolofnet.com/curso/frontend/javascript/es6-rev2/

---

## <a name="indice">Índice</a>

- [Introdução](#parte1)   
- [ECMAScript](#parte2)   
- [Compatibilidade com browsers](#parte3)   
- [var vs let vs const](#parte4)   
- [Template string](#parte5)   
- [String interpolation](#parte6)   
- [for of loops](#parte7)   
- [Arrow functions](#parte8)   
- [Default parameter](#parte9)   
- [Classes e objetos](#parte10)   
- [Formatação de datas e números](#parte11)   
- [ES6 Modules](#parte12)   
- [Rest parameter](#parte13)   
- [Property shortland](#parte14)   
- [Conclusões](#parte15)   


---

## <a name="parte1">Introdução</a>

- https://www.ecma-international.org/publications/standards/Ecma-262.htm



[Voltar ao Índice](#indice)

---


## <a name="parte2">ECMAScript</a>

ECMA (acrônimo para European Computer Manufacturers Association) é uma associação fundada em 1961 dedicada à padronização de sistemas de informação. Desde 1994 passou a se denominar Ecma International para refletir suas atividades internacionais. A associação é aberta a companhias que produzem, comercializam ou desenvolvem sistemas de computação ou de comunicação na Europa.

- https://pt.wikipedia.org/wiki/Ecma_International
- https://pt.wikipedia.org/wiki/ECMAScript

[Voltar ao Índice](#indice)

---



## <a name="parte3">Compatibilidade com browsers</a>

- https://kangax.github.io/compat-table/es6/



[Voltar ao Índice](#indice)

---

## <a name="parte4">var vs let vs const</a>

```js
// Aula 03 - let vs var vs const

function teste() {
    //var a = 'outro valor';
    let a = "outro valor";

    if(1 < 2){
        let a = 'valor';
    }

    console.log(a);

    for (let i; i< 10; i++){

    }
    for (let i; i< 10; i++){

    }

    const VARIAVEL = 10;
    const EQUIPE = {'nome':'jose', 'idade': '34'};
    console.log(VARIAVEL);
    console.log(EQUIPE);

    // VARIAVEL = 20; // erro
    EQUIPE.nome = 'Jose Malcher Jr';

    console.log(VARIAVEL);
    console.log(EQUIPE);

    // let - não é possíel redeclarar a mesma variável
    // const(valores constatntes, objetos podem mudar seus atributos sem problemas)
}

teste();
// note testes.js
```

[Voltar ao Índice](#indice)

---



## <a name="parte5">Template string</a>


```js
var a = `
<p>TEMPLATE STRING</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
`;

console.log(a);
```

[Voltar ao Índice](#indice)

---



## <a name="parte6">String interpolation</a>

```js
let num = 200;
let b = "String qual quer";

var a = ` ${b}
<p>TEMPLATE STRING</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p> ${num}
<p>Várias linhas</p>
`;

console.log(a);
```

```
String qual quer
<p>TEMPLATE STRING</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p>
<p>Várias linhas</p> 200
```

[Voltar ao Índice](#indice)

---



## <a name="parte7">for of loops</a>

```js
let array = [22,11,23,34];

let obj = {
    first_name: "Jose",
    last_name: "Malcher"
};

/*
for(let i in array){
    console.log(i, array[i]);
}

for (let i in obj) {
    console.log(i, obj[i]);
}
*/

/*for(let value of array){
    console.log(value);
}

let keys = Object.keys(obj);
console.log(keys);

for (let key of keys){
    console.log(obj[key]);
}*/

for (let obj of array){
    console.log(obj);
}
console.log(array.entries());
for(let[index, value] of array.entries()){
    console.log(index, value);
}

```

[Voltar ao Índice](#indice)

---



## <a name="parte8">Arrow functions</a>

```js
let array = [1,2,3,4,5];

// let array1 = array.map(function(value){
//     return value * 10;
// })

let array2 = array.map(value => value * 10);

let array3 = array.map((value1, value2) => value1 * 10);

let array4 = array.map(value1 => {
    value1 * 10;
});

array.map(value => value > 10 ? 0 : 2);

let funcaoSoma = (param1, param2) => param1 + param2;

//setTimeout(()=> execucao, 100);
setTimeout(()=>{
    //execucao
}, 100);

console.log(array2);
```

[Voltar ao Índice](#indice)

---



## <a name="parte9">Default parameter</a>

```js
function test(param1, param2){
    if(param2 === 'padrao'){

    }
}
test('valor');

function test2(param1, param2 = 'padrao', param3 = 'outrovalor'){
    if(param2 === 'padrao'){
        console.log('padrao -> param2');
    }
}

console.log(test2(0,'padrao','0'));

function test3(param1 = 1, param2 = 'padrao', param3 = 'outrovalor') { 
    if(param2 ==='padrao'){
        console.log('padram 2');
    }
}
test3();

function funcao(param1, isAlgo = true){
    if(param1 === 20){
        console.log('OK!');
    }else{
        console.log('Não ok!');
    }
}

funcao(23, false);
```

[Voltar ao Índice](#indice)

---



## <a name="parte10">Classes e objetos</a>

```js
class Pessoa{
    constructor(nome, altura, sexo){
        this.nome = nome;
        this._altura = altura;
        this.sexo = sexo;
    }

    getAltura(){
        return this._altura;
    }
    get altura(){
        return this._altura;
    }

    set altura(value){
        this._altura = value;
    }
}

const pessoa = new Pessoa('José', 1.77, 'M');
console.log(pessoa.nome);
console.log(pessoa.getAltura());
console.log(pessoa.altura);
```

[Voltar ao Índice](#indice)

---



## <a name="parte11">Formatação de datas e números</a>

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat

```js
// api Intl

//let date = new Date();

//Intl.DateTimeFormat('pt-BR').format(date); //BCP47
//Intl.DateTimeFormat('en-US').format(date); 

//console.log(new Intl.DateTimeFormat('pt-BR').format(date));
//console.log(Intl.DateTimeFormat('pt-BR', {month:"long", day:"numeric", year: "numeric"}).format(date));

var date = new Date();
// Results below assume UTC timezone - your results may vary

console.log(new Intl.DateTimeFormat('pt-BR').format(date));

console.log(new Intl.DateTimeFormat('en-GB').format(date));
// expected output: "20/12/2012"

// Include a fallback language, in this case Indonesian
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// expected output: "20/12/2012

console.log('----------------------------------------------');
console.log(new Intl.NumberFormat('pt-BR').format(2.22));

console.log(new Intl.NumberFormat('pt-BR').format(2000.22));
console.log(new Intl.NumberFormat('en-US').format(2000.22));

console.log(new Intl.NumberFormat('en-US', {minimumFractionDigits:2}).format(2000));
console.log(new Intl.NumberFormat('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}).format(2000.12345));
console.log(new Intl.NumberFormat('en-US', {minimumFractionDigits:2, maximumFractionDigits:2, currency: 'EUR', style: 'currency'}).format(2000.12345));
console.log(new Intl.NumberFormat('en-US', {minimumFractionDigits:2, maximumFractionDigits:2, currency: 'BRL', style: 'currency'}).format(2000.12345));
```

```
2018-11-17
11/17/2018
2018-11-17
----------------------------------------------
2.22
2,000.22
2,000.22
2,000.00
2,000.12
€2,000.12
R$2,000.12
```


[Voltar ao Índice](#indice)

---
****


## <a name="parte12">ES6 Modules</a>

```js
export class Pessoa {
    constructor(nome, altura, sexo) {
        this.nome = nome;
        this._altura = altura;
        this.sexo = sexo;
    }

    getAltura() {
        return this._altura;
    }
    get altura() {
        return this._altura;
    }

    set altura(value) {
        this._altura = value;
    }
}

export let dado = 'José Malcher Jr';

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
<script type="module">
import {Pessoa, dado} from "./Pessoa.js";
    console.log(Pessoa);
    console.log(dado);
</script>
</html>
```

[Voltar ao Índice](#indice)

---



## <a name="parte13">Rest parameter</a>



[Voltar ao Índice](#indice)

---



## <a name="parte14">Property shortland</a>



[Voltar ao Índice](#indice)

---


## <a name="parte15">Conclusões</a>



[Voltar ao Índice](#indice)

---
