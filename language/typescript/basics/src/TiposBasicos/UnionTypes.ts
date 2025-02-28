//permitem que você defina uma variável ou parâmetro que pode ter mais de um tipo.
function mostrarId(id: string | number): void {
    console.log(`O ID é: ${id}`);
  }
  
mostrarId(123);  // OK, número
mostrarId('abc');  // OK, string