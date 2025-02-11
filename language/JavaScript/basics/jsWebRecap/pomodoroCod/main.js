class Temporizador {
    constructor(trabalho = 25, descansoCurto = 5, descansoLongo = 15) {
        this.trabalhoEmSegundos = trabalho * 60;
        this.descansoCurtoEmSegundos = descansoCurto * 60;
        this.descansoLongoEmSegundos = descansoLongo * 60;
        this.duracaoAtual = this.trabalhoEmSegundos;
        this.contador = 0;
        this.idTemporizador = null;
        this.pausado = false;
    }

    formatarTempo() {
        const minutos = Math.floor(this.duracaoAtual / 60);
        const segundos = String(this.duracaoAtual % 60).padStart(2, '0');
        return { minutos, segundos };
    }

    iniciar() {
        if (this.idTemporizador) return;
        this.iniciarTemporizador();
    }

    iniciarTemporizador() {
        this.idTemporizador = setInterval(() => {
            if (this.duracaoAtual > 0 && !this.pausado) {
                this.duracaoAtual--;
                const tempo = this.formatarTempo();
                console.log(tempo.minutos, tempo.segundos);
            } else if (this.duracaoAtual === 0 && !this.pausado) {
                this.pararTemporizador();
                if (this.contador % 5 === 0) {
                    this.contador = 0;
                    this.iniciarDescansoLongo();
                } else {
                    this.iniciarDescansoCurto();
                }
            }
        }, 1000);
    }

    iniciarDescansoCurto() {
        console.log("Iniciando descanso curto...");
        this.duracaoAtual = this.descansoCurtoEmSegundos;
        this.iniciarTemporizador();
    }

    iniciarDescansoLongo() {
        console.log("Iniciando descanso longo...");
        this.duracaoAtual = this.descansoLongoEmSegundos;
        this.iniciarTemporizador();
    }

    pararTemporizador() {
        clearInterval(this.idTemporizador);
        this.idTemporizador = null;
        console.log("Ciclo Pomodoro concluído!");
    }

    alternarPausa() {
        if (this.pausado) {
            console.log("Retomando temporizador...");
            this.pausado = false;
        } else {
            console.log("Pausando temporizador...");
            this.pausado = true;
        }
    }

    reiniciaTemporizador() {
        clearInterval(this.idTemporizador);
        this.idTemporizador = null;
        this.duracaoAtual = this.trabalhoEmSegundos; 
        console.log("Temporizador reiniciado!");
        this.iniciarTemporizador();
    }

}

const pomodoro = new Temporizador();
pomodoro.iniciar();

// Testando a pausa e retomar
setTimeout(() => {
    pomodoro.alternarPausa();  // Pausa após 100ms
}, 100);

setTimeout(() => {
    pomodoro.alternarPausa();  // Retoma após 300ms
}, 300);
