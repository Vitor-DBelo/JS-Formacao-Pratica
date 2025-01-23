// PILHA (Stack)
// Uma pilha é uma estrutura de dados onde o acesso aos elementos é controlado pelo topo.
// Temos dois tipos de listas: UEPS e PEPES.
// UEPS (LIFO) - O último elemento a entrar é o primeiro a sair (de cima para baixo).
// PEPES (FIFO) - O primeiro elemento a entrar é o primeiro a sair (de baixo para cima).

// Além disso, as listas podem ser fixas ou dinâmicas:
// stack  Fixa: tamanho pré-definido, como arrays estáticos em linguagens de baixo nível.
// stack Dinâmica: cresce ou diminui automaticamente. Em JavaScript, arrays são listas dinâmicas.

// Stack UEPS (LIFO - Último a Entrar, Primeiro a Sair)
class StackUEPS {
    constructor() {
        this.item = []; // Lista dinâmica em JavaScript
    }

    push(elemento) {
        this.item.push(elemento); // Adiciona elemento ao topo
    }

    pop(elemento) {
        if (this.item.length === 0) {
            console.log('Lista vazia');
        } else {
            this.item.pop(elemento); // Remove o último elemento
        }
    }

    print() {
        console.log(this.item); // Exibe os elementos
    }

    size() {
        return this.item.length; // Retorna o tamanho da pilha
    }

    isEmpty() {
        return this.size() === 0; // Verifica se a pilha está vazia
    }

    peek() {
        return this.isEmpty() ? 'pilha vazia' : this.item[this.item.length - 1]; // Mostra o topo
    }
}

// Exemplo com pilha dinâmica
let pilhaUEPS = new StackUEPS();
pilhaUEPS.push('rosa');         // Adiciona 'rosa' no topo
pilhaUEPS.push('vermelho');     // Adiciona 'vermelho' no topo
pilhaUEPS.push('preto');        // Adiciona 'preto' no topo

pilhaUEPS.print();

console.log('Elemento no topo:', pilhaUEPS.peek()); // Mostra o elemento no topo

pilhaUEPS.pop();                // Remove 'preto' (último a entrar)
pilhaUEPS.print();
console.log(pilhaUEPS.peek());
console.log('\n');


// Stack PEPES (FIFO - Primeiro a Entrar, Primeiro a Sair)
class StackUEPSFixa {
    constructor(maxSize) { // Recebe maxSize como parâmetro
        this.list = [];
        this.maxSize = maxSize; 
    }

    push(item) {
        if (this.list.length >= this.maxSize) {
            // interrompe a execução: Quando tu joga um throw,
            // A execução do código para imediatamente, te forçando a tratar o problema (se quiser).

            // O Error vem com uma stack trace (rastro de execução), o que ajuda a debugar.
            throw new Error("A pilha está cheia, sua mula!");
        } else {
            this.list.push(item);
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("A pilha tá vazia, nem força!");
        }
        return this.list.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("A stack está vazia, nada pra ver aqui");
        }

        return this.list[this.list.length - 1];
    }

    size() {
        return this.list.length; // Corrigido para usar o tamanho da lista
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull() {
        return this.list.length === this.maxSize; 
    }
}

// Testando a classe
try {
    const pilhaFixa = new StackUEPSFixa(3); // Pilha com tamanho máximo de 3
    console.log('Adicionando item na pilha: 1' + pilhaFixa.push(1));
    console.log('Adicionando item na pilha: 2' + pilhaFixa.push(2));
    console.log('Adicionando item na pilha: 3' + pilhaFixa.push(3));
    console.log('Topo da pilha (peek): ', pilhaFixa.peek());

    pilhaFixa.pop();
    console.log('Depois de remover um item (pop), o topo é: ', pilhaFixa.peek());
    console.log('O tamanho da pilha: ', pilhaFixa.size());

    pilhaFixa.push(4);
    console.log('A lista está cheia: ' + (pilhaFixa.isFull() ? 'SIM' : 'NÃO'));
    console.log('A lista está vazia: ' + (pilhaFixa.isEmpty() ? 'SIM' : 'NÃO'));
} catch (error) {
    console.error(error.message);
}