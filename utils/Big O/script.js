// BIG O NOTATION
// O Big O não mede a performance exata do seu algoritmo, mas sim como ele escala em termos de tempo e espaço conforme o tamanho do input aumenta.
// Para análise detalhada da performance, utilizamos análises assintóticas.   //Sempre consideramos o pior dos casos para uma notação 
 
// Denota o desempenho e a escalabilidade do algoritmo.

// **Complexidade Espacial**
// Refere-se à quantidade de memória necessária para executar o algoritmo.

// **Complexidade Temporal**
// Refere-se ao tempo necessário para executar o bloco de código do algoritmo.

// **Principais Notações do Big O:**

// O(1) - Complexidade Constante
// Tempo -> A execução é rápida e direta, com tempo de execução constante, independente do tamanho do input.
// Memória -> Ocupa um espaço fixo na memória, independentemente do tamanho do input.
const items = ['lapis', 'pera'];
console.log(items[1]); // Acesso direto a um índice em um array é sempre O(1).

// O(Log N) - Complexidade Logarítmica
// O tempo de execução cresce de forma logarítmica em relação ao tamanho do input.
// Comum em algoritmos que dividem o problema em partes menores, como a busca binária.

// Exemplo: Busca Binária
let arr = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 1];

// Ordena corretamente com base no código ASCII
arr.sort();

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === arr[mid]) {
            return `Encontrado: ${arr[mid]}`; // Retorna o caractere ou número encontrado
        }

        if (target > arr[mid]) {
            left = mid + 1; // Ajusta a busca para a direita
        } else {
            right = mid - 1; // Ajusta a busca para a esquerda
        }
    }

    return 'Não encontrado';
}

// Testes
console.log(binarySearch(arr, 'B')); // Encontrado
console.log(binarySearch(arr, '1')); // Encontrado
console.log(binarySearch(arr, 'f')); // Encontrado
console.log(binarySearch(arr, 2));   // Não encontrado

//O(N)
//Significa que o tempo de execução cresce linearmente com o tamanho da entrada.
//Se a entrada dobra, o tempo de execução também dobra.
//O consumo de memória (espaço) também cresce linearmente em O(n),
//se armazenarmos novos dados proporcionalmente à entrada.

function printNumbers(n) {
    // A função percorre todos os números de 1 até n.
    // Quanto maior o 'n', maior o número de execuções (O(n)).
    for (let i = 1; i <= n; i++) {
        console.log(i); // Operação de tempo constante O(1), mas repetida 'n' vezes.
    }
}

// Testando com diferentes valores de 'n'
printNumbers(5); // Executa 5 vezes
printNumbers(100); // Executa 100 vezes

//Tempo: O loop executa n vezes → O(n).
//Espacial: Apenas uma variável i, mas se armazenássemos os números em um array, o consumo de memória também seria O(n).



// O(N Log N) - Complexidade Quasilinear
// O tempo de execução cresce de forma quasilinear, combinando operações lineares (O(N)) com logarítmicas (O(Log N)).
// Isso significa que o algoritmo ainda percorre toda a entrada (N), mas com eficiência melhor que O(N²).
// Quando a entrada dobra, o tempo cresce um pouco mais que o dobro, mas muito menos do que quadruplicaria (como em O(N²)).
// O consumo de memória pode variar dependendo da implementação, mas geralmente está entre O(N) e O(1).

// Exemplo prático de O(N Log N):
function sortArray(array) {
    return array.sort((a, b) => a - b); // O(N Log N)
}

// Teste com um pequeno exemplo
console.log(sortArray([3, 1, 4, 1, 5, 9])); // Retorna: [1, 1, 3, 4, 5, 9]

// O(N²) - Complexidade Quadrática
// O tempo de execução cresce de forma quadrática com o aumento do tamanho da entrada.
// Isso significa que, se a entrada dobrar, o tempo de execução aumentará quatro vezes.
// É comum em algoritmos que têm dois loops aninhados, cada um percorrendo todos os elementos da entrada.

// Exemplo prático de O(N²):
// Vamos contar todas as combinações possíveis de dois elementos em um array (sem considerar repetições).


const numbers = [1, 2, 3, 4];

// Contar todas as combinações possíveis de dois números no array
let count = 0;
for (let i = 0; i < numbers.length; i++) {  // Loop externo (O(N))
    for (let j = 0; j < numbers.length; j++) {  // Loop interno (O(N))
        if (i !== j) {  // Garantir que não contamos o mesmo elemento
            count++;
        }
    }
}

console.log(`Número de combinações: ${count}`);

// Como é O(N²)?
// - O primeiro loop percorre todos os elementos do array (O(N)).
// - O segundo loop percorre novamente todos os elementos (O(N)).
// - O tempo de execução cresce de forma quadrática com o número de elementos, resultando em O(N²).
