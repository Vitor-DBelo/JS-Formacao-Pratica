// Tabela Hash (Hash Table)
// Uma Tabela Hash é uma estrutura que associa chaves únicas a valores, permitindo acesso rápido aos dados.
// Principais conceitos:
// 1. Chave (Key): Identificador único que será mapeado para armazenar um valor.
// 2. Valor (Value): Dado associado a uma chave.
// 3. Função Hash: Algoritmo que transforma a chave em um índice no array subjacente.
// 4. Colisão: Quando duas chaves geram o mesmo índice, os valores são armazenados em listas encadeadas.

// Benefício: Acesso eficiente a dados com complexidade O(1) no melhor caso.

// Implementação de uma Tabela Hash com resolução de colisões por encadeamento.

class HashTable {
    constructor() {
        // Cria uma tabela hash com tamanho inicial de 3
        this.table = new Array(3);
        this.qtyItem = 0; // Contador de itens inseridos na tabela
    }

    // Redimensiona a tabela hash quando o fator de carga ultrapassa 0.8
    resize() {
        const newHashTable = new Array(this.table.length * 2);

        // Reinsere os itens da tabela antiga na nova tabela com tamanho maior
        this.table.forEach(bucket => {
            if (bucket) {
                bucket.forEach(([key, value]) => {
                    const index = this.hashKey(key, newHashTable.length);

                    if (!newHashTable[index]) {
                        newHashTable[index] = [];
                    }

                    newHashTable[index].push([key, value]);
                });
            }
        });

        this.table = newHashTable; // Atualiza a tabela para a nova tabela redimensionada
    }

    // Calcula o índice baseado na chave
    hashKey(key, size = this.table.length) {
        if (typeof key === 'number') {
            // Se a chave for numérica, retorna o módulo do tamanho da tabela
            return key % size;
        }

        // Para chaves do tipo string, cria um hash personalizado
        let hashI = 2;
        for (let i = 0; i < key.length; i++) {
            hashI = (13 * hashI * key.charCodeAt(i)) % size;
        }

        return hashI;
    }

    // Recupera o valor associado a uma chave
    getItem(key) {
        const index = this.hashKey(key); // Calcula o índice da chave

        if (this.table[index] && this.table[index].length > 0) {
            const item = this.table[index].find(([k]) => k === key);
            return item ? item[1] : 'item não existe';
        }

        return 'item não existe'; // Retorna mensagem caso o item não exista
    }

    // Insere ou atualiza um par chave-valor na tabela hash
    setItem(key, value) {
        const loadFactor = this.qtyItem / this.table.length; // Calcula o fator de carga

        if (loadFactor > 0.8) {
            this.resize(); // Redimensiona a tabela se o fator de carga for maior que 0.8
        }

        const index = this.hashKey(key); // Calcula o índice da chave

        if (!this.table[index]) {
            this.table[index] = []; // Inicializa a lista encadeada se necessário
        }

        // Verifica se a chave já existe na lista encadeada
        const existingItem = this.table[index].find(([k]) => k === key);

        if (existingItem) {
            existingItem[1] = value; // Atualiza o valor se a chave já existir
        } else {
            this.table[index].push([key, value]); // Insere um novo par chave-valor
            this.qtyItem++; // Incrementa o contador de itens
        }
    }
}

// Exemplo de uso
const table = new HashTable();
table.setItem('firstName', 'Ambrosio'); // Insere a chave 'firstName' com o valor 'Ambrosio'
table.setItem('lastName', 'Silva');    // Insere a chave 'lastName' com o valor 'Silva'
table.setItem('city', 'São Paulo');    // Insere a chave 'city' com o valor 'São Paulo'
table.setItem('name', 'Paulo');       // Insere a chave 'name' com o valor 'Paulo'

table.setItem('city', 'Rio de Janeiro'); // Atualiza o valor associado à chave 'city'

console.log(table.table);               // Mostra a estrutura interna da tabela hash
console.log(table.getItem('firstName')); // Retorna 'Ambrosio'
console.log(table.getItem('city'));      // Retorna 'Rio de Janeiro'
console.log(table.getItem('name'));      // Retorna 'Paulo'
console.log(table.getItem('nonExistent')); // Retorna 'item não existe'
