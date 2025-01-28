//break e continue são usadas dentro de estruturas de repetição (como for, while, e do...while)
//e têm a função de alterar o fluxo normal de execução do loop.

//for
//break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Interrompendo o loop no número:', i);
        break; // Sai do loop quando i é igual a 5
    }
    console.log(i); // Imprime os números de 0 a 4
}
console.log('Loop encerrado.');

//continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`Pulando o número par: ${i}`);
        continue; // Pula para a próxima iteração quando o número for par
    }
    console.log(i); // Só imprime números ímpares
}



//while
//break
let num = 0;
while (num < 10) {
    if (num === 7) {
        console.log('Interrompendo o loop no número:', num);
        break;
    }
    console.log(num);
    num++;
}

//continue

while (num < 10) {
    num++;
    if (num % 3 === 0) {
        console.log(`Pulando o múltiplo de 3: ${num}`);
        continue; // Pula para a próxima iteração se num for múltiplo de 3
    }
    console.log(num);
}

//com break e continue
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log('Pulando o número:', i);
        continue; // Pula o número 3
    }
    if (i === 7) {
        console.log('Encerrando o loop no número:', i);
        break; // Encerra o loop no número 7
    }
    console.log(i); // Imprime os números, exceto o 3
}