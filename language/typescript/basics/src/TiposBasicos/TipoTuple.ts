// Tuple é um array com tipos específicos e tamanho fixo.
// No TypeScript, você define quais tipos cada posição do array deve ter.
const dadosCli: [number, string] = [1, 'string']; 

// Pode alterar os valores, mas eles devem manter os tipos definidos.
dadosCli[0] = 2; 
dadosCli[1] = 'clid';

// dadosCli[0] = 'clid'; // Erro: Tipo errado (esperado number)

console.log(dadosCli); // Saída: [2, 'clid']

// Tuple com um elemento opcional (?) e um restante de strings (...string[])
const dadosCli1: [number, string?, ...string[]] = [1, 'string'];
console.log(dadosCli1); // Saída: [1, 'string']

// Tuple readonly (não pode ser modificada)
const dadosCli2: readonly [number, string] = [1, 'string'];

// Erro: 'pop' não é permitido porque a tuple é readonly.
// dadosCli2.pop();
