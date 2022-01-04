/* ---------------------------------- Arreglos ------------------------------------- */
let arregloVacio = [];

let elementos = [
    "tierra",
    "Agua",
    "Aire",
    "Fuego"
];

let a = [
    "Hola",
    9,
    true,
    function saludo() {
        return "Hola"
    },
    num = [10, 20, 30, 40]
];

// Tambien se pueden declarar como una variable o constante
    let b = Array.of("x", "y", "z", 1, 2, 3);

    /* Me llena un arreglo de cierta longitud con un mismo valor. */
        // let arreglo = Array(Longitud).fill(dato);
        let c = Array(100).fill("Hola");

    // Tambien se las puede declarar de la siguiente manera:
        let d = new Array(1, 2, "3", false, true);
        /* Este manera de declararlo esta decayendo */

/*
Los arreglos pueden contener cualquier tipo de datos, arreglos, objetos y funciones.
En los arreglos, el primer elemento siempre van a inciar en la posicion 0.
*/

console.log(arregloVacio);
console.log(elementos);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Me muestra la longitud del arreglo, es decir el numero de elementos que contiene.
    console.log("La longitud del arreglo a es: ", a.length);

// Me muestra un elemento del arreglo en una posicion n.
    console.log("EL elemento en la posicion 4 del arreglo a es: ", a[4]);
    console.log("EL elemento en la posicion 2 del arreglo elementos es: ", elementos[2]);

// Muestra un elemento de un arreglo dentro de otro arreglo en una posicion
    console.log("EL elemento en la posicion 2 del arreglo num que se encuentra en la posicion 4 dentro del arreglo a es: ", a[4][2]);

/* -- Metodos de Array -- */

let colores = ["Amarillo", "Azul", "Rojo"];
console.log(colores);

    // Ingresa un nuevo elemento al final del arreglo.
        colores.push("Verde");
        console.log("Metodo push(); ", colores);

    // Elimina el elemento al final del arreglo.
        colores.pop();
        console.log("Metodo pop(); ", colores);

    // Itera un elemento por cada posicion del arreglo
        /*
            arreglo.forEach(function(elemento, posicion) {
                // Codigo.
            });
        */
        colores.forEach(function(elemento, posicion) {
            console.log(`<li id = ${posicion}> ${elemento} </li>`);
        });