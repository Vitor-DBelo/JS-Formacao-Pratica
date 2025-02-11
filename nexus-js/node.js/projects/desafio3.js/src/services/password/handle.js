import  permittedCharacters from './utils/permittedCharacters.js'
async function handle() {
    let characters = await permittedCharacters();
    let password = '';
    const charactersTotal = process.env.PASSWORD_LENGTH;

    for (let i = 0; i < charactersTotal; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle