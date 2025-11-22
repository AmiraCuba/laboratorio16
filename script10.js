const productos = [
    {nombre: "Laptop", precio: 3500},
    {nombre: "Mouse", precio: 80},
    {nombre: "Teclado", precio: 150},
    {nombre: "Monitor", precio: 800}
];
const botonGenerar = document.getElementById("generar");
const contenedor = document.getElementById("contenedorTabla");
botonGenerar.addEventListener("click", () => {
    contenedor.innerHTML = "";
    const tabla = document.createElement("table");
    const filaEncabezado = document.createElement("tr");
    const thNombre = document.createElement("th");
    thNombre.textContent = "Nombre del Producto";
    const thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";
    filaEncabezado.append(thNombre, thPrecio);
    tabla.appendChild(filaEncabezado);
    productos.forEach((producto) => {
        const fila = document.createElement("tr");
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre;
        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = `$ ${producto.precio}`;
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        tabla.appendChild(fila);
    });
    contenedor.appendChild(tabla);
});