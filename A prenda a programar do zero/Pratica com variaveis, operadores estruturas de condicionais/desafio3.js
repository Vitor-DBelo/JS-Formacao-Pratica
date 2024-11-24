let nota1 = 5;
let nota2 = 6;
let nota3 = 1;
let media = 0;

media = (nota1 + nota2 + nota3) / 3 ;

if (media >= 7){
    console.log(`A media do aluno é: ${media.toFixed(2)}, o aluno foi aprovado!!`);
}else if(media > 5 && media <7){
    console.log(`A media do aluno é: ${media.toFixed(2)}, o aluno esta de recuperação!!`);
}else{
    console.log('aluno reptovado!!');
}
