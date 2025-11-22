const input = document.getElementById("elementoLista");
const agregar = document.getElementById("agregar");
const eliminar = document.getElementById("eliminar");
const lista = document.querySelector("ul");
agregar.addEventListener("click", () => {
    const texto = input.value; 
    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        lista.appendChild(li);       
        input.value = ""; 
    }
});
eliminar.addEventListener("click", () => {
    if (lista.lastElementChild)
        lista.removeChild(lista.lastElementChild); 
});