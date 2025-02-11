// Type Annotations
// Para tipos que já existem em JavaScript, usamos letras minúsculas no início. Exemplo: boolean, string, number.

// Tipos primitivos básicos
let nome: string = 'Luiz';  // A variável 'nome' é do tipo 'string', ou seja, ela só pode armazenar textos.

let idade: number = 25;  // A variável 'idade' é do tipo 'number', podendo armazenar números inteiros ou decimais.
let altura: number = 1.75;  // Outro exemplo de 'number', armazenando um valor decimal.

let adulto: boolean = true;  // A variável 'adulto' é do tipo 'boolean', podendo ser apenas 'true' ou 'false'.

let simbolo: symbol = Symbol('id');  // 'simbolo' é do tipo 'Symbol', usado para criar valores únicos e imutáveis.

// let big: bigint = 9007199254740991n;  
// 'big' é do tipo 'bigint', usado para representar números inteiros muito grandes.
// O 'n' no final indica que é um valor do tipo 'bigint'.

// Tipos especiais
let indefinido: undefined = undefined;  // 'undefined' significa que a variável foi declarada, mas não tem valor definido.

let nulo: null = null;  // 'null' representa a ausência intencional de qualquer valor.

// Arrays
let numeros: number[] = [1, 2, 3, 4.5];  // Um array contendo apenas números.
let nomes: string[] = ['Ana', 'Carlos', 'Maria'];  // Um array contendo apenas strings.

// Tuplas
let tupla: [string, number] = ['Carlos', 28];  
// Uma tupla é um array com um número fixo de elementos e tipos específicos.

// Objetos
let pessoa: { nome: string, idade: number } = { nome: 'João', idade: 30 };  
// A variável 'pessoa' é um objeto que deve conter uma 'string' no campo 'nome' e um 'number' no campo 'idade'.

// Função com anotação de tipo
function soma(a: number, b: number): number {
  return a + b;
}
// A função 'soma' recebe dois parâmetros do tipo 'number' e retorna um 'number'.

// Tipo 'any' (evite usar)
let qualquerCoisa: any = 'Texto';  
qualquerCoisa = 10;  // O tipo 'any' permite qualquer tipo de dado, mas pode causar problemas no código.