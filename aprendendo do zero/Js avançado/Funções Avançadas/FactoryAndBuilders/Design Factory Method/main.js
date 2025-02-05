// 🏭 Fábrica de transporte - Função factory que cria objetos do tipo Transporte
function criaTransporte(nome, modelo, tipo, subtipo, lmtCrg) {
  return {
    // 🔹 Propriedades do produto (objeto transporte)
    nome,
    modelo,
    tipo,      // Ex: "Marítimo" ou "Terrestre"
    subtipo,   // Ex: "Navio de Carga" ou "Carreta"
    lmtCrg,    // Capacidade de carga em toneladas (idealmente um número)

    // 🚚 Método para entrega - Deve ser sobrescrito nas fábricas especializadas
    entrega() {
      console.log('Entrega pelo ...'); // Placeholder genérico
    },

    // ⚖ Método para mostrar o limite de carga
    limiteDeCarga() {
      console.log('O limite de carga desse veículo é ' + this.lmtCrg + ' toneladas.');
    },

    // 📌 Método para exibir detalhes do transporte
    detalhes() {
      console.log(`Veículo: ${this.nome}, Modelo: ${this.modelo}, Tipo: ${this.tipo}, Subtipo: ${this.subtipo}, Capacidade: ${this.lmtCrg} toneladas.`);
    }
  };
}

// 🚢 Fábrica de transportes marítimos (extende criaTransporte)
function Maritimo(nome, modelo, subtipo, lmtCrg) {
  let base = criaTransporte(nome, modelo, 'Marítimo', subtipo, lmtCrg);

  // ⚓ Sobrescrevendo o método de entrega para indicar transporte marítimo
  base.entrega = function () {
    console.log('Entrega pelo mar 🌊');
  };

  // ⚖ Sobrescrevendo o método limiteDeCarga para personalizar a saída
  base.limiteDeCarga = function () {
    console.log('O limite de peso é ' + base.lmtCrg + ' toneladas 🚢');
  };

  return base; // Retorna um "produto" do tipo Marítimo
}

// 🚛 Fábrica de transportes terrestres (extende criaTransporte)
function Terrestre(nome, modelo, subtipo, lmtCrg) {
  let base = criaTransporte(nome, modelo, 'Terrestre', subtipo, lmtCrg);

  // 🏎️ Sobrescrevendo o método de entrega para indicar transporte terrestre
  base.entrega = function () {
    console.log('Entrega pela terra 🚛');
  };

  // ⚖ Sobrescrevendo o método limiteDeCarga para personalizar a saída
  base.limiteDeCarga = function () {
    console.log('O limite de peso é ' + base.lmtCrg + ' toneladas 🏋️‍♂️');
  };

  return base; // Retorna um "produto" do tipo Terrestre
}

// 🏗️ Criando instâncias (produtos)
let navio = Maritimo('Titanic', 'Cruise Liner', 'Navio de Carga', 50);
let caminhao = Terrestre('Scania', 'R500', 'Carreta', 30);

// 📌 Exibindo os detalhes dos transportes criados
console.log('📜 Detalhes dos transportes criados:');
console.log('');

navio.detalhes();
navio.entrega();
navio.limiteDeCarga();

console.log(''); // Separação visual

caminhao.detalhes();
caminhao.entrega(); 
caminhao.limiteDeCarga();
