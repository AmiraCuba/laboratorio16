const productosOriginales = [
    { nombre: "Monitor 24'", precio: 150 },
    { nombre: "Teclado Mecánico", precio: 80 },
    { nombre: "Ratón Gamer", precio: 40 },
    { nombre: "Audífonos", precio: 60 }
];
const jsonString = JSON.stringify(productosOriginales);
console.log("JSON generado:", jsonString);
const productosRecuperados = JSON.parse(jsonString);
const contenedor = document.getElementById("contenedorLista");
const listaUl = document.createElement("ul");
productosRecuperados.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    listaUl.appendChild(item);
});
contenedor.appendChild(listaUl);