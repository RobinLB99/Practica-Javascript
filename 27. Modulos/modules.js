console.log("Archivos moduls.js");

import saludar, {Saludar, numeroPI, usuario} from "./constantes.js";
import {aritmetica as calculos} from "./aritmetica.js";
/* A las importaciones se les puede dar un alias de la siguiente manera:
    import {aritmetica as calculos} from "./aritmetica.js";
    console.log("sumar(1, 2): ", calculos.sumar(1,2));*/

console.log(numeroPI, usuario);

// console.log("sumar(1, 2): ", aritmetica.sumar(1,2));
console.log("sumar(1, 2): ", calculos.sumar(1,2));

saludar();

let saludo = new Saludar();
saludo;

// console.log(password);