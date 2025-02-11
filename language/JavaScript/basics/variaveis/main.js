

// Convenções de nomenclaturas em JavaScript

// Variáveis só podem começar com letras, e é uma boa prática começar com letras minúsculas.
let letra = 'L'; // Nome de variável comum começa com minúscula.

// Para funções ou classes construtoras, a convenção é começar com letras maiúsculas.
class MinhaClasse {
  constructor() {
    this.valor = 10;
  }
}

// Variáveis podem começar com `$` ou `_`, que são usados comumente para fins especiais.
// Por exemplo, `_` pode indicar que a variável é restrita ao escopo da função.
let $essa_eu_nao_sabia = 20; // Uso válido de `$` no nome da variável.
let _soAq = 2; // Uso de `_` para indicar que a variável é "privada" ou restrita ao escopo.

// Em convenções de nomenclaturas, quando uma variável possui mais de uma palavra, utilizamos o `camelCase`.
// `camelCase` começa com uma letra minúscula e usa letras maiúsculas para separar as palavras.
let bomDeBola = 'fut'; // `camelCase` segue a convenção.

// Para constantes, usamos letras maiúsculas e, em muitos casos, o `SNAKE_CASE`, ou seja, todas as letras maiúsculas e separadas por `_`.
const CLEID = 'morreu'; // Exemplo de constante, todas as letras maiúsculas.


// Tipos de Dados em JavaScript

// Tipos Primitivos:
// Boolean: representa valores verdadeiros ou falsos.
let isTrue = true;
let isFalse = false;
console.log(`Tipo boolean: ${isTrue}, ${isFalse}`);

// Null: ausência de valor. 
let valorNulo = null; // Não contém nada, mas é explicitamente "vazio".
console.log(`Tipo null: ${valorNulo}`);

// Undefined: valor indefinido. Geralmente é o valor padrão para variáveis que não foram inicializadas.
let valorIndefinido;
console.log(`Tipo undefined: ${valorIndefinido}`);

// Number: representa números inteiros e de ponto flutuante.
let inteiro = 42; // Número inteiro.
let flutuante = 3.14; // Número com casas decimais (float).
console.log(`Tipo number (inteiro): ${inteiro}`);
console.log(`Tipo number (float): ${flutuante}`);

// String: sequência de caracteres, usada para representar texto.  
let texto = 'Olá, mundo!';
console.log(`Tipo string: ${texto}`);

// Symbol: um valor único e imutável, usado principalmente como identificadores únicos em objetos.
let simbolo = Symbol('id');
console.log(`Tipo symbol: ${simbolo.toString()}`);

// Objeto (Object): uma estrutura mais complexa que pode conter múltiplos pares de chave-valor.
// Um exemplo básico de objeto:
let pessoa = {
  nome: 'João',
  idade: 25,
  ativo: true
};
console.log('Tipo object:', pessoa);

// Exemplo de JSON (JavaScript Object Notation):
let usuario = {
    id: 1,
    nome: 'Ana',
    email: 'ana@email.com',
    ativo: true,
    preferencias: {
      tema: 'escuro',
      notificacoes: true
    }
  };
  
  // Converter o objeto para uma string JSON
  let jsonString = JSON.stringify(usuario, null);
  console.log('Exemplo de JSON.stringify: ', jsonString);
  
  // Agora, converter a string JSON de volta para um objeto
  let jsonObj = JSON.parse(jsonString);
  console.log('Exemplo de JSON.parse: ', jsonObj);   
  
// Null e Undefined:
let nullVar = null; // Variável com valor explicitamente nulo.
let undefinedVar; // Variável sem valor atribuído (undefined).
console.log('Exemplo null:', nullVar);
console.log('Exemplo undefined:', undefinedVar);

// Boolean em ação:
let textoVazio = ''; // Uma string vazia é falsy.
console.log('String vazia é falsy:', !!textoVazio); // Converte para boolean e mostra false.

let textoComConteudo = 'Olá';
if (textoComConteudo) {
  console.log('String não vazia é truthy:', textoComConteudo);
} else {
  console.log('String vazia é falsy.');
}

// Nota importante:
// Os tipos "primitivos" (boolean, number, string, null, undefined, symbol) são imutáveis, ou seja, seus valores não podem ser alterados.
// Objetos (Object) são mutáveis, e podem ser alterados dinamicamente.



var var1 = 2;
var var2 = '2';

console.log(var1 + var2);
console.log(var1 - var2);


// Tipos de variáveis em JavaScript

var ola = 'ola';  // `var` é uma variável que sofre hoisting e vaza o escopo do bloco.
let oi = 'ola';   // `let` é limitada ao escopo do bloco onde foi declarada.
const olaa = 'ola'; // `const` também é limitada ao escopo do bloco, e seu valor não pode ser reatribuído.

if (true) {                  
    // `var` vaza o escopo do bloco, tornando a variável acessível fora do `if`.
    var um = 10; 

    // `let` e `const` ficam limitados ao escopo do bloco.
    let dois = 20;
    const tres = 30;
}

console.log(um); // Resultado: 10 (porque `var` vaza o escopo do bloco)

// Tentar acessar `dois` ou `tres` gera erro, pois estão fora do escopo do bloco.
// console.log(dois); // ReferenceError: dois is not defined
// console.log(tres); // ReferenceError: tres is not defined

//Hoisting

// Exemplo de hoisting com `var`

// Neste ponto, a variável foi apenas "declarada" (hoisting),
// mas ainda não recebeu valor, então retorna `undefined`.
console.log(minhaVariavel); // Resultado: undefined

// O JavaScript eleva apenas a declaração da variável, como se ela fosse escrita assim no topo:
// var minhaVariavel;

// Atribuímos um valor à variável aqui.
minhaVariavel = 'Teste'; 

// Agora a variável possui o valor atribuído.
console.log(minhaVariavel); // Resultado: "Teste"

// Declaração da variável
var minhaVariavel;
