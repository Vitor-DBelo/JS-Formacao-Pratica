// A função recebe múltiplos números como argumentos e os multiplica.
// O operador '...' (rest operator) transforma os argumentos em um array.
function multiplicarNumero(...args: Array<number>): number {
    // Usa o método reduce para iterar sobre o array e multiplicar os valores.
    // O valor inicial é 1, pois na multiplicação ele não altera o resultado.
    return args.reduce((ac, valor) => ac * valor, 1);
}

let result = multiplicarNumero(1, 2, 3);
console.log(result); // Saída: 6

// A função recebe múltiplas strings como argumentos e as concatena em uma única string.
// O operador '...' transforma os argumentos em um array de strings.
function concatString(...args: string[]): string {
    // Usa o método join para juntar todas as strings do array, separando por espaço.
    return args.map(valor => valor.toUpperCase()).join(' ');
}

const concat = concatString('2', 'five', '29');
console.log(concat); // Saída: "2 five 29"
