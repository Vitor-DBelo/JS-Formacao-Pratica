import createItem from "./services/item.mjs";
import * as cardService from "./services/cart.mjs";

const cart = [];

// Criação dos itens
const item1 = await createItem('mouse', 230.82, 1);
const item2 = await createItem('teclado', 60.00, 2);
const item3 = await createItem('monitor', 120.00, 3);

// Adição de itens ao carrinho
await cardService.addItem(cart, item1);
await cardService.addItem(cart, item2);
await cardService.addItem(cart, item3);

//await cardService.removeItem(cart, 1);

// Exibição do carrinho
await cardService.displayCart(cart);

// Remoção de itens (se necessário, descomente para testar)
await cardService.removeItem(cart, 1); // Remove o primeiro item

// await cardService.deleteItem(cart, item2.name);
// Total do carrinho (descomente para calcular o total)
// await cardService.totalCart(cart);
