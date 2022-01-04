/*----------------------------- Datos numericos -------------------------------------*/

console.log("********************** Numeros *********************");

let a = 2;
let b = new Number(3);

console.log("El valor de a es: ", a, "(numerico)");
console.log("EL valor de b es: ", b, "(numerico)");
console.log("La suma entre a y b es: ", (a + b), "(numerico)");

let c = 7.19;
console.log("El valor de c es:", c, "(numerico)");

/* Me establece el numero de decimales que va a contentener la variable numerica */

    // toFixed(n) - Devuelve en cadena de texto.
    console.log("El valor de c es:", c.toFixed(1), "(texto)");
    console.log("El valor de c es: ", c.toFixed(5), "(texto)");

// parseInt() - parseFloat()

/* Me devuelve la parte entera de un valor de la variable */

    console.log("El valor de c es: ", parseInt(c), "(numerico)");

/* Tambien convierte las cadenas de texto a valor numerico */

    let d = "8.45";
    console.log("El valor de d es: ", d, "(texto)");
    // parseInt() devuelve en entero.
    console.log("El valor de d es: ", parseInt(d), "(numerico)"); 
    // Devuelve en flotante(decimal).
    console.log("El valor de d es: ", parseFloat(d), "(numerico)");
    console.log("El valor de c es:", parseFloat(c.toFixed(1)), "(numerico)");
    console.log("El valor de c es:", parseFloat(c.toFixed(5)), "(numerico)");

/* Sumar un valor numero y un valor cadena de texto */

    // RESULTA EN UNA CADENA DE TEXTO.
    console.log("La suma entre a y b es: ", b + d, "(texto)");
    // RESULTA EN UN VALOR NUMERICO ENTERO.
    console.log("La suma entre a y b es: ", b + parseInt(d), "(numerico)");
    // RESULTA EN UN VALOR NUMERICO Flotante(decimal).
    console.log("La suma entre a y b es: ", b + parseFloat(d), "(numerico)");


/* ----------------------------------- Datos Booleanos -------------------------------- */

console.log("******************* Booleanos **********************")

let verdadero = true;
let falso = false;

/* menos optimo (no recomendado)*/
let v = Boolean(true);
let f = Boolean(false);

console.log("Los valores de verdadero y falso son: ", verdadero, falso);
console.log("Los valores de v y f son: ", v, f);

/* Otros datos como booleanos */
    console.log("Cadena vacia en booleano es: " ,Boolean(""));
    console.log("Cadena llena en booleano es: " ,Boolean("Hola"));
    console.log("Numero 0 en booleano es: " ,Boolean(0));
    console.log("Numeros negativos en booleano son: " ,Boolean(-7));
    console.log("Numeros positivos en booleano son: " ,Boolean(8));