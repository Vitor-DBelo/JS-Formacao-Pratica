// Função construtora para criar um objeto "Pessoa"
// Numa função construtora, sempre começa com letra maiúscula para indicar que é um tipo de objeto
function Pessoa(nome, sobrenome) {
    const id_ps = 1; // Propriedade "privada", que não será acessível fora do objeto diretamente

    // O "this" se refere ao objeto que está sendo criado
    // Ele vai atribuir os valores passados para as propriedades do novo objeto
    this.nome = nome;      // Atribui o valor do parâmetro "nome" à propriedade "nome" do objeto
    this.sobrenome = sobrenome; // Atribui o valor do parâmetro "sobrenome" à propriedade "sobrenome" do objeto

    // Definindo um método público para o objeto
    this.fala = () => {
        console.log(`A ${this.nome} ${this.sobrenome} está falando.`);
    }

    // Se tentar acessar "id_ps" diretamente fora da função, não será possível.
    // id_ps é uma variável local à função construtora, portanto não é visível fora dela.
    // Se quiser torná-la acessível de fora, teria que atribuir a "this".
    this.getId = () => {
        return id_ps;  // Retorna o "id_ps", fazendo ele "acessível" através de um método
    }
}

// A palavra-chave "new" cria um novo objeto vazio, executa a função construtora e retorna esse objeto
// O "new" é o que faz o "this" dentro da função construtora se referir ao novo objeto criado
const p1 = new Pessoa('Cleid', 'Ofelia');

// Exibindo o objeto completo no console
console.log(p1); 

// Acessando as propriedades públicas do objeto
console.log(p1.nome);      // 'Cleid'
console.log(p1.sobrenome); // 'Ofelia'

// Chamando o método público "fala"
p1.fala(); // "A Cleid Ofelia está falando."

// Tentando acessar uma propriedade "privada" diretamente
console.log(p1.id_ps);  // Undefined, pois "id_ps" é privado e não está no "this"

// Acessando a "propriedade privada" através de um método público
console.log(p1.getId());  // 1, isso retorna o valor de "id_ps" através do método
