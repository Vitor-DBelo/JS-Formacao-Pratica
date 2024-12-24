// METODOS DE ARRY
var num = [1, 2, 3, 4];

// Facilita o acesso ao elemento do array com índices positivos e negativos
// Índices negativos começam a partir do final do array (-1 é o último elemento)
console.log(num.at(-4));  // A saída será 1

//adicionar um ou mais elementos no final de um array. 
num.push(5, 2, 1); 
console.log(num);  // [1, 2, 3, 4, 5, 2, 1]

// O método push() retorna o novo tamanho do array
let tamanho = num.push(9);
console.log(tamanho);  // 8 (novo tamanho do array)
console.log(num);      // [1, 2, 3, 4, 5, 2, 1, 9]

// Remove o último elemento do array usando pop()
num.pop();  
console.log(num);  // [1, 2, 3, 4, 5, 2, 1]


//preenche todos os elementos de um array com um valor específico, entre os índices iniciais e finais que você definir.
// Substitui todos os elementos do array pelo valor 0
num.fill(0);
console.log(num); 
// Saída: [0, 0, 0, 0, 0] //Preenchendo todo o array com um valor

// O método `fill(9, 2)` substitui os elementos do array a partir do índice 2 até o final pelo valor 9.
// O primeiro argumento (9) é o valor que será usado para preencher os elementos do array.
// O segundo argumento (2) é o índice inicial. A partir desse índice, todos os elementos seguintes serão alterados para o valor 9.
num.fill(9, 2);
console.log(num); 
// Saída: [1, 2, 9, 9, 9]

// O método `fill(7, 1, 3)` substitui os elementos do array do índice 1 (inclusive) até o índice 3 (exclusivo) pelo valor 7.
// O valor 7 será atribuído aos elementos nos índices 1 e 2, mas o índice 3 não será alterado.
num.fill(7, 1, 3);
console.log(num); 
// Saída: [1, 7, 7, 4, 5]

// O método `fill(1)` é usado para preencher todas as posições de um array previamente criado com o valor 1.
// Aqui, um array vazio de tamanho 5 é criado usando `new Array(5)` e preenchido com 1 em todas as suas posições.
var novoArray = new Array(5).fill(1);
console.log(novoArray); 
// Saída: [1, 1, 1, 1, 1]

num.shift(); // Remove o primeiro elemento do arry
console.log(num);

num.unshift(2); // Adiciona elemento no início do arry
console.log(num);

num.reverse(); // Ordena em ordem decrescente 
console.log(num);

num.includes(2); // Verifica se o array contém o valor especificado


// O método `map` aplica uma função a cada elemento do array e retorna um novo array com os resultados.
// No exemplo, cada elemento do array é multiplicado por 2.
var numero = [1, 2, 3, 4];
var resultado = numero.map(item => item * 2);

console.log(resultado); 


// O método `filter` retorna um novo array contendo apenas os elementos que atendem à condição especificada.
// No exemplo, apenas os valores maiores que 2 serão incluídos no novo array.
num = [1, 2, 3, 4];
var resultado = num.filter(item => item > 2);
console.log(resultado); 
// Saída: [3, 4]


// O método `find` retorna o primeiro elemento do array que atende à condição especificada.
// No exemplo, ele retorna o primeiro valor maior que 2.
resultado = num.find(item => item > 2);
console.log(resultado); 
// Saída: 3



// O método `every` verifica se todos os elementos do array atendem à condição especificada.
// No exemplo, ele verifica se todos os elementos são maiores que 0. Retorna `true` porque todos os valores atendem à condição.
resultado = num.every(item => item > 1);
console.log(resultado); 
// Saída: false

// O método `findIndex` retorna o índice do primeiro elemento que atende à condição especificada.
// No exemplo, ele procura pelo valor 4 e retorna o índice 3.
resultado = num.findIndex(item => item === 4);
console.log(resultado); 
// Saída: 3

// O método `reduce` aplica uma função acumuladora aos elementos do array, retornando um único valor.
// No exemplo, ele soma todos os elementos do array, começando com o valor inicial 0.
resultado = num.reduce((prev, curr) => prev + curr, 0);
console.log(resultado); 
// Saída: 10

// O método `toString` converte todos os elementos do array em uma string, separados por vírgulas.
resultado = num.toString();
console.log(resultado); 
// Saída: "1,2,3,4"

// O método `join` junta todos os elementos do array em uma string, usando o separador especificado.
// No exemplo, os elementos são unidos com um espaço entre eles.
resultado = num.join("/");
console.log(resultado);   // pega o resultado retornado pela toString e usa o join para adicioanar /
// Saída: "1 2 3 4"

// O método `splice` pode ser usado para adicionar ou remover elementos do array.
// No exemplo, ele adiciona os valores "i" e "p" na posição 2, sem remover nenhum elemento.
num.splice(2, 0, "i", "p");
console.log(num); 
// Saída: [1, 2, 'i', 'p', 3, 4]
var removidos = num.splice(2, 2); // Começa no índice 1 e remove 2 elementos
console.log(num);
console.log('Removidos  '+removidos);

// O método `sort` organiza os elementos do array em ordem alfabética (ou lexicográfica) por padrão.
// Para arrays numéricos, ele pode não funcionar corretamente sem uma função de comparação.
num = [4, 1, 3, 2];
console.log(num);
num.sort();
console.log(num); 
// Saída: [1, 2, 3, 4]




// O método `sort` ordena os elementos do array com base na função de comparação fornecida.
// A função `function(a, b) { return a - b }` compara dois elementos do array.
// Se o resultado for negativo, `a` vem antes de `b`. 
// Se o resultado for positivo, `b` vem antes de `a`.
// Exemplo: Ordenação numérica crescente
var x = [4, 2, 3, 1];
x.sort(function(a, b) {
  return a - b; // Ordena do menor para o maior
});

console.log('x ' + x);
// Saída: [1, 2, 3, 4]

// Para ordenar do maior para o menor, invertemos a lógica da função de comparação.
// A função `function(a, b) { return b - a }` compara dois elementos do array.
// Se o resultado for negativo, `b` vem antes de `a`.
// Se o resultado for positivo, `a` vem antes de `b`.
// Exemplo: Ordenação numérica decrescente
x = [4, 2, 3, 1];
x.sort(function(a, b) {
  return b - a; // Ordena do maior para o menor
});
console.log('x '+ x);
// Saída: [4, 3, 2, 1]