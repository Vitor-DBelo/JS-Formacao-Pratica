const a  = {
    chaveA: 'a',
    chaveB: 'b',
};

// No JavaScript, objetos são mutáveis, então é possível alterar os valores das propriedades.
a.chaveA = 'Cleid'; // Permite reatribuir valores, desde que sejam do mesmo tipo.

// a.chaveB = 241;  // TypeScript impede isso, pois a chaveB foi definida como string.

// Record<string, unknown> cria um objeto que aceita qualquer chave e qualquer valor.
// Porém, não é seguro, pois permite valores sem controle de tipo.
// const b: Record<string , unknown> = {
//     chaveA: 'string',
//     chaveB: 23,
// }

// Interface define um modelo seguro para o objeto.
interface MeuObj {
    readonly chaveA: string;   // Ao utilizar readonly, a propriedade se torna imutável após a inicialização.
    chaveB: number;
    [key: string]: unknown; // Permite adicionar novas chaves de qualquer tipo.
}

const b: MeuObj = {
    chaveA: 'string',
    chaveB: 23, // Mantém o controle sobre tipos conhecidos.
};

b.chaveC = 'cleid'; // Funciona, mas TypeScript não sugere essa chave no autocomplete.

console.log(b);
