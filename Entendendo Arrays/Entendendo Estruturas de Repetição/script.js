// Declara um array vazio chamado 'notas'.
const distancia = [];

distancia.push(3);


distancia.push(5);

distancia.push(10);

// Utiliza um laço 'for' para percorrer todos os elementos do array 'notas'.
// O laço inicia com 'i' igual a 0 e continua enquanto 'i' for menor que o tamanho do array 'notas'.
// A cada iteração, 'i' é incrementado em 1.
for (let i = 0; i < distancia.length; i++) {
    // Exibe a mensagem 'olaaa' no console a cada iteração do laço.
    console.log('olaaa');
}



const nome ='Cleid olivera Hamos de pinho';

for (let index = 0; index < nome.length; index++) {
    console.log(nome[index]);
}

console.log('****************************************************\n');

const avaliacoes = [];

avaliacoes.push(4);
avaliacoes.push(7);
avaliacoes.push(9);

for (let y = 0; y < avaliacoes.length; y++){
    console.log(avaliacoes[y]);
}

console.log('****************************************************\n');

const notas = [];

notas.push(3);


notas.push(5);

notas.push(10);

let soma = 0; 
let media = 0;
for (let y = 0; y < distancia.length; y++) {
    const nota = notas[y];
    soma = soma + nota;
    media = soma /distancia.length;
}

console.log('A media é  ' + media);