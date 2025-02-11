// variáveis

// console.log é usado para imprimir mensagens e variáveis no console do navegador ou no terminal, ajudando na depuração e na visualização de dados durante o desenvolvimento.
console.log("Hello, world!"); // Imprime uma mensagem no console

let x = 10; // Atribui o valor 10 à variável x
console.log("O valor de x é:", x); // Imprime o valor da variável x

// let ou const. Ambos possuem escopo de bloco, o que significa que só existem dentro do bloco onde foram declarados.
// let: Para variáveis que podem ser reatribuídas.
// const: Para constantes cujo valor não pode ser alterado após a inicialização.
// let permite que o valor seja alterado após a declaração.
// const bloqueia qualquer reatribuição.

// Usando let para valores que mudam
let contador = 0;
contador += 1; // Alteração permitida
console.log("Contador:", contador);

// Usando const para valores fixos
const PI = 3.14159; 
console.log("Valor de PI:", PI);
// PI = 3.14; // Isso causará um erro, pois PI é uma constante


// Operadores

// Valor de atribuição (=) 
// Usado para atribuir valores a variáveis.
let a = 10;  // Aqui, 10 é atribuído à variável a

// Soma (+)
// Usado para somar números ou concatenar strings.
let soma = 5 + 3;  // 5 + 3 resulta em 8
console.log(soma);  // Saída: 8

let nome = "João";
let saudacao = "Olá, " + nome;  // Concatena "Olá, " com o valor de nome ("João")
console.log(saudacao);  // Saída: "Olá, João"

// Subtração (-)
// Usado para subtrair valores.
let subtracao = 10 - 3;  // 10 - 3 resulta em 7
console.log(subtracao);  // Saída: 7

// Multiplicação (*)
// Usado para multiplicar valores.
let multiplicacao = 4 * 2;  // 4 * 2 resulta em 8
console.log(multiplicacao);  // Saída: 8

// Divisão (/)
// Usado para dividir valores.
let divisao = 10 / 2;  // 10 / 2 resulta em 5
console.log(divisao);  // Saída: 5

// Módulo (%) 
// Retorna o resto da divisão.
let modulo = 10 % 3;  // 10 dividido por 3 tem o resto 1
console.log(modulo);  // Saída: 1

// Incremento (++) 
// Aumenta o valor da variável em 1.
contador++;  // contador é incrementado para 6
console.log(contador);  // Saída: 6

// Decremento (--) 
// Diminui o valor da variável em 1.
let contador2 = 5;
contador2--;  // contador2 é decrementado para 4
console.log(contador2);  // Saída: 4

// Operadores de comparação

// Igualdade (==)
// Verifica se os valores são iguais, ignorando o tipo.
let comparacao1 = 10 == "10";  // Comparando valor sem considerar tipo
console.log(comparacao1);  // Saída: true

// Identidade (===)
// Verifica se os valores e os tipos são iguais.
let comparacao2 = 10 === "10";  // Comparando valor e tipo
console.log(comparacao2);  // Saída: false

// Diferente (!=)
// Verifica se os valores são diferentes.
let comparacao3 = 10 != 5;  // 10 é diferente de 5
console.log(comparacao3);  // Saída: true

// Maior que (>)
// Verifica se o valor da esquerda é maior que o da direita.
let comparacao4 = 10 > 5;  // 10 é maior que 5
console.log(comparacao4);  // Saída: true

// Menor que (<)
// Verifica se o valor da esquerda é menor que o da direita.
let comparacao5 = 5 < 10;  // 5 é menor que 10
console.log(comparacao5);  // Saída: true


