import chalk, { Chalk }  from "chalk";
import logSymbols from 'log-symbols';

//console.log(logSymbols.error, 'logSybols error');
//console.log(logSymbols.success, 'logSybols success');
//console.log(logSymbols.warning, 'logSybols warnig');
//console.log(logSymbols.info, 'logSybols info');

console.log(chalk.green.bold(logSymbols.success,  ' service success!'));
console.log(chalk.red.bold(logSymbols.error, '  services error'));

console.log(chalk.blue("hello world"));
//console.log(chalk.yellow.bold('Hello world!'));


// npm fund 
// npm Update NOME-DO-PACOTE
// npm i ou install "nome do pacote" -D faz com que ele seja uma devDependencia 
// npm i ou install // usa o packge-lock para instalar as dependencias da aplicaçao 
//apagar pacotes use o comando npm uninstall NOME-DO-PACOTE
