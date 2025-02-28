// O tipo unknown é como o tipo any, mas mais seguro. Com o tipo unknown, o TypeScript não 
// deixa você fazer operações sem antes garantir que o valor é do tipo certo. 
export let x: unknown;
x = 100;  // Pode ser qualquer coisa, mas o TypeScript não deixa você fazer operações diretamente com x.
x = 'luiz';
x = 900;
x = '10';
x = 2;
const y = 800;

if (typeof x === 'number') {
    console.log(x + y);  // Ok, pois verificou que x é um número.
} else {
    console.log('Não é número');
}
