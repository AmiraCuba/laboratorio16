const boton = document.querySelector("button");
const parrafo = document.getElementById("parrafo");
let presionado = false;
boton.addEventListener("click", () => {
    if (presionado){
        parrafo.textContent = "Texto original"
        presionado = !presionado;
    }
    else{
        parrafo.textContent = "Texto cambiado";
        presionado = !presionado;
    }
});