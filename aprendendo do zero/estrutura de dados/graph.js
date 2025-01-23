// GRAFOS (graph)

// Grafos são estruturas compostas por vértices (ou nós) e arestas (ou ligações) entre esses vértices. Eles são usados para representar problemas complexos onde as conexões entre os pontos não seguem uma regra simples de sequenciamento ou hierarquia. Grafos podem ser usados em diversas áreas, como redes de computadores, caminhos mínimos, redes sociais, etc.

// As ligações entre os vértices no grafo podem ser direcionadas ou não, e podem ter pesos associados, representando alguma informação adicional, como a distância entre dois pontos ou a capacidade de um link.

// Exemplos de grafos podem incluir:
// 1. Grafos direcionados (onde as arestas possuem direção)
// 2. Grafos não direcionados (onde as arestas não têm direção)
// 3. Grafos ponderados (onde as arestas têm um peso associado)
// 4. Grafos não ponderados (onde as arestas não têm peso)

// EXEMPLO DE USO DE GRAFOS EM PROBLEMAS COMPLEXOS

// Grafos são muito usados em sistemas como:
// 1. Redes de Transporte (mapas e direções)
// 2. Redes Sociais (relacionamentos entre usuários)
// 3. Redes de Computadores (conexões entre máquinas)
// 4. Planejamento de Recursos (fluxos e distribuições)

// Podemos representar esses problemas complexos com grafos e 
// aplicar algoritmos para resolver questões como otimização de caminhos, maximização de recursos, etc.

// Classe Graph, que representa um grafo e suas operações básicas
class Graph {
    constructor() {
        // O grafo é representado por uma lista de adjacências,
        // onde cada vértice aponta para uma lista de seus vizinhos.
        this.adjacencyList = {}; // A chave será o vértice e o valor será um array de objetos com vizinhos e pesos.
    }

    // Método para adicionar um vértice ao grafo
    addVertex(vertex) {
        // Verifica se o vértice já existe. Se não, cria uma lista vazia de adjacências para ele.
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Método para adicionar uma aresta entre dois vértices
    addEdge(vertex1, vertex2, peso, directed = false) {
        // Adiciona uma aresta de vertex1 para vertex2 com o peso fornecido.
        // O peso pode ser um número, string ou qualquer outro tipo de dado.
        this.adjacencyList[vertex1].push({ vertex: vertex2, peso: peso });
        
        // Se o grafo não for direcionado (directed = false),
        // também adiciona a aresta de vertex2 para vertex1.
        if (!directed) {
            this.adjacencyList[vertex2].push({ vertex: vertex1, peso: peso });
        }
    }

    // Método de busca que retorna os vizinhos de um vértice específico
    search(vertex) {
        // Verifica se o vértice existe no grafo
        if (this.adjacencyList[vertex]) {
            // Retorna os vizinhos do vértice, incluindo o peso de cada aresta.
            return this.adjacencyList[vertex];
        } else {
            // Se o vértice não existe, retorna uma mensagem de erro.
            return 'Vértice não encontrado no grafo';
        }
    }

    // Comentado: Este era o método original que apenas adicionava a aresta sem considerar o peso
    // addEdge(vertex1, vertex2, directed = false) {
    //    this.adjacencyList[vertex1].push(vertex2);
    //
    //    if (!directed) {
    //        this.adjacencyList[vertex2].push(vertex1);
    //    }
    //}
}

// Criando um novo grafo
const graph = new Graph();

// Adicionando vértices ao grafo. Cada vértice será uma chave na lista de adjacências.
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

// Adicionando arestas com pesos entre os vértices. O peso pode ser qualquer tipo de dado (número, string, etc).
graph.addEdge('A', 'B', 5); // Aresta entre A e B com peso 5
graph.addEdge('A', 'C', 2); // Aresta entre A e C com peso 2
graph.addEdge('B', 'D', 'off'); // Aresta entre B e D com peso 'off' (string)
graph.addEdge('C', 'D', 1, true); // Aresta direcionada de C para D com peso 1

// Testando o método de busca. Aqui estamos verificando os vizinhos de alguns vértices.
console.log(graph.search('A')); // Exibe os vizinhos de A com os pesos
console.log(graph.search('B')); // Exibe os vizinhos de B com os pesos
console.log(graph.search('Z')); // Exibe 'Vértice não encontrado no grafo'

// Exibindo o grafo completo em formato JSON, o que facilita a visualização das estruturas internas
// Isso vai mostrar a lista de adjacência com os vértices e seus respectivos vizinhos e pesos.
console.log(JSON.stringify(graph, null, 2));
