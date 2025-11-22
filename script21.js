const boton = document.getElementById("botonGuardar");
const input = document.getElementById("inputNombre");

boton.addEventListener("click", () => {
    const textoUsuario = input.value;
    const datosUsuario = {
        nombre: textoUsuario,
        fecha: new Date().toLocaleDateString()
    };
    const jsonFinal = JSON.stringify(datosUsuario);
    console.log(jsonFinal);
});