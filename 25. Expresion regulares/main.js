/* Expresiones regulares
    Son una secuencia de caracteres que forman un patron de busqueda, principalmente
    utilizada para la busqueda de patrones de cadenas de caracteres */

let cadena = "Cadena de texto 1 en javascript. Es4to es una cadena de texto que yo mismo he hecho para poner ejemplo en est2a practica de Javascript. 1232";

let expReg = new RegExp("javascript","i");
    /* La bandera i ignora las mayusculas y minusculas */

let expReg2 = new RegExp("javascript","gi");
    /* La bandera g no solo se queda con primera coincidencia sino con todas */

let expReg3 = /javascript/gi;

let expReg4 = /\d/gi // \d - busca un numero
let expReg5 = /[0-9]/gi // \[] - busca un numero en un rango determinado
let expReg6 = /javascript{1}/gi;//al menos la palabra javascript se tiene que repetir 1 vez.
let expReg7 = /javascript{3}/gi;//al menos la palabra javascript se tiene que repetir 3 veces.
/* Comprueba que la exprecion exista en la variable. */
    console.log(expReg.test(cadena)); // true

/* Devuelve un arreglo */
    console.log(expReg.exec(cadena)); // []
    console.log(expReg2.exec(cadena)); // []
    console.log(expReg3.exec(cadena)); // []
    console.log(expReg4.exec(cadena)); // []
    console.log(expReg5.exec(cadena)); // []
    console.log(expReg6.exec(cadena)); // []
    console.log(expReg7.exec(cadena)); // null