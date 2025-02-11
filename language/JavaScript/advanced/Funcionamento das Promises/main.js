// Funcionamento das Promises e Assincronismo
// Assincronismo ocorre quando uma tarefa não é executada imediatamente, 
// pois leva um tempo para ser concluída. Durante esse tempo, outras partes 
// do programa continuam sendo executadas sem interrupções.
 
// As Promises são usadas para lidar com essas operações assíncronas. 
// Elas representam uma promessa de que o resultado estará disponível no futuro.
// Promises podem ter três estados principais:
// 1. Pending (Pendente): A operação ainda está em andamento.
// 2. Fulfilled (Concluída): A operação foi concluída com sucesso e um valor está disponível.
// 3. Rejected (Rejeitada): A operação falhou e um erro foi retornado.
//
// Exemplo: Requisições a APIs, leitura de arquivos ou timers utilizam assincronismo
// para evitar que o programa trave enquanto espera pela conclusão dessas tarefas.

const numero = new Promise((resolve, reject) => {
    const n = Math.floor(Math.random() * 100); // Gera um número inteiro entre 0 e 99
    resolve(n); // Sempre resolve com o valor gerado
});

// Encadeamento de `then`, `catch` e `finally`
numero
    .then((value) => {
        console.log(value); // Exibe o valor resolvido pela promessa
    })
    .catch((error) => {
        console.error(error); // Trata qualquer erro (embora neste caso `reject` nunca é chamado)
    })
    .finally(() => {
        console.log('foi'); // Sempre é executado, independentemente do resultado
    });

// Simulando Assincronismo com Promises
const numero2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const n = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
        resolve(n); // Resolve a Promise com o valor gerado após 1 segundo
    }, 1000);
});

console.log('Mensagem exibida primeiro devido ao assincronismo do JavaScript');
// A mensagem acima é exibida antes porque `setTimeout` é assíncrono e a execução do código
// continua enquanto a tarefa de "esperar 1 segundo" é colocada na fila de eventos.

// Tratando a Promise
numero2
    .then((value) => {
        return value + 10; // Retorna o valor resolvido incrementado em 10 para o próximo `then`
    })
    .then((value) => {
        console.log(value, 'numero2'); // Exibe o valor incrementado pelo primeiro `then`
    })
    .catch((error) => {
        console.error(error); // Captura e exibe qualquer erro que ocorra durante a execução da Promise
    })
    .finally(() => {
        console.log('finalizado'); // Sempre executado após a Promise ser resolvida ou rejeitada
    });


console.log(numero2)
//Manipulando Arquivos através de Promises


//arquivo csv 
// Um arquivo CSV (Comma Separated Values) é um arquivo de dados estruturado, onde cada linha é separada por quebras de linha e as colunas por delimitadores como ponto e vírgula (;).   coluna ; linha **enter
// O conteúdo desse arquivo pode ser manipulado e lido como se fosse uma tabela simples, similar ao Excel ou ao Google Sheets. 

const fs = require('fs');  // Módulo nativo do Node.js para manipulação de arquivos

// Usando o caminho absoluto completo para o arquivo CSV, com 'path' para garantir que o código funcione independentemente do diretório atual.
const path = require('path')
const filePath = path.resolve(__dirname, 'tasks.csv')  // 'resolve' cria um caminho absoluto com base no diretório atual (__dirname) e o nome do arquivo.

// Usando 'fs.promises.readFile()' para ler o arquivo assíncronamente.
// O método 'promises.readFile' retorna uma Promise, permitindo que você execute o código de forma assíncrona, sem bloquear o fluxo do programa.
const promesaArquivoCSV = fs.promises.readFile(filePath, 'utf-8');  // 'utf-8' é a codificação para garantir que o arquivo seja lido como texto.

promesaArquivoCSV
    .then((arquivo) => {
        // O 'arquivo' contém o conteúdo completo do arquivo CSV como uma string.
        // Neste ponto, podemos manipular essa string para transformá-la em um formato utilizável.
        // Vamos apenas retornar o conteúdo do arquivo para o próximo 'then'.
        return arquivo  // Retorna o conteúdo do arquivo para o próximo bloco de código (encadeamento de Promises).
    })
    .then((textoDoCSV) => {
        // O 'split' é utilizado para dividir a string em um array de linhas. Cada linha será uma string no array.
        // A função 'split("\n")' divide o texto nas quebras de linha, ou seja, cada linha do CSV vira um item do array.
        // 'slice(1)' remove a primeira linha do arquivo, que normalmente é o cabeçalho (os nomes das colunas).
        return textoDoCSV.split('\n').slice(1)  // Divide as linhas e remove o cabeçalho.
    })
    .then((linhasDoCabecalho) => {
        // O 'map' vai iterar sobre cada linha restante e processar os dados.
        // Em cada linha, a função 'split(" ; ")' separa o nome da tarefa e o status "feito" com base no delimitador ';'.
        // O resultado de 'map' será um novo array de objetos, onde cada objeto terá 'nome' e 'feito' com valores extraídos da linha.
        return linhasDoCabecalho.map((linha) => {
            const [nome, feito] = linha.split(';')  // Desestruturação da linha para pegar as colunas 'nome' e 'feito'.
            return {
                nome,  // O nome da tarefa, que é a primeira parte da linha.
                feito: feito.trim() === 'true'  // Compara se o valor da coluna 'feito' é 'true' (removendo espaços extras com 'trim').
            }
        })
    })
    .then((listaDeTarefas) => {
        // Agora temos a lista de tarefas em formato de array de objetos.
        // Cada objeto tem 'nome' e 'feito' (que agora é um valor booleano).
        // O console.log exibe essa lista para que possamos visualizar o resultado.
        console.log(listaDeTarefas)  // Exibe o array de tarefas com o nome e o status de "feito" como booleano.
    })
    .catch((error) => {
        // Se algum erro ocorrer em qualquer uma das etapas, ele será capturado aqui.
        // Por exemplo, se o arquivo não for encontrado ou houver um erro no processamento.
        console.error('Erro ao ler o arquivo:', error.message);  // Exibe a mensagem do erro ocorrido.
    })
    .finally(() => {
        // O bloco 'finally' sempre será executado, independentemente de ter ocorrido erro ou não.
        // Esse é um bom lugar para realizar tarefas finais, como logar ou liberar recursos.
        console.log('deu bom')  // Uma mensagem final indicando que o processo de leitura do arquivo terminou.
    });



// usando async await

// Definindo o caminho para o arquivo 'tasks.csv' usando 'path.resolve' para garantir o caminho absoluto
const novoCaminho = path.resolve(__dirname, 'tasks.csv');  

// Função assíncrona 'buscaArquivo' usando 'async/await'
async function buscaArquivo(){
    try {
        // 'await' pausa a execução até que a Promise retornada por 'fs.promises.readFile' seja resolvida
        // Isso faz a função esperar pela leitura do arquivo antes de seguir para o próximo código
        const novaPromessa = await fs.promises.readFile(novoCaminho, 'utf-8');
        
        // Exibe o conteúdo do arquivo assim que a Promise for resolvida
        console.log(novaPromessa);
    } catch (error) {
        // Se ocorrer um erro durante a leitura do arquivo ou qualquer outra operação assíncrona, ele será capturado aqui
        console.log(error); // Exibe a mensagem de erro, se houver
    } finally {
        // O bloco 'finally' sempre será executado, independentemente de erro ou sucesso
        // Aqui, estamos apenas imprimindo uma mensagem de finalização
        console.log('async await finalizado');
    }
}

// Chama a função 'buscaArquivo' para executar o código
buscaArquivo();
