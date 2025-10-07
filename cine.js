

const peliculas = ["El Padrino", "Como entrenar a tu dragon", "El Conjuro", "Avatar", "Orgullo y Prejuicio"];

const precioGeneral = 10000;

let carteleraListado = "";

peliculas.forEach(function (pelicula, index) {
    carteleraListado += (`${ index + 1}. ${pelicula}\n`);
});

console.log ("Se inició el proceso de compra.")

alert ("Bienvenid@ al simulador de cine.\n Vas a acceder a la compra de tus entradas para el dia de hoy.");

let peliculaElegida;
let listado;

do {
    listado = parseInt(
    prompt (`Cartelera de hoy:\n ${carteleraListado}\n Ingresá el número de la película que querés ver:`)
);

    peliculaElegida = peliculas[listado - 1];

if (!peliculaElegida) {
    alert("Selección inválida. Intentá de nuevo.");
}
}
while (!peliculaElegida);

console.log(`Seleccionaste ${peliculaElegida}`);

let cantidadEntradas; 

do {
    cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar (máx. 4 por persona):"));

    if (isNaN(cantidadEntradas) || cantidadEntradas <= 0) {
        alert("Error: Debe ingresar un número válido y mayor que 0.");
    } else if (cantidadEntradas > 4) {
        alert("Error: Solo puede comprar hasta 4 entradas.");
    }
} while (isNaN(cantidadEntradas) || cantidadEntradas <= 0 || cantidadEntradas > 4);

console.log(`Seleccionaste ${cantidadEntradas} entrada/s`);

const calcularTotal = (cantidadEntradas, precioGeneral) => {
    const total = cantidadEntradas * precioGeneral;
    alert (`Total por ${cantidadEntradas} entrada/s: $${total}`);
    return total;
};

let total = calcularTotal(cantidadEntradas, precioGeneral);

let confirmarCompra = confirm(
    `Seleccionaste ${cantidadEntradas} entrada/s para: ${peliculaElegida}\n El total es: $${total}.\n ¿Desea confirmar la compra?`);

if (confirmarCompra) {
    alert("¡Compra realizada con éxito! Disfruta la peli :)");
    console.log ("Gracias por comprar con nosotr@s");
} else {
    alert("Compra cancelada. Vuelve pronto!");
    console.log ("Se cerró el proceso de compra.")
}


