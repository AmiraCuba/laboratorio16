const boton = document.querySelector("button");
const parrafo = document.getElementById("parrafo");
boton.addEventListener("click", () => {
    parrafo.textContent = "Texto cambiado";
});
