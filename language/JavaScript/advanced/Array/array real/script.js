// Simulando um array real em JavaScript

// Em JavaScript, um array tradicional pode armazenar diferentes tipos de dados.
// Exemplo:
let arr = [1, 'string'];

// Diferente de arrays em outras linguagens, os arrays do JavaScript são, na verdade, objetos complexos.
// Em linguagens de baixo nível, como C ou Java, um array é uma estrutura fixa na memória,
// onde todos os elementos possuem o mesmo tipo e são armazenados de forma sequencial.
// Além disso, um array de tamanho fixo não pode ser alterado a menos que seja realocado na memória.

// Para simular um array real em JavaScript, usamos o ArrayBuffer.
// O ArrayBuffer permite representar um bloco de memória bruta.
// Ele não armazena números ou strings diretamente, mas sim bytes puros (valores binários).
// Isso significa que, diferente dos arrays normais do JavaScript, um ArrayBuffer não possui métodos
// para modificar ou acessar os dados diretamente. Ele apenas reserva um espaço na memória.

// Criamos um bloco de 9 bytes na memória.
let buffer = new ArrayBuffer(9);
console.log(buffer.byteLength); // Saída: 9 (9 bytes alocados na memória)

// 📌 O que é um bit e um byte?
// - 1 bit é a menor unidade de informação em um computador (0 ou 1).
// - 1 byte = 8 bits.
// - Como referência: 1 KB (Kilobyte) = 1024 bytes, 1 MB = 1024 KB, etc.
// - Arquiteturas modernas geralmente operam com padrões binários de 32 bits ou 64 bits.

// Para manipular os dados dentro do ArrayBuffer, usamos TypedArrays ou DataView.
// Exemplo com TypedArray (Int32Array):
let int32View = new Int32Array(buffer); // Criamos uma visão de inteiros de 32 bits (4 bytes cada)

int32View[0] = 42;  // Armazena 42 no primeiro espaço de 4 bytes
console.log(int32View[0]); // Saída: 42

// 📌 Explicação do Int32Array:
// - Como 1 inteiro de 32 bits ocupa 4 bytes, um ArrayBuffer de 9 bytes comporta apenas dois inteiros de 32 bits,
//   deixando um byte sem uso.

// Exemplo com DataView:
let dataView = new DataView(buffer);

dataView.setInt8(0, 127);  // Define o primeiro byte como 127
console.log(dataView.getInt8(0));  // Saída: 127

dataView.setInt16(1, 300); // Define os bytes 1 e 2 como 300
console.log(dataView.getInt16(1)); // Saída: 300

// 📌 Diferença entre TypedArray e DataView:
// - TypedArray (Int8Array, Int16Array, Int32Array, etc.) impõe um tipo fixo de dado na memória.
// - DataView permite um controle mais flexível, permitindo a leitura e escrita de diferentes tamanhos de dados
//   dentro do mesmo buffer.

