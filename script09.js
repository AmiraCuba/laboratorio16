const imagenGrande = document.getElementById("imagenGrande");
const miniaturas = document.querySelectorAll(".miniatura");
miniaturas.forEach((miniatura) => {
    miniatura.addEventListener("click", (evento) => {
        const nuevaRuta = evento.target.src;
        imagenGrande.src = nuevaRuta;
    });
});