/* Corticircuito OR - AND  --------------------------------------------------------*/

// OR - Cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara e ignora lo del lado derecho

function saludar(nombre){
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}

saludar("Robin"); // Hola Robin
saludar(); // Hola Desconocido

console.log("cadena" || "Otro valor"); // cadena
console.log(19 || "Otro valor"); // 19
console.log(true || "Otro valor"); // true
console.log([] || "Otro valor"); // []
console.log({} || "Otro valor"); // {}
console.log(-2 || "Otro valor"); // -2

console.log(false || "Otro valor"); // Otro valor
console.log(null || "Otro valor"); // Otro valor
console.log(undefined || "Otro valor"); // Otro valor
console.log("" || "Otro valor"); // Otro valor
console.log(0 || "Otro valor"); // Otro valor

// AND - Cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargar por defecto.

console.log("cadena" && "Otro valor"); // Otro valor
console.log(19 && "Otro valor"); // Otro valor
console.log(true && "Otro valor"); // Otro valor
console.log([] && "Otro valor"); // Otro valor
console.log({} && "Otro valor"); // Otro valor
console.log(-2 && "Otro valor"); // Otro valor

console.log(false && "Otro valor"); // false
console.log(null && "Otro valor"); // null
console.log(undefined && "Otro valor"); // undefined
console.log("" && "Otro valor"); //
console.log(0 && "Otro valor"); // 0