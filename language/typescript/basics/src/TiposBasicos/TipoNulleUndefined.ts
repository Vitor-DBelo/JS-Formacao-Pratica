// NULL E UNDEFINED EM TYPESCRIPT

// 'undefined' significa que a variável foi declarada, mas não recebeu um valor.
let x: number | undefined;

if (typeof x === 'undefined') x = 20; // Se 'x' for undefined, atribui o valor 20.

console.log(x * 2); // Saída: 40

// 'null' representa ausência intencional de valor.
let y: null = null;
console.log(y); // Saída: null

// Variáveis opcionais podem ser 'undefined' se não forem passadas.
function saudacao(nome?: string): string {
    return nome ? `Olá, ${nome}!` : 'Olá, visitante!';
}

console.log(saudacao()); // Saída: "Olá, visitante!"
console.log(saudacao('Carlos')); // Saída: "Olá, Carlos!"

// Criando um objeto de forma segura com 'readonly'
function createVersion(firstName: string, age: number, lastName?: string ): Readonly<{
    firstName: string;
    lastName?: string;
    age: number;
}> {
    return {
        firstName,
        lastName,
        age,
    };
}

const pessoa2 = createVersion('Ana', 30,'Silva');
// pessoa.age = 31; // Erro: propriedade 'age' é somente leitura

console.log(pessoa2);

// Função que retorna null se não for passado um número
function square(x: any) {
    if (typeof x === "number") return x * x;
    return null;
}

console.log(square(4)); // Saída: 16
console.log(square('teste')); // Saída: null

// Exemplo de uma função que pode retornar null
function buscarUsuario(id: number): string | null {
    const usuarios: Record<number, string> = {
        1: 'Ana',
        2: 'Bruno'
    };
    return usuarios[id] || null; // Retorna null se o usuário não for encontrado
}

console.log(buscarUsuario(1)); // Saída: 'Ana'
console.log(buscarUsuario(3)); // Saída: null

// Exemplo de controle estrito no TypeScript
let opcional: null | undefined;
opcional = null;
opcional = undefined;

// O operador '!' força TypeScript a tratar uma variável como sempre definida.
function comprimento(texto?: string) {
    return texto!.length; // Assume que 'texto' não será undefined (cuidado ao usar!)
}

// console.log(comprimento()); // Isso causaria um erro em tempo de execução
console.log(comprimento('Teste')); // Saída: 5
