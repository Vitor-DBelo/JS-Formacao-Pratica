// Declaração de um array chamado 'alunos' contendo strings.
const alunos = ['Joao', 'Marina', 'Cleid'];

// Utilizando o método 'push' para adicionar um novo elemento ao final do array 'alunos'.
alunos.push('renan');

// Outra forma de adicionar elementos ao array é atribuindo diretamente a um índice específico.
// Aqui, estamos atribuindo o valor 'Rafa' ao índice 4 do array.
alunos[4] = 'Rafa';

// Podemos também sobrescrever um valor existente no array.
// Neste caso, o elemento no índice 4 é substituído por 'Elma'.
alunos[4] = 'Elma';

// O método 'pop' remove o último elemento do array.
// Após isso, 'Elma' será removido do array.
alunos.pop();

// O método 'shift' remove o primeiro elemento do array.
// Neste caso, 'Joao' será removido do início do array.
alunos.shift();

// Exibe o conteúdo atual do array 'alunos' no console.
console.log(alunos);

// Tenta acessar o elemento no índice 4 do array.
// Como o elemento foi removido com 'pop', o retorno será 'undefined'.
console.log(alunos[4]); // undefined

console.log('**************************************************************************');

// Declaração de um array vazio chamado 'lista'.
const lista = [];

// Adiciona o elemento 'teste' ao final do array 'lista'.
lista.push('teste');

// Adiciona o número 21 ao final do array 'lista'.
lista.push(21);

// Exibe o conteúdo atual do array 'lista' no console.
console.log(lista);

console.log('**************************************************************************');
console.log('**************************************************************************');


const notas = [];

notas.push(3);
notas.push(5);
notas.push(10);

const soma = notas [0] + notas [1] + notas[2];

console.log('A media é ' + soma / notas.length);

// o length retorna o tamanho da lista
console.log(notas.length);