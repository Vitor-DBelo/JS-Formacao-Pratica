const sono = {
    bom: 'false',
    ruim: 'true',
    mediano: 'false'
}

async function boaTarde(nome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`boa tarde, ${nome}!`);
        }, 1000); 
    });
}


async function boaNoite(nome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Boa noite, ${nome}!`);
        }, 1000); 
    });
}

export {boaTarde,boaNoite,sono}