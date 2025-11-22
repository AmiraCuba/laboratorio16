const cuadrado = document.getElementById("cuadrado");
const botonMover = document.getElementById("botonMover");
const botonReiniciar = document.getElementById("botonReiniciar");
botonMover.addEventListener("click", () => {
    cuadrado.classList.add("mover");
});
botonReiniciar.addEventListener("click", () => {
    cuadrado.classList.remove("mover");
});