// 🚀 GERADORES EM JAVASCRIPT 🚀
// Geradores são funções especiais que podem ser pausadas e retomadas posteriormente.
// Eles usam a palavra-chave `function*` e produzem valores sob demanda usando `yield`.
// Diferente de funções normais, os geradores não executam tudo de uma vez; eles retornam valores gradualmente quando `next()` é chamado.

// 📌 EXEMPLO 1: Gerador simples
function* generator1() {
    // O `yield` pausa a função e retorna um valor, retomando do mesmo ponto na próxima chamada de `next()`
    yield 'Valor 1'; 
    yield 'Valor 2';
    yield 'Valor 3';
}

// Criamos uma instância do gerador
const g1 = generator1();

console.log(g1.next().value); // Primeiro `yield`: 'Valor 1'
console.log(g1.next().value); // Segundo `yield`: 'Valor 2'
console.log(g1.next().value); // Terceiro `yield`: 'Valor 3'
console.log(g1.next().value); // Sem mais `yield`, retorna { value: undefined, done: true }

// Podemos usar um `for..of` para consumir todos os valores do gerador automaticamente
const g1b = generator1(); // Criamos outra instância, pois geradores não podem ser reutilizados após completarem
for (let valor of g1b) {
    console.log(valor);
}

console.log('=========================================================');

// 📌 EXEMPLO 2: Gerador infinito (com limite)
function* generator2() {
    let id = 0;
    while (id <= 100) { // Esse gerador gera números de 0 a 100
        yield id;
        id++;
    }
}

const g2 = generator2();
// Chamando o gerador com um `for`, para consumir os primeiros 10 valores sem precisar chamar `next()` manualmente
for (let index = 0; index < 10; index++) {
    console.log(g2.next().value);
}

console.log('=========================================================');

// 📌 EXEMPLO 3: Gerador delegando para outro gerador
function* generator3() {
    yield 1;
    yield 2;
    yield* generator4(); // `yield*` delega a execução para outro gerador
}

function* generator4() {
    yield 3;
    yield 4;
    yield 5;
}

const g3 = generator3();
// Consumindo os valores do gerador, que inclui os valores do generator4 também
for (let index = 0; index < 5; index++) {
    console.log(g3.next().value);
}

console.log('=========================================================');

// 📌 EXEMPLO 4: Gerador que retorna funções
function* generator5() {
    yield () => console.log('Função anônima 1');
    yield function () { console.log('Função anônima 2'); }
}

// Pegamos os valores do gerador (que são funções) e chamamos elas
const g5 = generator5();
const func1 = g5.next().value; // Pega a primeira função gerada
const func2 = g5.next().value; // Pega a segunda função gerada

func1(); // Executa a primeira função
func2(); // Executa a segunda função

console.log('=========================================================');

// 🚀 MÉTODOS DOS GERADORES 🚀
// Os geradores possuem três métodos principais além do `next()`:

// 📌 `next()` → Avança até o próximo `yield` e retorna `{ value, done }`.
// 📌 `return(valor)` → Finaliza o gerador imediatamente e retorna `{ value, done: true }`.
// 📌 `throw(erro)` → Lança um erro dentro do gerador, podendo ser tratado com `try...catch`.

// 📌 EXEMPLO 5: Usando `return()` para finalizar um gerador
function* generator6() {
    yield 'Passo 1';
    yield 'Passo 2';
    return 'Encerrado'; // Aqui ele termina antes dos próximos `yield`
    yield 'Passo 3'; // Nunca será executado
}

const g6 = generator6();
console.log(g6.next()); // { value: 'Passo 1', done: false }
console.log(g6.next()); // { value: 'Passo 2', done: false }
console.log(g6.return('Forçando fim')); // { value: 'Forçando fim', done: true }
console.log(g6.next()); // { value: undefined, done: true } (pois já encerrou)

console.log('=========================================================');

// 📌 EXEMPLO 6: Usando `throw()` para lançar erro no gerador
function* generator7() {
    try {
        yield 'Rodando...';
        yield 'Ainda rodando...';
    } catch (error) {
        console.log('Erro capturado dentro do gerador:', error);
    }
    yield 'Depois do erro';
}

const g7 = generator7();
console.log(g7.next().value); // 'Rodando...'
console.log(g7.throw('Algo deu errado!')); // Captura o erro e continua a execução
console.log(g7.next().value); // 'Depois do erro'
