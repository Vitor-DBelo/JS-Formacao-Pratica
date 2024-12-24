

// Função chamada "gets", que retorna um valor fixo de 10.
function gets(){
    return 10;
}

// Função chamada "print", que recebe um **parâmetro** "Text" e imprime no console.
function print(Text){
    return Text;
}


// Função que soma dois números
function soma(a, b) {
    return a + b;
}

// verifica idade
function verificaParImpar(num) {
    return num % 2 === 0 ? `${num} é par` : `${num} é ímpar`;
}


// O "module.exports" é um objeto especial no Node.js. Ele é usado para exportar qualquer parte que você precise do seu codigo.
module.exports = {gets, print, soma, verificaParImpar};

// Isso é específico para o Node.js, onde você usa `require` para importar o módulo
// em outro arquivo. Exemplo de como importar no Node.js: