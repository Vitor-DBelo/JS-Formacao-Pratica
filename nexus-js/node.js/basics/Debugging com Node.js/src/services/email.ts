async function getBaseEmail(senmderName: string):Promise<string> {
    let base = await getHeaderText();

    base += `ola ${senmderName} Gostaria de me inscrever para a vaga`;

    base += '\n estou deixando meu curriculo'
    
    return base
}

async function getHeaderText(): Promise<string> {
    return 'email para vc'
}
export {getBaseEmail};