// O tipo 'void' é usado quando uma função não retorna nada.
// Se uma função retorna algo, o TypeScript exige que um tipo seja especificado.

function NaoRetornaNada(...args: string[]): void {
    console.log(args.join(' ')); // Apenas imprime, sem retorno.
}

NaoRetornaNada('Cleid', 'da', 'pastelaria');

// Se tentarmos armazenar o retorno dessa função, ele será 'undefined'.
let resultado = NaoRetornaNada('Teste', 'void');
console.log(resultado); // undefined

// Se uma função retorna algo, precisamos especificar o tipo de retorno corretamente.
function RetornaNumero(): number {
    return 42;
}

console.log(RetornaNumero()); // 42
