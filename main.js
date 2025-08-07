
const palpites = document.querySelector('.paplpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPaplpite');
const campoPalpite = document.querySelector('.campoPalpite');



function verificarPalpite() {
    const palpiteUsuario = Number (campoPalpite.value) ;
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " ";

if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! voce acertou";

}