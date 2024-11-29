
const array = [5,50,10,98,23];

function verificaNumero(array){
    let maiorNumero = 0;
   

    for(let i = 0; i < array.length; i++){
        if(array[i] > maiorNumero){
            maiorNumero = array[i];
           
        }
    }

    return  maiorNumero;
}


module.exports = {verificaNumero};