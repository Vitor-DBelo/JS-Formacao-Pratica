// Introdução a Manipulação de Listas 
// Criamos uma lista chamada 'list' com alguns números. 
const list = [1, 2, 5, 6, 6, 7];

// forEach: Percorre todos os elementos de uma lista. 
// Para cada elemento, executa a função fornecida. 
list.forEach((value, i, listRef) => {
    // value: é o valor atual do item na lista. 
    // i: é o índice do item atual. 
    // listRef: é a referência completa da lista que está sendo percorrida. 
    console.log(value, i, listRef);
});

// Filter
// Cria uma nova lista a partir da original, mas apenas com elementos que satisfaçam uma condição.
// Diferente do forEach, o filter retorna uma lista nova, enquanto o forEach apenas executa algo para cada item. 
const nwelist = list.filter((element) => {
    // Retorna apenas os números pares (elementos cujo resto da divisão por 2 é 0). 
    return element % 2 === 0;
});

console.log(nwelist); // Exibe [2, 6, 6], que são os números pares da lista original.

// Map
// Transforma cada elemento da lista original e retorna uma nova lista com os resultados transformados.

class Pessoa {
    constructor(name) {
        this.name = name; // Define o nome da pessoa.
    }
}

const lista = [
    new Pessoa('Renan'),
    new Pessoa('Andresa'),
    new Pessoa('Vitor'),
    new Pessoa('José')
];

// Criamos uma nova lista apenas com os nomes das pessoas.
const listaNomes = lista.map((element) => element.name);
// map transforma os objetos 'Pessoa' da lista em apenas strings com seus nomes.

console.log(listaNomes); // Exibe ["Renan", "Andresa", "Vitor", "José"].

// Reduce
// Reduz uma lista a um único valor acumulado, aplicando uma função a cada elemento e acumulador.

const somaDeTodosOsNumeros = list.reduce((previous, current) => {
    // previous: valor acumulado até o momento.
    // current: o valor atual do elemento na lista.
    return previous + current;
}, 0); // Começamos o acumulador com 0.

console.log(somaDeTodosOsNumeros); // Exibe 27 (1 + 2 + 5 + 6 + 6 + 7).

// Join e Combinação de Funções de Manipulação

const listNumber = [1, 2, 3];
// join: Junta os elementos de uma lista em uma string, separados por um delimitador.
console.log(listNumber.join('/')); // Exibe "1/2/3".

// Correção da última parte do código:
// O código original tinha erros de sintaxe. Aqui está a versão corrigida:

const novaLista = [
    { nome: 'Renan' },
    { nome: 'Andresa' },
    { nome: 'Vitor' },
    { nome: 'Ananda' }
];

// Mapeamos os nomes e filtramos apenas os que começam com "A", depois juntamos em uma string com ";" como separador.
const nomesFiltradosEUnidos = novaLista
    .map((item) => item.nome) // Extraímos os nomes dos objetos.
    .filter((nome) => nome.startsWith('A')) // Filtramos nomes que começam com "A".
    .join(';'); // Transformamos a lista filtrada em uma string separada por ";".

console.log(nomesFiltradosEUnidos); // Exibe "
