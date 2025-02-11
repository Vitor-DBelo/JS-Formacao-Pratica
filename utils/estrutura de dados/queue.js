// FILA (Queue)
// Uma fila é uma estrutura de dados linear onde o acesso aos elementos é controlado pelas extremidades:
// - Inserções (enqueue) acontecem no final da fila (chamado de "traseira" ou "fim").
// - Remoções (dequeue) acontecem no início da fila (chamado de "frente").
// O funcionamento segue a lógica de **FIFO (First In, First Out)**: "o primeiro a entrar é o primeiro a sair".

// Exemplo do mundo real: 
// Pense em uma fila para pagar no caixa: a primeira pessoa a entrar é atendida antes das outras.

// Características principais:
// 1. FIFO (First In, First Out) - O primeiro elemento que entra é o primeiro que sai.
// 2. Estrutura linear: os elementos seguem uma sequência lógica de entrada e saída.

// Estruturas fixas e dinâmicas:
// - **Fila Fixa**: Tamanho pré-definido. Não permite novos elementos ao atingir o limite.
// - **Fila Dinâmica**: Ajusta seu tamanho automaticamente. Em JavaScript, arrays podem ser usados para implementar filas dinâmicas.

// Implementação de uma fila dinâmica em JavaScript:
class Queue {
    constructor() {
        this.queue = []; // Inicializa a fila como uma estrutura dinâmica
    }

    // Adiciona um elemento ao final da fila
    push(elemento) {
        this.queue.push(elemento);
    }

    // Remove o elemento da frente da fila
    shift() {
        if (this.isEmpty()) {
            console.log("A fila está vazia. Não há elementos para remover.");
            return null;
        }
        return this.queue.shift();
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.queue.length === 0;
    }

    // Exibe todos os elementos da fila
    print() {
        console.log(this.queue);
    }
}

// Exemplo de uso:
const fila = new Queue();
fila.enqueue(10);   // Adiciona 10 à fila
fila.enqueue(20);   // Adiciona 20 à fila
fila.enqueue(30);   // Adiciona 30 à fila
fila.print();       // Exibe a fila: [10, 20, 30]
fila.shift();     // Remove o primeiro elemento (10)
fila.print();       // Exibe a fila: [20, 30]
