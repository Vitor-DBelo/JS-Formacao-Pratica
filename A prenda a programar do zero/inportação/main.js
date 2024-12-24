// Importando as funções do arquivo "funçõesAuxiliares.js".
// O "require" carrega o módulo e traz o objeto exportado de "funçõesAuxiliares.js".
const funcoes = require('./funçõesAuxiliares'); // Atribui o objeto exportado à variável "funcoes".


// Aqui você imprime o objeto "funcoes" no console.
// O objeto "funcoes" conterá as funções "gets" e "print" exportadas do arquivo "funçõesAuxiliares.js".
console.log(funcoes.print('oi')); // Exibe no console o objeto com as funções "gets" e "print".


const {soma, verificaParImpar} = require('./funçõesAuxiliares');

console.log(soma(2, 3));
console.log(verificaParImpar(10));
