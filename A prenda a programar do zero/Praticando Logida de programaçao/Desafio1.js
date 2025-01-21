function CostuctorHero(name,xp){
    this.name = name
    this.xp = xp
}

const heroi = new CostuctorHero('GOKU',80000);

let rank;
if (heroi.xp >= 1000 && heroi.xp < 2500){
    heroi.rank = 'prata'
}else if (heroi.xp > 2500 && heroi.xp < 3025){
    heroi.rank = 'ferro'
}else if (heroi.xp > 3025 && heroi.xp < 4020){
    heroi.rank = 'ouro'
}else if (heroi.xp > 4020  && heroi.xp <= 5000){
    heroi.rank = 'diamante'
}else if(heroi.xp >= 8000){
    heroi.rank = 'É MAIS DE 8000'
}
else{
    heroi.rank = 'bronze'
}

console.log(`O heroi ${heroi.name} tem ${heroi.xp} ele é do rank ${heroi.rank}`);



    