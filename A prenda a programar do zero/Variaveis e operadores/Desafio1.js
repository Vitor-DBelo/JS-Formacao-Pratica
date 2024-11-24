let distancia = 100;
let GasosaPreco = 5.59;
let consumo = 10;
let total = 0;
let media = 0;

total = (distancia  / consumo) * GasosaPreco;
media = total / 2 ;

console.log("A media é: " + media.toFixed(2) );
console.log("O total é: " + total.toFixed(2)); 
// transforma o número original em uma string formatada com exatamente 2 casas decimais.
// "123.46" (2 casas decimais)    "123.457" (3 casas decimais)