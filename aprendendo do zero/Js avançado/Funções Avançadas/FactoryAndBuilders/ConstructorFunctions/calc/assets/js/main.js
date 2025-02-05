
function Calc() {

  this.display = document.querySelector('.display');
  this.btnClear = document.querySelector('.btn-clear');
  this.btnDel = document.querySelector('.btn-del');

 
  this.start = () => {
    this.clickButton();
    this.keyEnter();
  }


  this.clickButton = () => {
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
  }

 
  this.btnParaDisplay = (valor) => {
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
  }


  this.clearDisplay = () => {
    this.display.value = '';
  }


  this.delOn = () => {
    this.display.value = this.display.value.slice(0, -1);
  }


  this.realizaConta = () => {
    let conta = this.display.value;

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
  }


  this.keyEnter = () => {
    this.display.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.realizaConta();
      }
    });
  }
}


const calculadora = new Calc();
calculadora.start(); 
