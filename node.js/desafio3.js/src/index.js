import prompt from 'prompt'

import mainPrompt from './prompts-schema/prompt_main.js';

import createQRCode from './services/qr-code/create.js';

import createPassword from './services/password/create.js';


async function main() {
    prompt.start();
    prompt.get(mainPrompt,async (err, result) => {
        if(result.select == 1) await createQRCode();
        if(result.select == 2) await createPassword();
    });
    

}

main()