class Carro {   // por padrao sempre inicie uma classe com letra maiuscula 
    constructor(Marca,Cor,GastoMedio){
        this.Marca = Marca;
        this.Cor = Cor;
        this.GastoMedio = GastoMedio;
    }

    CalculaGasto(distanciaKm,PrecoCombustivel){
        const GastoTotal = (distanciaKm / this.GastoMedio) * PrecoCombustivel;
        return GastoTotal;
    }
}

const FiatUno = new Carro('Uno','Preto',9.8);
console.log(`O valor gasto em reais sera R$${FiatUno.CalculaGasto(100,6.88).toFixed(2)}`);