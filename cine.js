
const peliculas = ["El Padrino", "Como entrenar a tu dragon", "Orgullo y Prejuicio", "Avatar 2", "El Conjuro 4"];

const precioBase = 10000;

const botones = document.querySelectorAll(".btnagregar");

botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
    const nombre = peliculas[index];
    console.log(`Seleccionaste: ${nombre}`);

    const article = boton.parentElement;
    const inputCantidad = article.querySelector(".cantidad");
    const cantidad = parseInt(inputCantidad.value);

const producto = {
    id: index + 1,
    nombre,
    precio: precioBase,
    cantidad: cantidad
    };

    agregarAlCarrito(producto);});
});

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const existente = carrito.find(item => item.id === producto.id);
    if (existente) {
    existente.cantidad += producto.cantidad;
    } else {
    carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
