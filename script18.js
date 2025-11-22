const usuario = {
    nombre: "Barbara Cuba",
    correo: "bcuba@unsa.pe.com",
    rol: "Administrador"
};
const usuarioEnTexto = JSON.stringify(usuario);
localStorage.setItem("user_data", usuarioEnTexto);
console.log("Datos guardados en LocalStorage.");
const textoRecuperado = localStorage.getItem("user_data");
const contenedor = document.getElementById("perfilUsuario");
if (textoRecuperado) {
    const usuarioObjeto = JSON.parse(textoRecuperado);
    contenedor.innerHTML = `
        <p><strong>Nombre:</strong> ${usuarioObjeto.nombre}</p>
        <p><strong>Correo:</strong> ${usuarioObjeto.correo}</p>
        <p><strong>Rol:</strong> <span style="color: blue">${usuarioObjeto.rol}</span></p>
    `;
} else
    contenedor.textContent = "No se encontraron datos guardados.";