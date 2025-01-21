function print(texto) {
    console.log(texto);
}

let idade = 58;

switch (true) { 
    case idade < 18:
        print('Ainda é menor de idade');
        break; // O break encerra a execução do switch aqui. Sem ele, o código continuaria a verificar os outros casos.
    case idade === 58:       // Aqui, estamos utilizando dois cases para a mesma saída. 
    case idade > 18:        // Se a idade for maior que 18 ou exatamente 58, a mesma saída será executada.
        print('Maior de idade');
        break;
    default:
        // O default é executado se nenhum dos casos anteriores corresponder ao valor testado. executando uma saida padrão 
        print('Tem exatamente 18 anos');
        // Não é necessário usar break aqui, pois é o último bloco do switch.
}
