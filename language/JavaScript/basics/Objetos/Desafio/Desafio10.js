class Pessoa {
    constructor (altura,peso){
        this.altura = altura;
        this.peso = peso;
    }

    CalculaImc (){
       const imc = this.peso / (this.altura ** 2);

       function VerificaImc(imc){
        
            if (imc >= 40) {
                console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está com obesidade grave!!`);
            } else if (imc >= 30 && imc < 40) {
                console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está com obesidade!!`);
            } else if (imc >= 25 && imc < 30) {
                console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está acima do peso!!`);
            } else if (imc >= 18.5 && imc < 25) {
                console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está com peso normal!!`);
            } else {
                console.log(`Seu IMC é: ${imc.toFixed(2)}. Você está abaixo do peso!!`);
            }
        
        }
        
        VerificaImc(imc);
    }
}

const pessoa1 = new Pessoa(1.75,69);

pessoa1.CalculaImc();