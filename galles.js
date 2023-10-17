console.log(
    "Los precios de las galletitas son: 1 = melba: $ 456, 2 = sonrisas: $ 875, 3 = manon: $ 321, 4 = pitusas: $ 456, 5 = melitas: $ 654, 6 = opera: $ 325, 7 = merengadas: $ 625, 8 = criollitas: $ 129, 9 = oreo: $ 432, 10 = chocolinas: $ 433, 11 = ondinas: $ 455, 12 = surtidas: $ 546, 13 = variedad: $ 551")


var marca = ["ninguna", "melba", "sonrisas", "manon", "pitusas", "melitas", "opera", "merengadas", "criollitas", "oreo", "chocolinas", "ondinas", "surtidas", "variedad"];
var precio = [0, 456, 875, 321, 456, 654, 325, 625, 129, 432, 433, 455, 546, 551];
var seleccion = parseInt(prompt("Ingrese el número correspondiente a la galletita que desea comprar (del 1 al 13), o 0 para ninguna galletita"));

var cantidad = parseInt(prompt("Ingrese la cantidad de paquetes que quiere comprar"));

if (seleccion >= 1 && seleccion <= 13) {
    var precioTotal = precio[seleccion] * cantidad;
    alert("Ud. deberá abonar $ " + precioTotal);
} else if (seleccion === 0) {
    alert("Ud. no seleccionó ninguna marca");
} else {
    alert("Número de marca no válido. Por favor, seleccione una marca del 1 al 13 o 0 para ninguna galletita.");
}