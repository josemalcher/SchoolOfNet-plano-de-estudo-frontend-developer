let nome = "jose";
let sobrenome = "Junior";

let obj = {
    nome,
    sobrenome,
    method(param1,paarm2){

    }
};

function funcao({nome, sobrenome}){
    console.log(nome,sobrenome);
}

funcao(obj);