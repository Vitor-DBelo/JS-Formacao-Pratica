import chalk from "chalk";
import prompt from "prompt";

const promptQRCode = [
    {
        name: 'link',
        description: chalk.blue('Difite o link para gerar o qrcode'),
    },
    {
        name:'type',
        description: chalk.blue('Escolha entre tipo 1 para gerar em imagem 2 para gerar no terminal'),
        pattern:/^[1-2]+$/,
        message: chalk.red('Escolha penas entre 1 e 2'),
        required: true,
    }
];

export default promptQRCode;