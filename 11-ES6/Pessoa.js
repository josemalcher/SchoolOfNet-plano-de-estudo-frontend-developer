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
