// estrutura for

// O "for" é uma estrutura de repetição que executa um bloco de código várias vezes
// No caso abaixo, estamos utilizando "for" para imprimir os números de 1 a 10

for (let i = 1; i <= 10; i++) { 
    // "let i = 1" é onde a variável de controle começa, ou seja, i começa com valor 1.
    // "i <= 10" é a condição que será verificada a cada repetição. Enquanto "i" for menor ou igual a 10, o laço continuará executando.
    // "i++" significa incrementar "i" em 1 a cada iteração, ou seja, depois de imprimir 1, "i" passa a ser 2, depois 3, e assim por diante.
    // "i++" é o mesmo que escrever "i = i + 1" ou "i += 1".
    
    console.log(i); // Dentro do laço, estamos imprimindo o valor de "i" no console.
}


// Temos uma lista de frutas e queremos imprimir cada uma delas usando "for"

let frutas = ['maçã', 'banana', 'laranja', 'uva', 'melancia'];

// O "for" vai percorrer cada índice do array "frutas" e imprimir o valor de cada fruta
for (let i = 0; i < frutas.length; i++) { 
    // "i = 0" começa com o primeiro índice do array (0 é o índice do primeiro item).
    // "i < frutas.length" significa que o laço vai continuar até "i" ser igual a quantidade de itens no array.
    // "frutas.length" retorna o número total de elementos no array, que é 5 neste caso.
    // "i++" vai incrementar o valor de "i" em 1 a cada iteração, indo de 0 até 4 (último índice do array).

    console.log(frutas[i]); // "frutas[i]" acessa o valor do item no índice "i" e imprime no console.
}
