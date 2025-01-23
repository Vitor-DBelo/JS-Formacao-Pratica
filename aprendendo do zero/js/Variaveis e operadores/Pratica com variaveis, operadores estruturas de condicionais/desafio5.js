//Metodos de pagamento
//let debito = 0;
//let pix = 0;
//let cartao = 0;
//let dinheiro = 0;

let isFormaDePagamento = 1;

//Valor do produto
const precoProduto = 100;


if(isFormaDePagamento === 1 ){
    let desconto =  (precoProduto * 10) / 100;
    let valorFinal = precoProduto - desconto;

    console.log(`O valor do produto é: ${desconto.toFixed(2)}, O valor do produto é: ${precoProduto.toFixed(2)}, o valor final é: ${valorFinal.toFixed(2)}, se caso pague em debito`);

}else if(isFormaDePagamento === 2 || isFormaDePagamento === 'dinheiro'){
    
    let desconto =  (precoProduto * 15) / 100;
    let valorFinal = precoProduto - desconto;

    console.log(`O valor do produto é: ${desconto.toFixed(2)}  O valor do produto é: ${precoProduto.toFixed(2)}, o valor final é: ${valorFinal.toFixed(2)}, caso pague com pix`);
}else if(isFormaDePagamento === 3){
    let juros =  (precoProduto * 10) / 100;
    let ValorComJuros = (precoProduto + juros);
    let valorParcelas = ValorComJuros / 10;
    let ParcelasSemJuros = (precoProduto / 2);

    console.log(`O total de parcelas é: 10, pagando em duas parcelas fica R$:${ParcelasSemJuros.toFixed(2)} sem juros`);
    console.log(`O valor total das parcelas com 10% de juros fica ${ValorComJuros.toFixed(2)}`);
    console.log(`O valor total das 10 parcelas com 10% de juros fica ${valorParcelas.toFixed(2)}`);
}else{
    console.log("Metodo de pagamento não endentificado")
}