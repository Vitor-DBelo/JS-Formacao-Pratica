
// Definindo um objeto literal
const carro = {
    Nome: 'Uno',
    Marca: 'Fialt',
    Ano:  2003,
    AnoDelancamento: 1984,

    // Método "buzina": uma função associada ao objeto "carro". 
    // Um método é uma função que faz parte de um objeto e pode acessar as propriedades do objeto usando "this".
    buzina:function(){
        // O "this" é usado para referenciar o próprio objeto, no nosso caso "carro".
        // Ele garante que estamos acessando as propriedades do objeto onde o método foi chamado.
        console.log(`O nome do carro é: ${this.Nome} ele é da marca: ${this.Marca}  do ano: ${this.Ano} \nO ano de lançamento do carro ${this.Nome}  foi ${this.AnoDelancamento}`);
    }
};

// Variável "atributo" armazena o nome de uma propriedade do objeto
const atributo = 'Ano';

// Acessando dinamicamente a propriedade usando colchetes
console.log(carro[atributo]);

// Usando diretamente a notação de colchetes para acessar a propriedade "Nome"
// A notação de colchetes é conhecida como **notação de coleção**, pois usamos uma string 
// como chave para acessar o valor associado a ela.
carro['Nome']; //notação de coleção

// Atribui um novo valor para a propriedade "Nome" do objeto carro usando a notação de colchetes **notação de coleção.
carro['Nome'] = 'Uno da Masa';

carro.buzina();

console.log('*******************************************************');

// Altera novamente o valor da propriedade "Nome", desta vez utilizando a notação de ponto.
carro.Nome = 'Uno';

carro.buzina();

