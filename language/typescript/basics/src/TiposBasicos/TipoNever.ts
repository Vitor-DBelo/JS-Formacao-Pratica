// O tipo 'never' indica que uma função nunca retorna um valor.
// Isso acontece quando a função lança um erro ou entra em um loop infinito.

// Função que sempre lança um erro e nunca retorna nada.
function erro(mensagem: string): never {
    throw new Error(mensagem);
}

// erro("Algo deu errado!"); // Se chamada, essa função encerra a execução do programa.

// Função que entra em loop infinito (nunca chega ao fim, então retorna 'never').
function loopInfinito(): never {
    while (true) {
        console.log("Rodando infinitamente...");
    }
}

// Função que verifica um valor e garante que ele nunca será atingido (exemplo de 'exaustividade').
function verificarValor(x: string | number): string {
    if (typeof x === "string") {
        return `Texto: ${x}`;
    } else if (typeof x === "number") {
        return `Número: ${x}`;
    }
    
    // O TypeScript sabe que esse ponto nunca deve ser alcançado,
    // então podemos usar 'never' para garantir a exaustividade.
    return erro("Tipo inesperado!");
}

// Função que lida com um switch-case exaustivo
type Cores = "vermelho" | "azul" | "verde";

function traduzirCor(cor: Cores): string {
    switch (cor) {
        case "vermelho":
            return "Red";
        case "azul":
            return "Blue";
        case "verde":
            return "Green";
        default:
            // Garante que todas as cores foram tratadas corretamente
            const _: never = cor;
            return _;
    }
}

// Se tentarmos chamar 'traduzirCor' com uma cor inválida, TypeScript apontará erro.
console.log(traduzirCor("vermelho")); // Saída: "Red"
