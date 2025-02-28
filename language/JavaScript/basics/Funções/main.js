function executar(fn,params){
    fn(...params);
}
const soma = (a,b) => console.log(a+b);

executar(soma,[3,2]);



//currying
function somar(a){
    return (b) => {
        return a + b;
    }
}

const somar3 = somar(3)

console.log(somar3(2));

// console.log(soma(3)(2));



const numero = [2,1,5,7,9,21,6,4,43,10];
const MutiplicaPorDois = (n) => n * 2;
const dobro = numero.map(MutiplicaPorDois);
console.log(dobro)


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); 

console.log(sum); 