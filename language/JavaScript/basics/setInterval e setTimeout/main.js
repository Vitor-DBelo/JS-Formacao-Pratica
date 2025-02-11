// Função que retorna a hora atual formatada
function getTime() {
    let time = new Date(); // Cria um objeto de data com a hora atual

    return time.toLocaleTimeString('pt-BR', {
        hour12: false // Usa o formato 24h (sem AM/PM)
    });
}

// Criamos um intervalo que executa a cada 1 segundo
const intervalo = setInterval(() => {  //o setInterval executa varias vezes 
    console.log(getTime()); // Chama a função getTime() e exibe a hora atualizada no console
}, 1000); // Executa a cada 1000ms (1 segundo)

// Após 50 segundos, o setTimeout executa e para o setInterval
setTimeout(() => {  //o setTimeout so executa uma vez 
    console.log("Parando a exibição do horário..."); // Exibe mensagem indicando que o intervalo será parado
    clearInterval(intervalo); // Para o setInterval usando a variável 'intervalo'
}, 50000); // 50000ms (50 segundos) depois, ele executa a função e para o intervalo
