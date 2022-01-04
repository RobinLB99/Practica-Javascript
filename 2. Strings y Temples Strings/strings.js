/* ------------------------ Cadenas de texto aka Strings -------------------------------*/

let nombre = "Robin";
let apellido = "Lugo";

let saludo = new String("Hola mundo");

let parrafo = "    Hola mundo. Estas son mis primeras lineas de codigo. Estoy aprendiendo a programar. Mundo, estoy muy emocionado    ";

console.log(nombre + " " + apellido);
console.log(saludo);

console.log(saludo + ". Soy " + nombre + " " + apellido);

console.log("La longitud de la variable nombre es: " + nombre.length);
console.log("La longitud de la variable apellido es: " + apellido.length);
console.log("La longitud de la variable saludo es: " + saludo.length);

//Metodos de las cadena de texto 

console.log(
    nombre.toUpperCase(), // Convierte el texto en mayusculas
    apellido.toLowerCase() // COnvierte el texto e minusculas
);

console.log(parrafo);

console.log(
    parrafo.includes("mundo"), // Busca si existe la palabra dada en la cadena de texto.
    parrafo.includes("Robin"),
);

// ELimina los espacios que existan al rededor de la cadena de texto.
console.log(parrafo.trim());

/* Convierte la cadena de texto en un arreglo separado por el parametro que le des.
    " " espacios, "," comas, "." Puntos, """ Comillas dobles, "'" Comillas simples.
*/ console.log(parrafo.split(" "));

/*------------------------------- Temples Strings ---------------------------------*/

let saludar = "Hola";

//Concatenacion
let presentacion = "Soy " + nombre+ " " + apellido;
console.log(saludar + ". " + presentacion);

// Interpolacion
    //Temples Strings - ` `
console.log(`Hola. Mi nombre es ${nombre} ${apellido}.`);

/* Sin Temples Strings */
let ul = "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>";
console.log(ul);

let ul2 = 
    "<ul>" + 
        "<li>Primavera</li>" + 
        "<li>Verano</li>" + 
        "<li>Otoño</li>" + 
        "<li>InvierInvierno</li>" + 
    "</ul>"
;
console.log(ul2);

let ul3 = "<ul>";
ul3 += "<li>Primavera</li>";
ul3 += "<li>Verano</li>";
ul3 += "<li>Otoño</li>";
ul3 += "<li>Invierno</li>";
console.log(ul3);

/* Con Temples Strings - mas efieciente, practico y facil */
let ul4 = `
    <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
    </ul>
`;
console.log(ul4);
//Esto nos sera de ayuda para agragar codigo HTML dinamico.

