async function connectToDatabase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORD_DATABASE) {
        console.log('Conexão com o banco de dados feita');
    } else {
        console.log('Não foi possível se conectar com o banco de dados');
    }
}

export default connectToDatabase;