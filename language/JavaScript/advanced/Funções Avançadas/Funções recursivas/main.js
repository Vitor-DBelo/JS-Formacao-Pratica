// Recursividade é quando uma função chama a si mesma dentro do seu próprio corpo.
// O ponto importante é definir um momento para essa recursão parar, senão teremos um loop infinito.

function recursiva(max) {  
    console.log(max); // Exibe o valor atual de max no console

    // Funções recursivas precisam de um limite. 
    // Se a recursão for chamada muitas vezes sem parar, o navegador pode gerar um erro de "Maximum call stack size exceeded".
    // Normalmente, esse limite fica por volta de 10.000 chamadas, mas é melhor evitar chegar perto disso.
    if (max >= 10) return; // Se max for 10 ou maior, a função para e não chama a si mesma novamente.

    max++; // Incrementa o valor de max
    console.log(max); // Exibe o novo valor antes da chamada recursiva

    recursiva(max); // Aqui acontece a recursão, chamando a função novamente com o novo valor de max
}

// Chamamos a função passando -1 como valor inicial
recursiva(-1);
