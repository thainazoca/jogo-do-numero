
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

    palpites.textContent += palpiteUsuario + " ";

if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! voce acertou";
ultimoResultado.style.backgroundColor = "green";
baixoOuAlto.textContent = "";
    finalizarJogo ();
} else if (contagemPalpites === 10) {
    ultimoResultado.textcontent =  "FIM DO JOGO";
    baixoOuAlto.textcontent = "";
    finalizarJogo();
}else {
    ultimoResuktado.textContent = "Errado";
}
