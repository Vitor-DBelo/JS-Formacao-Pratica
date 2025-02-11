import chalk from "chalk";

const mainPrompt = [
    {
        name: 'select',
        description: chalk.yellow('Escolha a ferramenta 1 para QRCODE ou 2 para Password'),
        pattern: /^[1-2]+$/,
        message: chalk.red('Escolha entre 1 e 2'),
        required: true,
    }
];

export default mainPrompt;
//com