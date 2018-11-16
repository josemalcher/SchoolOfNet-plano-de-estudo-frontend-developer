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



[Voltar ao Índice](#indice)

---



## <a name="parte9">Default parameter</a>



[Voltar ao Índice](#indice)

---



## <a name="parte10">Classes e objetos</a>



[Voltar ao Índice](#indice)

---



## <a name="parte11">Formatação de datas e números</a>



[Voltar ao Índice](#indice)

---
****


## <a name="parte12">ES6 Modules</a>



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
