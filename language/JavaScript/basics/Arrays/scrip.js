// Criando um array com 5 elementos usando o construtor de Array
// O construtor é uma forma de criar arrays dinamicamente
const arrManeiro = new Array("Cachorro", "Pipoca", "Sol", "Futebol", "Chocolate");

// Ao deletar, o índice se torna "vazio" e o array ainda tem esse índice, mas com valor `undefined`
delete arrManeiro[2]; 
console.log(arrManeiro[2]); // Vai mostrar "undefined"

// Criando uma variável novoArr, que aponta para o mesmo array de arrManeiro
// Isso significa que qualquer mudança feita no novoArr também afeta o arrManeiro
let novoArr = arrManeiro; 
console.log(novoArr); 

// Agora, usando o spread operator (...), vou criar uma cópia superficial de arrManeiro
// Isso cria um novo array, e qualquer modificação em novoArr não afetará arrManeiro
novoArr = [...arrManeiro];
console.log(novoArr); // Vai mostrar o array copiado (sem as alterações feitas em arrManeiro)

console.log(arrManeiro); // Mostrando arrManeiro novamente para ver que ele não foi alterado

// Usando o spread operator para espalhar elementos dentro de um novo array
// Aqui, estamos adicionando novos itens ao array com o spread operator
const arrComNovosItens = [...arrManeiro, "Cachorro Quente", "Sorvete"];
console.log(arrComNovosItens); // Mostra o novo array com itens adicionais

// Usando o rest operator (...) para pegar vários elementos como argumentos
// O rest operator pode ser útil em funções para coletar múltiplos argumentos em um único parâmetro
function mostrarItens(...itens) {
  console.log("Esses são os itens que você tem: ", itens);
}

mostrarItens(...arrComNovosItens); // Espalha os itens de arrComNovosItens para a função
