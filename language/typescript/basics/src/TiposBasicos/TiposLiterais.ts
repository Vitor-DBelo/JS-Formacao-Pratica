// Tipos Literais no TypeScript
// -------------------------------------------
// Em TypeScript, tipos literais permitem restringir os valores que uma variável pode assumir.
// Ao invés de aceitar qualquer string, number ou boolean, você define valores específicos.

// Exemplo com string literal
let direcao: 'esquerda' | 'direita' | 'cima' | 'baixo';

direcao = 'esquerda'; // Ok
// direcao = 'frente'; // Erro: Tipo não permitido

console.log(direcao); // Saída: 'esquerda'

// Exemplo com números literais
let opcao: 1 | 2 | 3;

opcao = 2; // Ok
// opcao = 4; // Erro: Tipo não permitido

console.log(opcao); // Saída: 2

// Uso de tipos literais com booleanos
let statusCarro: 'ligado' | 'desligado';

statusCarro = 'ligado'; // Ok
// statusCarro = 'em movimento'; // Erro

console.log(statusCarro); // Saída: 'ligado'

// Tipos literais combinados com objetos
type Configuracao = {
  tema: 'claro' | 'escuro';
  notificacoes: true | false;
};

const config: Configuracao = {
  tema: 'escuro',
  notificacoes: true,
};

console.log(config); // Saída: { tema: 'escuro', notificacoes: true }

// Tipos literais e funções
function respostaServidor(status: 200 | 404 | 500) {
  if (status === 200) return 'Sucesso';
  if (status === 404) return 'Não encontrado';
  return 'Erro interno';
}

console.log(respostaServidor(200)); // Saída: 'Sucesso'

// Uso de "as const" para criar constantes literais
const person = {
  nome: 'clecle' as const, // 'nome' só pode ser 'clecle'
  sobrenome: 'offofo',
};

// person.nome = 'luiz'; // Erro: 'nome' é um valor fixo
console.log(person); // Saída: { nome: 'clecle', sobrenome: 'offofo' }

// Exemplo de variável declarada com um literal numérico
let valorFixo: 100;
valorFixo = 100; // Ok
// valorFixo = 200; // Erro: só pode ser 100

console.log(valorFixo); // Saída: 100
