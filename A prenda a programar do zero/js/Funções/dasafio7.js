function main(){
    // Chama a função informaAidade() e armazena o valor retornado
    let idade = informaAidade(); 
    
    // Chama a função verificaIdade() e passa o valor de idade
    console.log(verificaIdade(idade));
}

function informaAidade(){
    let idade = 18;  // Define a idade como 18
    return idade;    // Retorna a idade
}

function verificaIdade(idade){
    // Verifica se a idade é maior ou igual a 18
    if (idade >= 18) {
        return 'Maior de idade';  // Se for maior ou igual a 18
    } else {
        return 'Menor de idade';  // Se for menor que 18
    }
}

main();  // Chama a função principal
