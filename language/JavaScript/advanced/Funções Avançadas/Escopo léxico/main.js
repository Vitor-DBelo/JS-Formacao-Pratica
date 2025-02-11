function Retornafunc(nome) {
    // A variável 'nome' é definida aqui no escopo da função Retornafunc
    return function() {
        // A função interna tem acesso à variável 'nome', que foi definida no escopo da função Retornafunc
        console.log('faaaaalaaa ' + nome);
        return 'Mensagem retornada com sucesso!'; // A função retorna uma string
    }
}

// Quando chamamos Retornafunc('luiz'), ele retorna a função interna
const funcRet = Retornafunc('luiz');
// A função interna é executada aqui, e ela tem acesso ao 'nome' que foi passado para Retornafunc
console.log(funcRet()); // Vai exibir 'faaaaalaaa luiz' no console e retornar a string 'Mensagem retornada com sucesso!'

// Outro exemplo com a função Retornafunc, mas agora passando 'fernanda' como argumento
const fast = Retornafunc('fernanda');
// O console.dir mostra a estrutura interna da função 'fast' e como ela ainda tem acesso ao 'nome'
console.dir(fast); // Aqui, podemos ver como a função interna lembra do valor de 'nome' que foi passado
