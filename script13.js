const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector("#inputNombre");
const inputEdad = document.querySelector("#inputEdad");
const btnGuardar = document.querySelector("#btnGuardar");
const tablaCuerpo = document.querySelector("#tablaCuerpo");
let filaEditando = null;
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = inputNombre.value;
    const edad = inputEdad.value;
    if (filaEditando) {
        filaEditando.cells[0].textContent = nombre;
        filaEditando.cells[1].textContent = edad;
        filaEditando = null;
        btnGuardar.textContent = "Agregar Usuario";
        btnGuardar.style.backgroundColor = "";
    } else 
        crearFila(nombre, edad);
    formulario.reset();
});
function crearFila(nombre, edad) {
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    tdNombre.textContent = nombre;
    const tdEdad = document.createElement("td");
    tdEdad.textContent = edad;
    const tdAcciones = document.createElement("td");
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.dataset.accion = "editar";
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.dataset.accion = "eliminar";
    tdAcciones.appendChild(btnEditar);
    tdAcciones.appendChild(btnEliminar);
    tr.appendChild(tdNombre);
    tr.appendChild(tdEdad);
    tr.appendChild(tdAcciones);
    tablaCuerpo.appendChild(tr);
}
tablaCuerpo.addEventListener("click", (e) => {
    const accion = e.target.dataset.accion;    
    const fila = e.target.closest("tr");
    if (!fila) return;
    if (accion === "eliminar") {
        if (confirm("¿Seguro que deseas eliminar esta fila?")) {
            fila.remove();
            if (fila === filaEditando) {
                filaEditando = null;
                formulario.reset();
                btnGuardar.textContent = "Agregar Usuario";
            }
        }
    } 
    else if (accion === "editar") {
        inputNombre.value = fila.cells[0].textContent;
        inputEdad.value = fila.cells[1].textContent;
        filaEditando = fila;       
        btnGuardar.textContent = "Actualizar Usuario";
    }
});