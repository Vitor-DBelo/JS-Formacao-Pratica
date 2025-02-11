// Programação Orientada a Objetos (POO)
// POO é um paradigma de programação baseado no conceito de "objetos", que podem conter dados e métodos.
// Os quatro pilares da POO são: Encapsulamento, Herança, Polimorfismo e Abstração.
// Este código exemplifica diversos conceitos da POO, explicados nos comentários abaixo.

import animateFightStart from "./animation.js";

// ENCAPSULAMENTO: Protege os dados internos do objeto contra acessos externos indevidos.
// Getters e Setters permitem manipular atributos privados de forma controlada.
// Symbols são usados aqui para criar propriedades privadas.
const _life = Symbol('life'); // Propriedade privada
const _curaOrDano = Symbol('CURAorDano'); // Propriedade privada

// Classe Skill representa uma habilidade com nome e dano.
class Skill {
    constructor(attackName, attackDano) {
        this.attackName = attackName;
        this.attackDano = attackDano;
    }

    useSkill() {
        console.log(`${this.attackName} causou ${this.attackDano} de dano!`);
        return this.attackDano;
    }
}

// HERANÇA: A classe Item herda de Skill, reutilizando seus métodos e atributos.
class Item extends Skill {
    constructor(name, danoOuCura, isCura) {
        super(name, danoOuCura); // Chama o construtor da classe pai
        this.isCura = isCura;
    }

    applyEffect(target) {
        if (this.isCura) {
            target.life += this.attackDano;
            console.log(`${this.attackName} curou ${this.attackDano} de vida!`);
        } else {
            target.life -= this.attackDano;
            console.log(`${this.attackName} causou ${this.attackDano} de dano!`);
        }
    }
}

// Classe Animal encapsula atributos e métodos comuns a todos os animais.
class Animal {
    constructor(name, life, damage, defense, skill, item) {
        this.name = name;
        this[_life] = life; // Encapsulamento usando Symbol
        this.damage = damage;
        this.defense = defense;
        this.skill = skill;
        this.item = item;
    }

    // GETTER: Permite acessar um atributo privado sem expô-lo diretamente.
    get life() {
        return this[_life];
    }

    // SETTER: Controla a modificação do atributo privado, evitando valores inválidos.
    set life(value) {
        if (value > 150) {
            this[_life] = 150;
        } else if (value < 0) {
            this[_life] = 50;
        } else {
            this[_life] = value;
        }
    }

    attack() {
        const useSkill = Math.floor(Math.random() * 2);

        const isMortal = Math.random() < 0.10; // 10% de chance de golpe mortal
        const isCriticalHit = Math.random() < 0.20; // 20% de chance de golpe crítico
        const isUserItem = Math.random() < 0.07; // 7% de chance de usar um item

        if (isUserItem && this.item) {
            this.item.applyEffect(this);
            return 'item'; 
        } else if (isMortal) {
            console.log(`${this.name} fez um Golpe Mortal! O inimigo morreu instantaneamente!`);
            return 'mortal';
        } else if (isCriticalHit) {
            console.log(`${this.name} acertou um Golpe Crítico!`);
            return this.damage * 2;
        } else if (useSkill === 1 && this.skill) {
            console.log(`${this.name} usou a habilidade ${this.skill.attackName}, causando ${this.skill.attackDano} de dano!`);
            return this.skill.attackDano;
        } else {
            console.log(`${this.name} atacou com dano direto, causando ${this.damage} de dano!`);
            return this.damage;
        }
    }

    damageTaken(dano) {
        if (this.defense > 0) {
            const isDefense = Math.floor(Math.random() * 2);
            if (isDefense === 1) {
                console.log(`${this.name} usou sua defesa!`);
                this.defense = Math.max(this.defense - dano, 0);
                return 0;
            } else {
                console.log(`${this.name} recebeu ${dano} de dano na vida!`);
                return dano;
            }
        } else {
            console.log(`${this.name} não tem defesa! O dano vai direto na vida!`);
            return dano;
        }
    }

    // MÉTODOS ESTÁTICOS: Métodos que pertencem à classe e não aos objetos criados a partir dela.
    static som() {
        console.log('O animal produz um som enquanto dá seus últimos suspiros.');
    }
}

// POLIMORFISMO: A função Rinha pode receber qualquer objeto do tipo Animal.
function Rinha(animalLeft, animalRight) {
    animateFightStart();

    setTimeout(() => {
        while (animalLeft.life > 0 && animalRight.life > 0) {
            console.log(`-----${animalLeft.name}: ${animalLeft.life} vida |  ${animalRight.name}: ${animalRight.life} vida-----`); // Exibe a vida de ambos os oponentes

            const isComesa = Math.floor(Math.random() * 2);
            if (isComesa === 1) {
                let danoLeft = animalLeft.attack();
                if (danoLeft === 'mortal') {
                    console.log(`${animalLeft.name} derrotou ${animalRight.name} com um golpe mortal!`);
                    Animal.som(); // Método estático, chamado diretamente da classe
                    break;
                } else if (danoLeft === 'item') {
                    continue;
                }
                let danoRecebido = animalRight.damageTaken(danoLeft);
                animalRight.life -= danoRecebido;
                if (animalRight.life <= 0) {
                    console.log(`${animalRight.name} morreu! ${animalLeft.name} é o vencedor!`);
                    Animal.som(); // Método estático, chamado diretamente da classe
                    break;
                }
            } else {
                let danoRight = animalRight.attack();
                if (danoRight === 'mortal') {
                    console.log(`${animalRight.name} derrotou ${animalLeft.name} com um golpe mortal!`);
                    Animal.som(); // Método estático, chamado diretamente da classe
                    break;
                } else if (danoRight === 'item') {
                    continue;
                }
                let danoRecebido = animalLeft.damageTaken(danoRight);
                animalLeft.life -= danoRecebido;
                if (animalLeft.life <= 0) {
                    console.log(`${animalLeft.name} morreu! ${animalRight.name} é o vencedor!`);
                    Animal.som(); // Método estático, chamado diretamente da classe
                    break;
                }
            }
        }
    }, 3000);
}

const habilidadePato = new Skill("Bico Cortante", 15);
const habilidadeRato = new Skill("Mordida Venenosa", 20);

const itemPato = new Item("Elixir de Cura", 25, true);
const itemRato = new Item("Veneno Mortal", 30, false);

const pato = new Animal("Pato", 100, 10, 5, habilidadePato, itemPato);
const rato = new Animal("Rato", 80, 12, 3, habilidadeRato, itemRato);

Rinha(pato,rato)
