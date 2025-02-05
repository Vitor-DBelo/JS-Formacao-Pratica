//Função Fábrica (Factory Function) - Cria e retorna um novo objeto a cada chamada.
function Pessoa(nome, sobrenome, idade) {
    return {
        nome,                    
        sobrenome, 
        ola() {  
            // O uso de "this" dentro de funções fábrica pode impactar levemente a performance,
            // pois cada instância cria sua própria versão da função. No entanto, o impacto geralmente é insignificante.
            console.log(`Olá ${this.nome} ${sobrenome}, seja bem-vindo!`);
        },

        get nomeCompleto(){
            return `Seu nome é: ${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            const partes = valor.split(' ');  
            this.nome = partes.shift();  
            this.sobrenome = partes.join(' ');  
        },


        idade,
        //Getter
        get verificaIdade(){ //O get transforma o método verificaIdade em uma propriedade acessível sem precisar de parênteses.
            if(this.idade >=18){
                console.log('Já é maior de idade');
            }else{
                console.log('Menor de idade');
            }
        }
    };
}

const pessoa1 = Pessoa('Julia', 'Cruz', 18);  // "produto" gerado pela função fábrica.
console.log(pessoa1.nome);  // Acessa a propriedade "nome" do objeto retornado.
pessoa1.ola();  // Executa o método "ola()", exibindo a mensagem no console.
pessoa1.verificaIdade;

pessoa1.nomeCompleto = 'Rafael olivera de solza';
console.log(pessoa1.nomeCompleto);