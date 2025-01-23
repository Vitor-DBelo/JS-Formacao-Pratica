// main
(function () {
    let isFormaDePagamento = 3;
    let precoProduto = 100;
    let descontos = desconto(precoProduto);
    let juros = jurosProduto(precoProduto);

    // Aqui estamos chamando a função VerificaPagamento e passando os descontos corretamente
    console.log(VerificaPagamento(isFormaDePagamento, precoProduto, descontos,juros));
})();

function desconto(precoProduto) {
    const descontoDe10Porcento = (precoProduto * 10) / 100;
    const descontoDe15Porcento = (precoProduto * 15) / 100;
    
    // Retorna um objeto com os descontos
    return {
        descontoDe10Porcento,
        descontoDe15Porcento
    };
}
function jurosProduto(precoProduto){
    return (precoProduto * 10) / 100;
}
function VerificaPagamento(isFormaDePagamento, precoProduto, descontos, juros) {
    if (isFormaDePagamento === 1) {
        let valorFinal = precoProduto - descontos.descontoDe10Porcento;
        return `O valor do produto é: R$${precoProduto.toFixed(2)}, o desconto é de: R$${descontos.descontoDe10Porcento.toFixed(2)}, o valor final é: R$${valorFinal.toFixed(2)}, caso pague em débito.`;
    } else if (isFormaDePagamento === 2 || isFormaDePagamento === 'dinheiro') {
        let valorFinal = precoProduto - descontos.descontoDe15Porcento;
        return `O valor do produto é: R$${precoProduto.toFixed(2)}, o desconto de 15% é: R$${descontos.descontoDe15Porcento.toFixed(2)}, o valor final é: R$${valorFinal.toFixed(2)}, caso pague com dinheiro ou Pix.`;
    } else if (isFormaDePagamento === 3) {
        let ValorComJuros = precoProduto + juros;
        let valorParcelas = ValorComJuros / 10;
        let ParcelasSemJuros = precoProduto / 2;

        return `O total de parcelas é: 10, pagando em duas parcelas fica R$${ParcelasSemJuros.toFixed(2)} sem juros.\nO valor total com 10% de juros é: R$${ValorComJuros.toFixed(2)}.\nO valor das 10 parcelas com 10% de juros fica R$${valorParcelas.toFixed(2)} cada.`;
    } else {
        return "Método de pagamento não identificado.";
    }
}
