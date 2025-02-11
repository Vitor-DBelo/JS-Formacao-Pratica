// REGISTROS  (record)
// Um registro é como um "pacote" de dados que guarda informações relacionadas.
// No JavaScript, usamos objetos literais para criar registros, que têm chaves e valores.

// Cada chave é como o "nome" da informação, e o valor é o dado que ela guarda.

// Exemplo de um registro:

const carro = {
  marca: "Toyota",     // String
  modelo: "Corolla",   // String
  ano: 2020,           // Número
  preco: 80000.50,     // Número (float)
  vendido: false       // Booleano
};

// Acessando os campos do registro:
console.log(carro.marca);   // Mostra "Toyota"
console.log(carro.ano);     // Mostra 2020
console.log(carro.vendido); // Mostra false

// Atualizando valores do registro:
carro.vendido = true; // O carro foi vendido
console.log(carro.vendido); // Mostra true

// REGISTROS EM UMA LISTA
// Registros podem ser armazenados em um array para criar uma lista:
const pessoas = [
  { nome: "Ana", idade: 30, profissao: "Designer" },
  { nome: "Carlos", idade: 35, profissao: "Engenheiro" },
  { nome: "Beatriz", idade: 28, profissao: "Médica" },
];

// Acessando um registro da lista:
console.log(pessoas[0].nome); // Mostra "Ana"

// Percorrendo a lista de registros:
pessoas.forEach((pessoa) => {
  console.log(`Nome: ${pessoa.nome}, Profissão: ${pessoa.profissao}`);
});