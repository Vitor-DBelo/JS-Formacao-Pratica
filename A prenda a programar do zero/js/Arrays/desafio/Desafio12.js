// Lista de números
const Number = [2, 32, 40, 10];
// Lista vazia onde os números pares serão armazenados
const ListaPar = [];

// Loop que percorre todos os números da lista "Number"
for (let i = 0; i < Number.length; i++) {
    // Verifica se o número é par (resto da divisão por 2 é igual a 0)
    if (Number[i] % 2 === 0) {
        // Se for par, adiciona o número na lista "ListaPar"
        ListaPar.push(Number[i]);
    }
}

// Após o loop, imprime a lista de números pares
console.log(ListaPar); 
