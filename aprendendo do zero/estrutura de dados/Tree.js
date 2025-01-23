// Estrutura de Dados: Árvore (Tree)
// Uma árvore é uma estrutura de dados hierárquica composta por elementos chamados de "nós".
// Principais conceitos:
// 1. Raiz: O nó principal da árvore, sem pai.
// 2. Nós: Sub-elementos ou subordinados conectados entre si.
// 3. Folhas: Nós sem filhos, ou seja, os nós terminais da árvore.
//4. Subárvore: Qualquer nó de uma árvore e todas as suas subárvores descendentes, 
// ou seja, uma árvore que está dentro da árvore original.

// Benefício: Facilita operações como busca, inserção e remoção de dados de forma eficiente.

// Floresta: Conjunto de Árvores Binárias Independentes

// Representação gráfica de uma floresta com 2 árvores binárias:
// 
// Árvore 1:
//      Raiz
//       2
//      / \
//     7   5
//    /|   |\
//   2 6   9 4
//     |\
//     5 11
//
// Árvore 2:
//      Raiz
//       5
//      / \
//     11  5
//
// Uma floresta é formada por várias árvores binárias independentes.

//bst
// Definindo a classe "No" para os nós da árvore binária
class No {
    constructor(data) {
        this.data = data; // O valor armazenado no nó
        this.left = null; // Ponteiro para o filho à esquerda
        this.right = null; // Ponteiro para o filho à direita
    }
}

// Definindo a classe "Tree" para a árvore binária
class Tree {
    constructor() {
        this.root = null; // A raiz da árvore começa como nula
    }
    
    // Método para adicionar um valor à árvore
    add(data) {
        const newNode = new No(data); // Cria um novo nó com o valor dado

        // Se a árvore estiver vazia, o novo nó se torna a raiz
        if (this.root === null) {
            this.root = newNode;
        } else {
            // Caso contrário, chama a função auxiliar para adicionar o nó na posição correta
            this.addNo(this.root, newNode);
        }
    }

    search(tree, data) {
        // Se a árvore ou o nó atual for nulo, retorna null
        if (tree === null) {
            return null;
        }
    
        // Se o dado do nó atual for igual ao dado procurado, retorna o nó
        if (tree.data === data) {
            return tree;
        }
    
        // Se o dado procurado for menor, procura na subárvore à esquerda
        if (data < tree.data) {
            return this.search(tree.left, data);
        } else {
            // Se o dado procurado for maior, procura na subárvore à direita
            return this.search(tree.right, data);
        }
    }
    // Função recursiva para adicionar um nó na árvore
    addNo(no, newNode) {
        // Se o valor do novo nó for menor que o valor do nó atual
        if (newNode.data < no.data) {
            // Se o nó à esquerda for nulo, o novo nó é colocado ali
            if (no.left === null) {
                no.left = newNode;
            } else {
                // Caso contrário, a função é chamada recursivamente para o filho à esquerda
                this.addNo(no.left, newNode);
            }
        } else {
            // Se o valor do novo nó for maior ou igual ao do nó atual
            // Se o nó à direita for nulo, o novo nó é colocado ali
            if (no.right === null) {
                no.right = newNode;
            } else {
                // Caso contrário, a função é chamada recursivamente para o filho à direita
                this.addNo(no.right, newNode);
            }
        }
    }
    
    // Método de percurso em pré-ordem (visita o nó antes dos filhos)
    preOrder(tree) {
        if (tree === null) return; // Se o nó for nulo, termina a recursão
        console.log(tree.data); // Imprime o valor do nó
        this.preOrder(tree.left); // Chama recursivamente o filho à esquerda
        this.preOrder(tree.right); // Chama recursivamente o filho à direita
    }

    // Método de percurso em pós-ordem (visita os filhos antes do nó)
    postOrder(tree) {
        if (tree === null) return; // Se o nó for nulo, termina a recursão
        this.postOrder(tree.left); // Chama recursivamente o filho à esquerda
        this.postOrder(tree.right); // Chama recursivamente o filho à direita
        console.log(tree.data); // Imprime o valor do nó
    }

    // Método de percurso em ordem (visita o filho esquerdo, o nó e o filho direito)
    inOrder(tree) {
        if (tree === null) return; // Se o nó for nulo, termina a recursão
        this.inOrder(tree.left); // Chama recursivamente o filho à esquerda
        console.log(tree.data); // Imprime o valor do nó
        this.inOrder(tree.right); // Chama recursivamente o filho à direita
    }
}

// Criando uma nova árvore binária
const tree = new Tree();
tree.add(10);
tree.add(0);
tree.add(5);
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);

// Exibindo os valores da árvore com diferentes tipos de percurso
console.log("Pré-ordem:");
tree.preOrder(tree.root);

console.log("Pós-ordem:");
tree.postOrder(tree.root);

console.log("Em ordem:");
tree.inOrder(tree.root);
console.log(tree.search(tree.root, 0));

// Tipos de Árvore Binária:
// 1. **Árvore Binária Simples**:
//    - Cada nó possui no máximo dois filhos: um à esquerda e um à direita.
// 2. **Árvore Binária Completa**:
//    - Todas as folhas estão no mesmo nível ou no nível imediatamente acima, e todos os nós internos têm dois filhos.
// 3. **Árvore Binária Cheia**:
//    - Cada nó tem exatamente dois filhos, exceto as folhas.
// 4. **Árvore Binária Balanceada**:
//    - A diferença de altura entre as subárvores esquerda e direita de qualquer nó é no máximo 1.
// 5. **Árvore de Pesquisa Binária (BST)**:
//    - Para cada nó, todos os valores na subárvore esquerda são menores que o nó e todos os valores na subárvore direita são maiores.
// 6. **Árvore AVL**:
//    - Uma árvore binária de busca balanceada onde a diferença de altura das subárvores de qualquer nó é, no máximo, 1. Utiliza rotação para balanceamento.
// 7. **Árvore Red-Black**:
//    - Uma árvore binária de busca balanceada onde cada nó tem uma cor (vermelho ou preto), com regras que garantem a balanceamento e a eficiência nas operações.
// 8. **Heap Binário (Min/Max Heap)**:
//    - É uma árvore binária completa onde os valores dos nós seguem uma ordem específica (min-heap ou max-heap), sendo usada para implementar filas de prioridade.
