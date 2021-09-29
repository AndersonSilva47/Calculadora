
function Calculadora() { //1 -- criar a função calculadora
    return { //2-- retornar;

        visor: document.querySelector('.visor'), //3º captura tudo que está sendo digitado no visor;

        iniciar() {
            this.focusVisor(); //26º manter foco no visor quando iniciar;
            this.cliqueBotoes(); //6º Ao iniciar, será chamado o metodo cliquebotoes;
            this.enter(); //27º chamar um metodo para executar o calculo quando apertar enter;
           // this.inputNotNumber(); //30º impedir que seja digitado letras;
        },

        cliqueBotoes() { //7º cria metodo cliquebotoes;
            document.addEventListener('click', e => { //8º captura os cliques do mouse.
                const el = e.target; //atribui o click a uma constante.

                if (el.classList.contains('botoes')) { //9º se o elemento capturado possuir a classe "botoes":...
                    console.log(el.innerText); //10º apenas um teste para ver se esta capturando o text do element.
                    this.botoesForDisplay(el.innerText); //11º chama o metodo que adiciona o text do element ao display;
                }

                if (el.classList.contains('clear')) { //13º se o elemento capturar a classe com "clear":....
                    this.visor.value = ''; //14º limpa o display;
                }

                if (el.classList.contains('apagar')) { //15º se o elemento capturar a classe "apagar"....
                    this.apagaUltimo(); //16º chama o metodo que apaga o ultimo digito;
                }

                if (el.classList.contains('result')) { //19º se o elemento capturar a classe "result"....
                    this.resultado(); //20º chama o metodo resultado, para fazer as contas;
                }

                this.focusVisor(); //24º chama o metodo que mantem o foco no visor; 
            })
        },

        botoesForDisplay(valor) { //12º cria o metodo que adiciona conteudo ao display;
            this.visor.value += valor;
        },

        apagaUltimo() { //17º criação do metodo para apagar o ultimo digito.
            this.visor.value = this.visor.value.slice(0, -1); //18º comando para apagar o ultimo digito;
        },

        resultado() { //21º cria o metodo resultado
            let conta = this.visor.value; //22º variavel recebe o valor do visor;

            try { //23º faz a conta com eval
                conta = eval(conta); //conta com eval

                if (!conta) { //se retornar um valor falso;
                    alert('Conta Inválida.');
                    this.visor.value = '';
                    return;
                }
                this.visor.value = conta;

            } catch (e) { //catch se tiver algum erro (fica salvo em "e")
                alert('Conta Inválida.');
                this.visor.value = '';
                return;
            }
        },

        focusVisor() { //25º criação do metodo que chama o foco no visor;
            this.visor.focus();
        },

        enter() { //28º criando o metodo que irá fazer a conta quando apertar enter.
            this.visor.addEventListener('keypress', e => { //29º captura o comando "key press" e faz algo...
                if (e.keyCode === 13) { //quando for a tecla 13 (enter)...
                    this.resultado(); //chama o metodo resultado;
                }
            })
        },

    }
}


const calculadora = new Calculadora(); //4º Adiciona a função a uma const.

calculadora.iniciar(); //5º Inicia a calculadora;