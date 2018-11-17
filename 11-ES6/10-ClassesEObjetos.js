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