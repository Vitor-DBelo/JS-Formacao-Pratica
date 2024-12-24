// Preço dos combustíveis
const etanol = 4.04;
const gasolina = 6.10;

// Tipo de combustível usado no carro
const combustivel = "gasolina";

// Consumo e distância
const litrosPorKm = 1;  // Consumo de 1 litro por km (ajuste conforme necessário)
const distanciaEmKm = 4; // Distância da viagem em km

// Variável para armazenar o custo total
let media = 0;

// Cálculo do custo total dependendo do combustível
if (combustivel === "etanol") {
    // Calcula o custo com etanol
    media = distanciaEmKm * litrosPorKm * etanol;
    console.log(`O valor total da viagem utilizando etanol é: R$ ${media.toFixed(2)}`);
} else{
    // Calcula o custo com gasolina
    media = distanciaEmKm * litrosPorKm * gasolina;
    console.log(`O valor total da viagem utilizando gasolina é: R$ ${media.toFixed(2)}`);
}
