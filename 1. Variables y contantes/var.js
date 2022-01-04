var hola = "Hola mundo"; // Ambito global

if(true){
    let hello = "Hello world"; // Ambito local
    /* la variable solo existe dentro del bloque.
    Si estableciera un console.log fuera de este bloque no encontraria la variable. */
    console.log(hello);
}

console.log(hola);
//console.log(hello); - Dira que hello no esta definida.

const Pi = 3.1416;
//const - no puede ser declarada sin valor.

console.log(Pi); 

let usuario = "RObin";

if(true){
    let a = 2;
    console.log(usuario);
    console.log(a);
}
/*--------------------------------------------------------------------------------------*/

let nombre = {
    nombre: "Robin",
    edad: 22
}
/* Agregar un atributo al objeto nombre */
nombre.correo = "rjlb991102@hotmail.com";

let colores = ["blanco", "negro", "Azul", "Amarillo"];
/* Agregar un elemento a un array */
colores.push("Naranja");

console.log(colores); console.log(nombre);

/* Si los declaro como una constante funcionaria igualmente ya que no estoy
accediendo a un valor primitivo directamente, sino estoy agregando un elemento al objeto.*/
/*
const nombre = {
    nombre: "Robin",
    edad: 22
}
// Agregar un atributo al objeto nombre 
nombre.correo = "rjlb991102@gotmail.com";

const colores = ["blanco", "negro", "Azul", "Amarillo"];
// Agregar un elemento a un array
colores.push("Naranja");

console.log(colores); console.log(nombre);
*/

