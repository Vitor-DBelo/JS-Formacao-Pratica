function Calc() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    btnDel: document.querySelector('.btn-del'),

    inicia() {
      this.clickButton();
      this.keyEnter();
    },

    clickButton() {
      document.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (el.classList.contains('btn-del')) {
          this.delOn();
        }
        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      const operadorPermitido = /^[0-9+\-*/]$/;
      const ultimoCaractere = this.display.value.slice(-1);

      if (!operadorPermitido.test(valor)) {
        alert('Entrada inválida! Apenas números e operadores são permitidos.');
        return;
      }

    
      if (/[+\-*/]/.test(valor) && /[+\-*/]/.test(ultimoCaractere)) {
        alert('Não é permitido inserir operadores consecutivos!');
        return;
      }

      this.display.value += valor;
    },

    clearDisplay() {
      this.display.value = '';
    },

    delOn() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      if (conta === '44005==2') {
        window.open('https://youtu.be/ZZ5LpwO-An4?si=5BMjGe9Q6hwOJ0t6', '_blank');
        this.clearDisplay();
        return;
      }

      try {
        if (!conta || /[+\-*/]$/.test(conta)) {
          alert('Conta inválida! Verifique a expressão.');
          return;
        }

        conta = eval(conta);

        if (isNaN(conta) || conta === Infinity) {
          alert('Erro ao calcular. Verifique a expressão.');
          this.display.value = '';
          return;
        }

        this.display.value = String(conta);
      } catch (err) {
        alert('Erro na expressão! Revise os números e operadores.');
        this.display.value = '';
      }
    },

    keyEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          this.realizaConta();
        }
      });
    }
  };
}

const calculadora = Calc();
calculadora.inicia();
