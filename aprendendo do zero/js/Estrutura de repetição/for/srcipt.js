// **for...in** -> Itera sobre os índices (em arrays) ou as chaves (em objetos).
// Ele é útil para acessar índices de arrays ou propriedades de objetos.

// Exemplo com array
let array = ['Banana', 'Maçã', 'Abacaxi'];

console.log("Usando for...in com array:");
for (let indice in array) {
    // 'indice' armazena os índices (0, 1, 2...) do array.
    console.log(`Índice: ${indice}, Fruta no índice: ${array[indice]}`);
    // 'array[indice]' acessa o valor correspondente ao índice atual.
}

// Exemplo com objeto
const obj = {
    nome: 'txt',  // Uma propriedade chamada "nome" com o valor 'txt'.
    value: 10,    // Uma propriedade chamada "value" com o valor 10.
    uso: true     // Uma propriedade chamada "uso" com o valor true.
};

console.log("\nUsando for...in com objeto:");
for (let chave in obj) {
    // 'chave' armazena o nome de cada propriedade (nome, value, uso).
    console.log(`Chave: ${chave}, Valor: ${obj[chave]}`);
    // 'obj[chave]' acessa o valor da propriedade correspondente.
}

// **for...of** -> Itera sobre os valores de objetos iteráveis (arrays, strings, Map, Set, etc.).
// Ele é útil para acessar diretamente os valores, sem precisar lidar com índices ou chaves.

// Exemplo com array
console.log("\nUsando for...of com array:");
for (let fruta of array) {
    // 'fruta' armazena diretamente o valor atual (Banana, Maçã, Abacaxi).
    console.log(`Fruta: ${fruta}`);
}

// Exemplo com string
let palavra = "JavaScript";

console.log("\nUsando for...of com string:");
for (let letra of palavra) {
    // 'letra' armazena cada caractere da string (J, a, v, a...).
    console.log(`Letra: ${letra}`);
}

// Exemplo com Map
// Um Map é uma estrutura de dados que armazena pares chave-valor, semelhante a um objeto,
// mas com a diferença de que as chaves podem ser de qualquer tipo (incluindo objetos, funções, etc.).
const mapa = new Map(); // Cria um novo Map vazio.
mapa.set('chave1', 'valor1'); // Adiciona um par chave-valor ao Map.
mapa.set('chave2', 'valor2'); // Adiciona outro par chave-valor.

console.log("\nUsando for...of com Map:");
for (let [chave, valor] of mapa) {
    // O for...of em um Map retorna pares chave-valor como arrays [chave, valor].
    console.log(`Chave: ${chave}, Valor: ${valor}`);
}

// Exemplo com Set
// Um Set é uma estrutura de dados que armazena valores únicos (sem duplicatas).
const conjunto = new Set([1, 2, 3, 4]); // Cria um Set com os valores 1, 2, 3, 4.

console.log("\nUsando for...of com Set:");
for (let numero of conjunto) {
    // O for...of em um Set retorna diretamente os valores únicos.
    console.log(`Número: ${numero}`);
}
