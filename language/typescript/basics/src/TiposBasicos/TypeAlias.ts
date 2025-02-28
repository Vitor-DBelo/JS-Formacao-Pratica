// Criando um alias (apelido) para um tipo
type Idade = number | string;

// Criando um tipo para representar um usuário
type InterfaceUser = {
    name: string;
    age: Idade;
    urlPortifolio?: string;
};

// Função para verificar idade antes de atribuir
const ageVerify = (n: number): number => {
    if (n > 100) {
        console.log('Erro: Idade acima dos 100. Atribuindo 100 como idade máxima.');
        return 100; // Definindo um valor padrão (pode mudar se quiser)
    }
    return n;
};

// Classe para criar usuários
class User implements InterfaceUser {
    name: string;
    age: Idade;
    urlPortifolio: string;

    constructor(name: string, age: number, url: string) {
        this.name = name;
        this.age = ageVerify(age); // Verifica a idade antes de atribuir
        this.urlPortifolio = url;
    }

    mostraUrl(): void {
        console.log(`Portfólio: ${this.urlPortifolio}`);
    }
}

// Criando usuários com validação de idade
const usuario1 = new User('Cleidiriane', 25, 'https://meuportifolio.com');
const usuario2 = new User('Zé', 150, 'https://zeportifolio.com'); // Aqui a idade será ajustada para 100

// Testando as saídas
console.log(usuario1); // { name: 'Cleidiriane', age: 25, urlPortifolio: 'https://meuportifolio.com' }
console.log(usuario2); // { name: 'Zé', age: 100, urlPortifolio: 'https://zeportifolio.com' }

usuario1.mostraUrl(); // Portfólio: https://meuportifolio.com
usuario2.mostraUrl(); // Portfólio: https://zeportifolio.com



type CorRGB = 'vermelho' | 'preto' | 'prata';
type CorCmk = 'rosa' | 'azul' | 'roxo';
type PreferColor = CorRGB | CorCmk;
const cor:PreferColor = 'roxo';