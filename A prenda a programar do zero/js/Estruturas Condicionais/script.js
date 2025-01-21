const numero = 5;

if (numero % 2 === 0) {
    console.log(`Seu número: ${numero} é par`);
} else {
    console.log(`Seu número: ${numero} é ímpar`);
}

// na aula

const n1 = 5;
const isNumeroDivisivoPor5 = (n1 % 5) === 0;  // O operador "=" atribui valor, "==" compara valores, e "===" compara valores e tipos de dados.
console.log(isNumeroDivisivoPor5); 
// Utilizar o prefixo 'is' em variáveis booleanas é uma convenção comum
// que ajuda a tornar o código mais legível, indicando claramente que a
// variável representa uma condição ou estado binário (verdadeiro ou falso).



if (n1 === 0){
    console.log(` esse número é invalido ${n1}`);
}else if(isNumeroDivisivoPor5){
    console.log(`sim: ${n1}`);
}else{
    console.log(`não: ${n1}`);
}

// A exclamação "!" inverte o valor lógico da variável.  
//Se "NumeroPar" for false (ou seja, o número é ímpar), "!NumeroPar" será true, e o bloco do if será executado.
//if(!NumeroPar){   //O operador de negação (!) em JavaScript sempre atua sobre o valor ou variável que aparece depois dele, e não antes.
    //console.log(`o numero é Inpar: ${n1}, ${NumeroPar}`);
//}