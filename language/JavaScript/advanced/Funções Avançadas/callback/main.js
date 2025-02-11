// Função rand: retorna um número aleatório entre o valor mínimo e máximo fornecido.
function rand(min = 1000, max = 3000){
    let valor = Math.floor(Math.random() * (max - min));  // Gera um número aleatório dentro do intervalo
    return valor;
}

// Função n1: realiza uma ação assíncrona com setTimeout, executando a função callback quando o tempo acabar.
function n1(callback){
    setTimeout(() => {  // setTimeout executa uma função após um tempo específico
        console.log('n1'); // Exibe 'n1' no console
        if(callback) callback();  // Se uma função callback for passada, ela é executada
    }, rand());  // O tempo de delay é aleatório, gerado pela função rand()
}

// Função n2: funciona de forma semelhante a n1, mas com seu próprio delay aleatório.
function n2(callback){
    setTimeout(() => {  // Executa n2 após um tempo aleatório
        console.log('n2');  // Exibe 'n2' no console
        if(callback) callback();  // Executa o callback após o término da execução de n2
    }, rand());
}

// Função n3: mesma lógica de n1 e n2, mas exibe 'n3' no console ao invés de 'n1' ou 'n2'.
function n3(callback){
    setTimeout(() => {  // Executa n3 de maneira assíncrona
        console.log('n3'); // Exibe 'n3' no console
        if(callback) callback(); // Chama o próximo callback após a execução
    }, rand());
}

n1(n1callback)

// Callback n1callback: responsável por chamar n2 após a execução de n1.
function n1callback(){
    n2(n2callback);  // Após n1 terminar, chama n2 e passa n2callback como parâmetro
}

// Callback n2callback: responsável por chamar n3 após a execução de n2.
function n2callback(){
    n3(n3callback);  // Após n2 terminar, chama n3 e passa n3callback como parâmetro
}

// Callback n3callback: executa a última ação, que é exibir 'Olaa mundo'.
function n3callback(){
    console.log('Olaa mundo'); // Exibe a mensagem final após a execução de n3
}

// O código abaixo foi comentado, mas o que ele fazia era encadear as funções de forma direta, 
// o que é equivalente ao uso dos callbacks acima. Aqui, n1 chama n2, que chama n3, e finalmente 'Ola mundo'.
/* 
n1(() => {
    n2(() => {
        n3(() => {
            console.log('Ola mundo')
        })
    })
})
*/

