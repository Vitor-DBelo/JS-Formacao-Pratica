
async function bomDia(nome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Bom dia, ${nome}!`);
        }, 1000); 
    });
}


export default bomDia;