//Orientação a Protótipo
const pessoa = {
    genero: 'masculino',
}

const renan  = {
    nome: 'renan',
    idade: 109,
    __proto__: pessoa  //heransa
}

console.log(renan.genero);


//sempre que uma funçao começar com Letra maiuscula significa que ela pe uma funçao construtora.
function Pesso(nome,idade){   
    this.nome = nome;
    this.idade = idade;
}

    Pesso.prototype.falar = function (){
        console.log('casete')
    }

let ren = new Pesso('renan',30);
ren.falar();

// isso é a mesma couisa que a function Pesso acima
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`);
    }
}

let reno = new Pessoa('Renan', 30);
reno.falar();



// Entendendo Sobrescrita e Shadowing

// Definimos um objeto chamado 'car' com uma propriedade 'ano'.
const car = {
    ano: 1998, // Aqui o 'ano' é 1998
}

// Criamos outro objeto chamado 'uno'. 
// Ele possui sua própria propriedade 'ano', definida como 2003, 
// e um protótipo (__proto__) apontando para o objeto 'car'.
const uno = {
    nome: 'uno', // Propriedade específica do 'uno'
    ano: 2003, // Shadowing: o 'ano' de 'uno' "esconde" o 'ano' do protótipo 'car'
    __proto__: car, // Herança: 'uno' herda propriedades do 'car'
}

// Quando acessamos 'uno.ano', o JavaScript verifica primeiro no próprio objeto 'uno'.
// Ele encontra a propriedade 'ano' com o valor 2003, então não busca no protótipo.
console.log(uno.ano); // Resultado: 2003

// Explicação: 
// Apesar de o protótipo 'car' ter 'ano: 1998', a propriedade 'ano' de 'uno' "sobrescreve" 
// a herança no contexto desse objeto. Isso é chamado de *shadowing*. 
// Se a propriedade 'ano' não existisse em 'uno', o valor herdado de 'car' seria usado.







//Formas de criação de objetos literais com Protótipos
// Criamos um objeto chamado 'veiculo' com a propriedade 'tipo'
const veiculo = {
    tipo: 'moto' // Propriedade que será usada como protótipo
}

// Criamos um novo objeto chamado 'honda' baseado no protótipo 'veiculo'
// Isso significa que 'honda' herda as propriedades de 'veiculo'
const honda = Object.create(veiculo)

// Adicionamos uma nova propriedade chamada 'modelo' diretamente ao objeto 'honda'
// Essa propriedade é exclusiva de 'honda' e não afeta o protótipo 'veiculo'
honda.modelo = 'CBR 500R'

// Acessamos a propriedade 'tipo' de 'honda'
// Como 'honda' não tem a propriedade 'tipo', o JavaScript busca no protótipo 'veiculo'
// Resultado: 'moto', herdado do protótipo
console.log(honda.tipo) // Output: moto

honda.__proto__ // para acesar instancias




//Entendendo melhor o operador New e Brincando com Protótipos
function Biblioteca(nome, localizacao) {
    this.nome = nome;
    this.localizacao = localizacao;
  }
  
  Biblioteca.prototype.mostrarInfo = function () {
    console.log(`A biblioteca se chama ${this.nome} e está localizada em ${this.localizacao}`);
  };
  
  const biblioteca = {
    tipo: 'pública'
  };
  
  Biblioteca.call(biblioteca, 'Central', 'Centro da Cidade');
  
  console.log(biblioteca);
  



  String.prototype.toPLang = function () {
    return  `P ${this}`
    }
    console.log('teste'.toPLang())