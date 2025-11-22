const formulario = document.getElementById("miFormulario");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const errores = document.querySelectorAll(".mensaje-error");
    errores.forEach((error) => error.remove());
    let hayErrores = false;

    if (inputNombre.value === "") {
        crearMensajeError(inputNombre, "El nombre es obligatorio");
        hayErrores = true;
    }
    if (inputCorreo.value === "") {
        crearMensajeError(inputCorreo, "El correo es obligatorio");
        hayErrores = true;
    }
    if (!hayErrores) {
        alert("Formulario enviado con éxito");
        formulario.reset();
    }
});

function crearMensajeError(elementoInput, mensaje) {
    const spanError = document.createElement("span");
    spanError.textContent = mensaje;
    spanError.classList.add("mensaje-error");
    spanError.style.color = "red";
    spanError.style.display = "block";
    elementoInput.after(spanError);
}