// Função que verifica a idade e pode lançar erros
function verificaIdade(i) {
  // Se o valor passado não for um número, lançamos um erro
  if (typeof i !== 'number') {
      throw new TypeError('O dado valor passado deve ser um número inteiro'); 
      // `throw` interrompe o código e envia o erro para o `catch`
  }

  // Se a idade for menor que 18, lançamos um erro usando um objeto Error
  if (i < 18) {
      throw new Error('Você é muito novo para utilizar esse programa'); 
      // `throw new Error()` cria um erro com uma mensagem e envia para o `catch`
  }

  return "Acesso permitido!"; // Se não houver erro, retorna essa mensagem
}

try {
  // console.log(nExisto);  // Descomente para testar erro de variável inexistente
  console.log(verificaIdade(10)); // Testando com um valor menor que 18 para gerar erro

} catch (er) {
  // O bloco `catch` captura qualquer erro que ocorrer no `try`
  
  console.log("Erro capturado:", er.message); // `.message` exibe apenas a mensagem do erro
} finally {
  // O bloco `finally` sempre será executado, independente de erro ou sucesso
  console.log('Execução finalizada (com erro ou sucesso)');
}
