const numeros = [1, 2, 3];
console.log(numeros);

const persona = {
    nombre: "Robin",
    apellido: "Lugo",
    edad: 22
}
console.log(persona);

console.log('Sin destructuracion');
// Sin destructuracion.-------------------------------------------
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres);

console.log('Con destructuracion');
// Con destructuracion -------------------------------------------
const [one, two, three] = numeros;

console.log(one, two, three);

let {nombre, apellido, edad} = persona;

console.log(nombre, apellido, edad);
console.log(`Nombre: ${nombre}
Apellido: ${apellido}
Edad: ${edad}`);