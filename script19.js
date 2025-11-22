const jsonLibros = `[
    {"titulo": "Cien Años de Soledad", "autor": "Gabriel García Márquez"},
    {"titulo": "El Principito", "autor": "Antoine de Saint-Exupéry"},
    {"titulo": "1984", "autor": "George Orwell"},
    {"titulo": "Harry Potter", "autor": "J.K. Rowling"}
]`;
const listaLibros = JSON.parse(jsonLibros);
const contenedor = document.getElementById("contenedorLibros");
const tabla = document.createElement("table");
const filaEncabezado = document.createElement("tr");
const thTitulo = document.createElement("th");
thTitulo.textContent = "Título del Libro";
const thAutor = document.createElement("th");
thAutor.textContent = "Autor";
filaEncabezado.append(thTitulo, thAutor);
tabla.appendChild(filaEncabezado);
listaLibros.forEach((libro) => {
    const fila = document.createElement("tr");
    const celdaTitulo = document.createElement("td");
    celdaTitulo.textContent = libro.titulo;
    const celdaAutor = document.createElement("td");
    celdaAutor.textContent = libro.autor;
    fila.appendChild(celdaTitulo);
    fila.appendChild(celdaAutor);
    tabla.appendChild(fila);
});
contenedor.appendChild(tabla);
