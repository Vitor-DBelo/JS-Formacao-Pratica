
// Uma classe é como uma "fábrica" ou "molde" que define a estrutura e o comportamento dos objetos que serão criados.
class pessoa { 
    // Essas propriedades armazenam informações sobre os objetos da classe (neste caso, Nome e Idade).
    Nome;
    Idade;
    
    descrever (){
        console.log(`Olá, meu nome é ${this.Nome} e eu tenho ${this.Idade} anos.`);
    }
};

// Criando uma instância
// As instâncias são os objetos reais criados com base nesse molde.
// No caso abaixo, o objeto "Cleid" será criado seguindo o modelo definido na classe "pessoa".
// Isso significa que "Cleid" terá as propriedades Nome, Idade e poderá usar o método descrever().
const Cleid = new pessoa();

// Atribuindo o nome "Cleid Noronha" à propriedade Nome do objeto "Cleid".
Cleid.Nome = 'Cleid Noronha';

// Atribuindo a idade "68" à propriedade Idade do objeto "Cleid".
Cleid.Idade = 68;

// Criando uma instância
const Renan = new pessoa();

// Atribuindo o nome "Renan do Val" à propriedade Nome do objeto "Renan".
Renan.Nome = 'Renan do Val';

// Atribuindo a idade "29" à propriedade Idade do objeto "Renan".
Renan.Idade = 29;

// Ao exibir o objeto no console
console.log(Cleid);

// Ao exibir o objeto no console
console.log(Renan);

// Chamando o método

// Quando chamamos um método de um objeto, ele executa as instruções definidas na classe.
// Nesse caso, o método "descrever" do objeto "Cleid" utiliza os valores das propriedades "Nome" e "Idade"
// para exibir uma mensagem personalizada no console.
Cleid.descrever();

// Assim como o objeto "Cleid", o objeto "Renan" também possui acesso ao método "descrever".
// Porém, o método utiliza os valores específicos das propriedades "Nome" e "Idade" do objeto "Renan",
// então a saída será diferente, dependendo de como essas propriedades foram definidas para "Renan".
Renan.descrever();

console.log('****************************************************************************');


class carro {
    Nome;
    Ano;
    AnoDeCompra;
    TempoComOVeiculo;
    

    // O "constructor" é chamado automaticamente sempre que um objeto é criado a partir de uma classe.
    // Isso significa que o objeto passa PRIMEIRO pelo "constructor" para que suas propriedades sejam inicializadas 
    // (ou configuradas) com valores específicos. Só depois de passar pelo "constructor", o objeto estará 
    // totalmente configurado e pronto para executar qualquer outro método ou acessar suas propriedades.
    constructor(Nome,Ano,AnoDeCompra){                         
        this.Nome = Nome;                                               // constructor(){      
        this.Ano = Ano;                                                //    this.Nome = 'Defout' 
        this.AnoDeCompra = AnoDeCompra;                               //     this.Ano = 'Defout'      
        this.TempoComOVeiculo = this.AnoDeCompra - this.Ano;         //    } 
    }                      

    buzina(){
        console.log(`Nome: ${this.Nome} Ano: ${this.Ano} Tempo com o Veiculo: ${this.TempoComOVeiculo}`);
    }
};

const Uno = new carro('CLEID',1986,2024);

console.log(Uno);

Uno.buzina();


console.log('****************************************************************************');

// function recebendo objeto

class Livro {
    constructor (Nome,Autor,preco){
        this.Nome = Nome;
        this.Autor = Autor;
        this.preco = preco;
    }

    abri(){
        console.log(`O Livro ${this.Nome} do autor ${this.Autor} esta aberto`);
    }
    fechar(){
        console.log('O Livro foi fechado!!');
    }
}

// Função que recebe dois objetos do tipo Livro como parâmetros e compara seus preços
function MenorPrecoLivro(Livro1,Livro2){
    if(Livro1.preco > Livro2.preco)
    {
        return `O preço do livro: ${Livro2.Nome} do autor ${Livro2.Autor} é o menor `
    }
    else if (Livro1.preco < Livro2.preco)
    {
        return `O preço do livro: ${Livro1.Nome} do autor ${Livro1.Autor} é o menor `
    }
    else
    {
        return 'Os dois livros possuem o mesmo preço!!'
    }
}

// Criando objetos do tipo Livro utilizando a classe Livro
// Aqui estamos instanciando (criando) dois objetos, Livro1 e Livro2, passando argumentos para suas propriedades
// Essas instâncias seguem a "formalização" ou "contrato" definido pela classe Livro.
// O contrato garante que qualquer objeto criado pela classe Livro terá um Nome, um Autor e um preco.
const Livro1 = new Livro('A arte','Rafael',10.92); // Nome, autor e preço do primeiro livro
const Livro2 = new Livro('A falha','Junior',10.91);  // Nome, autor e preço do segundo livro


console.log(MenorPrecoLivro(Livro1,Livro2));
Livro1.abri();