// O Tipo 'any' no TypeScript
// -------------------------------------------
// O tipo 'any' representa a falta de um tipo específico, ou seja, ele permite qualquer valor.
// Ele pode ser útil em alguns casos, mas deve ser evitado porque anula a principal vantagem do TypeScript: a tipagem estática.

// Exemplo de uso de 'any' (NÃO RECOMENDADO):
let valor: any = 'Olá, mundo!';
valor = 10;  // Aqui, 'valor' muda de string para number sem erro.
valor = true;  // Depois, muda para boolean. Isso pode gerar erros difíceis de encontrar.

console.log(valor.toUpperCase());  
// TypeScript não avisa sobre esse erro em tempo de compilação, mas isso pode causar um erro em tempo de execução se 'valor' não for uma string.

// Por que evitar 'any'?
// ----------------------
// 1. Você perde segurança de tipos (pode atribuir qualquer coisa sem erro).
// 2. O TypeScript não consegue ajudar com autocompletar ou checagem de erros.
// 3. Bugs podem aparecer em tempo de execução, ao invés de serem detectados antes da execução.

//Use tipos mais específicos ao invés de 'any' sempre que possível.

let texto: string = 'Olá, mundo!';  // Correto - Agora sabemos que 'texto' sempre será uma string.

let numero: number = 10;  // Correto - 'numero' sempre será um número.

function processarTexto(input: string): string {
  return input.toUpperCase();
}

console.log(processarTexto(texto));  // Agora temos segurança de tipos e menos chance de erro.
