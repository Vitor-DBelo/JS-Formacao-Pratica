// Função auxiliar sem retorno (Procedimento)
// Um procedimento executa uma ação específica, mas não retorna nenhum valor.
function sayMyName(name) {  
    console.log(`your name is ${name} ` + name); 
}

// Função principal (main)
// Por convenção, é comum organizarmos o código principal dentro de uma função chamada "main".
// A função main centraliza a execução do programa e delega tarefas às funções auxiliares.
function main(){  
    console.log('oi'); 

    // Chamada da função auxiliar sayMyName:
    // Passamos o nome como argumento para exibir no console.
    sayMyName('jovem');
}

main();



// Função com retorno
// Funções com retorno realizam cálculos ou operações e devolvem um valor para ser usado.
function quadrado(valor) { 
    return valor * valor; 
}

// Armazena o resultado do quadrado de 10 na constante quadradoDeDez.
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez); // Exibe no console.

// Chamando a função diretamente em uma operação:
console.log(quadrado(10) + quadrado(10)); 


function addJuros(valor,juros){
    let acrecimo = (juros / 100) * valor;
    return valor + acrecimo;
}

const mostraAddJuros = addJuros(100,10);
console.log(mostraAddJuros);




console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// exemplo pratico

// Função auxiliar para calcular o IMC
// Recebe altura (em metros) e peso (em kg), e retorna o IMC
function calculaImc(altura,peso){
    const imc = peso / (altura ** 2);
    return  imc;
}

// Função auxiliar para classificar e exibir o IMC
// Recebe o IMC calculado e determina em qual faixa ele se encontra
function verificaImc(imc){
    if (imc >= 40) {
        console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está com obesidade grave!!`);
    } else if (imc >= 30 && imc < 40) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está com obesidade!!`);
    } else if (imc >= 25 && imc < 30) {
        console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está acima do peso!!`);
    } else if (imc >= 18.5 && imc < 25) {
        console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está com peso normal!!`);
    } else {
        console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está abaixo do peso!!`);
    }
}

(function main(altura,peso){

    // Calcula o IMC chamando a função auxiliar `calculaImc`
    const imc = calculaImc(altura,peso);

    // Passa o resultado do cálculo para a função auxiliar `verificaImc` para classificar o IMC
    verificaImc(imc);
    
   
})(1.70,200); // função imediatamente invocada (IIFE - Immediately Invoked Function Expression) é executada imediatamente após sua definição


//main(1.70,200); // passa o argumento da funçao  "1.70 e 200"



// Funções em JavaScript podem ser tratadas como variáveis, o que significa que podem ser reatribuídas  ou armazenadas em outras variáveis.

function reatrib() {
    return 'oi';   // A função precisa retornar um valor para que ele possa ser atribuído a uma variável
}

// Atribuindo o valor retornado pela função reatrib() à variável dizOi
let dizOi = reatrib();  


console.log(dizOi);  


console.log(reatrib);   // Exibe a função reatrib, pois aqui estamos apenas fazendo uma referência à função

// Reatribuindo a função reatrib a uma nova definição
reatrib = function() {
    return 'Boa tarde';
}


console.log(reatrib());  


// Explicação técnica: Em JavaScript, funções são objetos de primeira classe. Isso significa que:
// 1. Funções podem ser atribuídas a variáveis, ou seja, funções podem ser tratadas como valores.
// 2. Funções podem ser reatribuídas, ou seja, podemos mudar o comportamento de uma função ao longo do tempo.
// 3. Funções sem retorno, como reatrib() inicialmente, retornam `undefined` por padrão, e não podem ser atribuídas com sucesso a variáveis quando esperamos um valor.

 // Funções não nomeada sao aquelas q n tem nome 