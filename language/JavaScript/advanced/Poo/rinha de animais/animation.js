const clear = () => console.clear(); // Agora a função clear funciona corretamente

const frames = [
    `
        |-------------------------------------|  
       / +-----------------------------------/+ 
      / /                                   //  
     |------------------------------------|//  
     *------------------------------------*  
    `,
    `
        |-------------------------------------|  
       / +-----------------------------------/+ 
      / /              GO!!                 //  
     |------------------------------------|//  
     *------------------------------------*  
    `
];

const animateFightStart = () => {
    let frameIndex = 0;

    clear();
    console.log(frames[frameIndex]);

    const interval = setInterval(() => {
        frameIndex++;

        if (frameIndex >= frames.length) {
            clearInterval(interval);
            clear();
            console.log("A luta começou!");
        } else {
            clear();
            console.log(frames[frameIndex]);
        }
    }, 1000);
};

export default animateFightStart;
