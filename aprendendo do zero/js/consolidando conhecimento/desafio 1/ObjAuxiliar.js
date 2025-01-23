class aluno{
    constructor(media){
        this.media = media;
    }
   
    VerificaMedia(media){
        if (this.media >= 5 && this.media < 7){
            return 'recuperação'
        }else if(this.media < 5 ){
            return 'reprovado'
        }else if(this.media >= 7){
            return 'Aprovado'
        }
        return 'número invalido'
    }
};

module.exports = {aluno};