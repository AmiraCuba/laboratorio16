const jsonEntrada = '{"producto": "Laptop Gamer", "precio": 1500, "moneda": "USD"}';
console.log("1. Recibido (JSON):", jsonEntrada);
const objetoProducto = JSON.parse(jsonEntrada);
objetoProducto.precio = 1200; 
const jsonSalida = JSON.stringify(objetoProducto);
console.log("2. Actualizado (JSON):", jsonSalida);