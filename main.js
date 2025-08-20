
const palpites = document.querySelector('.paplpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPaplpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPaplpites = 1;
let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = Number (campoPalpite.value) ;
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " 

if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! voce acertou";
ultimoResultado.style.backgroundColor = "green";
baixoOuAlto.textContent = "";
    finalizarJogo ();
} else if (contagemPalpites === 10) {
    ultimoResultado.textContent =  "FIM DO JOGO";
    baixoOuAlto.textContent = "";
    finalizarJogo();
}else {
    ultimoResultado.textContent = "Errado";
    ultimoResultado.style.backgroundColor = "red";
    if (palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = "o ultimo palpite foi muito baixo"
        ] else if (palpiteUsuario > numero Aleatorio) {
        baixoOuAlto.textContent = "o numero do palpite foi muito alto"
    }
}

    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
}

envioPalpite.addEventListener('clic', verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.createElement('button');
    document.body.appenChild(botaoReiniciar);
    botaoReiniciar.textContent = 'reiniciar jogo';
    botaoReiniciar.classList.add('botaoReiniciar');
    document.body.appenChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reinicar Jogo);
}

function reiniciar Jogo () {
    contagemPalpites = 1;
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p');
    for (const paragrafoReiniciar of paragrafosReiniciar) {
        paragrafoReiniciar.textcontent = "";
    }
}
    





        
    }
}
    
