async function addItem(userCart, item) {
    userCart.push(item);
}

async function totalCart(userCart) {
    const result = userCart.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log(`Total do carrinho: R$ ${result.toFixed(2)}`);
}

function removeItem(userCart, index) {
    const deleteIndex = index - 1;
    if (deleteIndex >= 0 && deleteIndex < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function displayCart(userCart) {
    console.log('Bem-vindo ao seu carrinho');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | Subtotal = R$ ${(item.price * item.quantity).toFixed(2)}`);
    });
}

export {
    addItem,
    totalCart,
    removeItem,
    deleteItem,
    displayCart
};
