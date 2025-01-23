function p(texto) {
    console.log(texto);
}

class funcionario{
    salarioBruto;
    beneficio;

    constructor(salarioBruto, beneficio){
        this.salarioBruto = salarioBruto;
        this.beneficio = beneficio;
    }

    CalculaDesconto() {
        let salarioFinal = this.salarioBruto; 
        let imposto = 0;

        if (this.salarioBruto <= 1100.00) {
            imposto = (this.salarioBruto * 5) / 100;
            salarioFinal = salarioFinal - imposto;
        } else if (this.salarioBruto <= 2500.00) {
            imposto = (this.salarioBruto * 10) / 100;
            salarioFinal = salarioFinal - imposto;
        } else {
            imposto = (this.salarioBruto * 15) / 100;
            salarioFinal = salarioFinal - imposto;
        }

        
        salarioFinal += this.beneficio;
        return salarioFinal;
    }
}

let Cleid = new funcionario(2500,250);
let salarioTransferido = Cleid.CalculaDesconto();
p(`O salário a ser transferido é R$ ${salarioTransferido.toFixed(2)}`);