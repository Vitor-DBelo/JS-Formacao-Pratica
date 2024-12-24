let altura = 1.70;
let peso = 75.88;

// Calculando o IMC
const imc = peso / (altura ** 2);

//Math.pow(altura,2)
// Usamos Math.pow(base, expoente) para calcular a potência.
// Neste caso, estamos elevando a altura ao quadrado (altura^2),

// Verificando as condições do IMC
if (imc >= 40) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está com obesidade grave!!`);
} else if (imc >= 30 && imc < 40) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está com obesidade!!`);
} else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está acima do peso!!`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está com peso normal!!`);
} else {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está abaixo do peso!!`);
}
