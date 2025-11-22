const datosJSON = '{"nombre": "Temmis", "edad": 82, "profesion": "Salchipapero"}';
const usuario = JSON.parse(datosJSON);
const parrafo = document.getElementById("infoUsuario");
parrafo.textContent = `Nombre: ${usuario.nombre} - Profesión: ${usuario.profesion}`;