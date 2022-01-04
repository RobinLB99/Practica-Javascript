/* --------------------------------- undefined y null --------------------------------- */

let indefinida;
console.log("EL valor de 'let indefinida' es: ", indefinida);
/* Esta variable no se ha definido ningun valor y por eso muestra 'undefined' */

let nulo = null;
console.log("EL valor de 'let nulo' es: ", nulo);
/* Esta variable si tiene un valor nulo asignado y deberia mostrar 'null' */

/* -------------------------------------- NaN ---------------------------------------- */

/* NaN - Not a Number */

let saludo = "Hola";
const Pi = 3.14;

let resultado = Pi + (saludo * Pi);

//El resultado es NaN
console.log("La suma de Pi con el producto de Pi con saludo es: ", resultado); 

/* NaN ocurre cuando se realiza operaciones aritmeticas con tipos de datos que no son
    numericos */