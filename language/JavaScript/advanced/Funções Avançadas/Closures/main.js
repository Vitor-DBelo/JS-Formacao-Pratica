//Closure (ou fechamento) é um conceito que ocorre quando uma função "lembra" do ambiente em que foi criada, 
//mesmo depois que o escopo em que ela foi definida já foi finalizado. Ou seja, a função mantém o acesso às variáveis
//que estavam no seu escopo lexical original, mesmo depois de ser executada fora desse escopo.
//No seu exemplo, a função interna que é retornada pelo Retornafunc consegue acessar a variável nome mesmo depois 
//de Retornafunc ter retornado, isso é o que caracteriza o closure.


// A função Retornafunc recebe um argumento 'nome' e retorna uma função interna
// A função interna "lembra" do valor de 'nome' mesmo após a execução de Retornafunc
function Retornafunc(nome) {
    // A função interna tem acesso à variável 'nome' definida no escopo de Retornafunc
    return function() {
        // Aqui, a função interna acessa e imprime 'nome' no console
        console.log('faaaaalaaa ' + nome);
        // A função retorna uma mensagem após a execução
        return 'Mensagem retornada com sucesso!';
    }
}

// Chama a função Retornafunc, passando o argumento 'luiz' como nome
const funcRet = Retornafunc('luiz');
// Exibe no console a mensagem 'faaaaalaaa luiz' e também o retorno da função interna
console.log(funcRet()); // A função interna retorna 'Mensagem retornada com sucesso!'

// Chama a função Retornafunc novamente, passando 'fernanda' como nome
const fast = Retornafunc('fernanda');
// Exibe a estrutura interna da função retornada pela Retornafunc
console.dir(fast); // Mostra como a função interna mantém acesso à variável 'nome'
