// Objetos

// Literal é o valor diretamente atribuído
let literal = 0; 

// Objeto literal é um objeto dinamico,criado diretamente no código com propriedades e valores definidos dentro de chaves {}.
const car =      
{
    nome: 'uno',  // "nome" é a chave e 'uno' é o valor associado a ela
    ano: 1920     // "ano" é a chave e 1920 é o valor associado a ela
};


// Acessando a propriedade "nome" do objeto "car" usando a notação de ponto
console.log(car.nome);  // Saída: 'uno' (valor da propriedade "nome")

// É possível adicionar novas propriedades a um objeto literal depois de sua criação
car.marca = 'fiat';  // Adicionando uma nova propriedade "marca" com o valor 'fiat' ao objeto "car"


// Removendo a propriedade "nome" do objeto "car" usando o operador "delete".
// O "delete" remove a chave e seu valor do objeto, ou seja, a propriedade "nome" será removida do objeto "car".
delete car.nome;  // Após essa linha, a propriedade "nome" não existirá mais no objeto "car"

console.log(car);


//**********************************************************************************************************

console.log('******************************************************************************************************');


