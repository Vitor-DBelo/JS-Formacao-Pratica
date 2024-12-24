class Personagem {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    atacar() {
        if (this.classe === 'mago') {
            console.log(`O ${this.classe} atacou com bola de fogo!`);
        } else if (this.classe === 'ninja') {
            console.log(`O ${this.classe} atacou com shuriken!`);
        } else if (this.classe === 'assassino') {
            console.log(`O ${this.classe} atacou com adagas!`);
        } else {
            console.log(`O ${this.classe} atacou com uma arma desconhecida!`);
        }
    }
}

const rafa = new Personagem('Rafa', 28, 'ninja');
const luan = new Personagem('Luan', 25, 'mago');
const carlos = new Personagem('Carlos', 30, 'assassino');

rafa.atacar();  
luan.atacar(); 
carlos.atacar();  
