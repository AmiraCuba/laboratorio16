const botonMenos = document.getElementById("botonMenos");
const botonMas = document.getElementById("botonMas");
const spanNumero = document.querySelector("span");
const textoMensaje = document.getElementById("advertencia");
let numero = 0; 
botonMenos.addEventListener("click", () => {
    if (numero > 0) {
        numero--;
        spanNumero.textContent = numero;
        textoMensaje.textContent = "";
    } 
    else
        textoMensaje.textContent = "El contador no puede ser negativo";
});
botonMas.addEventListener("click", () => {
    numero++;
    spanNumero.textContent = numero;    
    textoMensaje.textContent = ""; 
});