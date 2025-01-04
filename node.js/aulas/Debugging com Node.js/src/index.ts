import { getBaseEmail } from "./services/email";

function print(text: string){
    console.log(text);
}

async function main(){
    print('Boa tarde');
    console.log( await getBaseEmail('cleid'));
}
main()