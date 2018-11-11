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