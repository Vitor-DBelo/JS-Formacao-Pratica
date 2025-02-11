//LISTA ENCADEADA (Linked List)

//Uma lista encadeada é uma coleção de elementos, onde cada elemento (nó) aponta para o próximo. 
//Onde um elemento é ligado intimamente com outro.
// É como uma sequência de caixas conectadas entre si, 
// onde cada caixa contém um valor e um ponteiro para a próxima caixa. 

//[Nó1] → [Nó2] → [Nó3] → null

// Definição da classe 'no', que será usada para criar nós na lista encadeada.
class no {
    constructor (name){
        this.name = name; // Atributo 'name' armazena o valor que será associado a este nó.
        this.no = null;   // O atributo 'no' representa a referência para o próximo nó, inicialmente é nulo (fim da lista).
    }
}

// Definição da classe 'LinkedList', que representa a estrutura da lista encadeada.
class LinkedList {
    constructor(){
        this.head = null;  // A cabeça da lista começa como nula, pois não há elementos na lista no início.
        this.tail = null;  // O final também começa como nulo, pois a lista está vazia no início.
    }

    // Método 'add' para adicionar um novo nó à lista.
    add(name){
        const newNo = new no(name);  // Criação de um novo nó com o nome fornecido.

        if(this.head === null){  // Caso a lista esteja vazia (cabeça é nula),
            this.head = newNo;    // a cabeça da lista recebe o novo nó.
            this.tail = newNo;    // O final da lista também recebe o novo nó.
        }else{
            this.tail.no = newNo; // Se a lista não estiver vazia, o próximo nó do 'tail' será o novo nó.
            this.tail = newNo;    // Atualiza o 'tail' para apontar para o novo nó, que agora é o último da lista.
        }
    }

    // Método 'print' para imprimir os nomes de todos os nós na lista.
    print(){
        let current = this.head;  // Começamos da cabeça da lista.

        while(current !== null){  // Enquanto houver um nó (enquanto o nó não for nulo),
            console.log(current.name); // Imprime o nome do nó atual.
            current = current.no;    // Avança para o próximo nó da lista.
        }
    }
}

// Instanciando um novo objeto da classe LinkedList chamado 'pessoas'.
let pessoas = new LinkedList();

// Adicionando nomes à lista encadeada.
pessoas.add('cleid');
pessoas.add('rafa');
pessoas.add('perera');
pessoas.add('orlindo');

// Exibindo uma explicação sobre a saída de dados.
console.log('Saída 1 não funcional. O JS não lê todos os dados corretamente devido à sua complexidade.\n');

// Exibindo o objeto 'pessoas' diretamente. Note que ao imprimir diretamente a lista, a estrutura interna da lista não é exibida de forma amigável.
console.log(pessoas);

// Exibindo uma explicação sobre o uso do método print.
console.log('\nUsando método print interno');

// Chamando o método 'print' da lista encadeada para exibir os nomes dos nós de forma legível.
pessoas.print();

console.log('\n');


//LISTA DUPLAMENTE LIGADA(doubly linked list)

// Uma lista duplamente ligada é uma estrutura de dados onde cada elemento (nó) possui dois ponteiros:
// 1. Um ponteiro para o próximo nó (next), 
// 2. E um ponteiro para o nó anterior (prev). 
// Isso permite que a lista seja percorrida tanto da cabeça para a cauda quanto da cauda para a cabeça.

// Visualizando a estrutura:
// [Nó1] ⇔ [Nó2] ⇔ [Nó3] ⇔ [Nó4]
//   ↑        ↑        ↑        ↑
//  prev     next     prev     next

// A cabeça aponta para o primeiro nó e a cauda para o último.

function Node(data) {
    this.data = data;
    this.NodeNext = null;
    this.NodePrevious = null;
}

function DoublyLinkedList() {
    this.root = null;   // Cabeça da lista
    this.behind = null; // Cauda da lista

    this.Adds = function(data) {
        const newData = new Node(data);

        if (this.root === null) { // Se a lista estiver vazia
            this.root = newData;
            this.behind = newData;
        } else {
            this.behind.NodeNext = newData;       // Define o próximo nó
            newData.NodePrevious = this.behind;  // Define o nó anterior
            this.behind = newData;               // Atualiza a cauda
        }
    };

    this.print = function() {
        let current = this.root; // Começa pelo primeiro nó da lista
        while (current !== null) {
            console.log(`Nó atual: ${current.data}`);
            console.log(`Próximo Nó: ${current.NodeNext ? current.NodeNext.data : "null"}`);
            console.log(`Nó Anterior: ${current.NodePrevious ? current.NodePrevious.data : "null"}`);
            console.log('-------------------');
            current = current.NodeNext; // Avança para o próximo nó
        }
    };
}

console.log('\n');
// Criando a lista
const number = new DoublyLinkedList();
number.Adds(1);
number.Adds(2);
number.Adds(51);

console.log(number);
console.log('\n');
number.print()