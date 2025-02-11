function RecebeArry(array) { //main
    const Narray = array;

    const [arraypar, arrayImpar] = VerificaNumeros(array);

    const maiorpar = VerificaOmaiorPar(arraypar);
    const maiorImpar = verificaParImpar(arrayImpar);

    print('O maior par é ' + maiorpar);
    print('O maior impar é ' + maiorImpar);
}

function VerificaNumeros(Narray) {
    let n = Narray[0];
    let array = Narray.slice(1); // Ignora o primeiro valor do array (o 'n') e pega os próximos elementos
    let arraypar = [];
    let arrayImpar = [];

    for (let i = 0; i < n; i++) { // Começa o loop no índice 0
        if (array[i] % 2 == 0) {
            arraypar.push(array[i]);
        } else {
            arrayImpar.push(array[i]);
        }
    }
    return [arraypar, arrayImpar];
}

function VerificaOmaiorPar(arraypar) {
    let maiorpar = 0; 
    for (let i = 0; i < arraypar.length; i++) {
        if (arraypar[i] > maiorpar) {
            maiorpar = arraypar[i]; 
        }
    }
    return maiorpar; 
}

function verificaParImpar(arrayImpar) {
    let maiorImpar = 0; 
    for (let i = 0; i < arrayImpar.length; i++) {
        if (arrayImpar[i] > maiorImpar) {
            maiorImpar = arrayImpar[i]; // Correção do nome da variável
        }
    }
    return maiorImpar; 
}



function print(texto) {
    console.log(texto);
}

module.exports = {RecebeArry,VerificaNumeros,VerificaOmaiorPar,verificaParImpar};