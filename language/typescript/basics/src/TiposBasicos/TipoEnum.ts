// Enum é uma forma de definir um conjunto de valores nomeados, que podem ser usados como constantes.

// Enum numérico (os valores começam do 0, mas podemos definir um ponto de partida)
enum Cor {
    VERMELHO,  // 0
    AZUL,      // 1
    VERDE,     // 2
    ROXO = 'ROXO', // Quando usamos string, precisamos definir o valor explicitamente.
}

// Podemos adicionar mais valores a um enum já declarado.
enum Cor { 
    ROSA = 3,    // Definimos manualmente o valor como 3.
    AZULCLARO,   // Como não foi definido um número, ele continua de 3, então será 4.
}

// Função que recebe um enum e exibe informações sobre ele
function escolhaCor(cor: Cor): void {
    console.log(Cor);         // Mostra todo o enum
    console.log(Cor.VERDE);   // Mostra o valor do enum (número 2)
    console.log(Cor[2]);      // Acessa o nome pelo índice (imprime 'VERDE')
    console.log(Cor.ROXO);    // Mostra o valor da cor 'ROXO' (que foi definida como string)
}

escolhaCor(Cor.VERDE); // Chamada da função passando um valor do enum
