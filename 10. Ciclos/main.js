/* En el while el bloque se ejecutara simepre y cuando se cumpla primero la condicion y al final del bloque se le suma al contador*/

let cont = 0;

while(cont < 10){
  console.log(`El contador es ${cont}`);
  cont++;
}

/* En el do while el bloque de codigo se ejecutara por lo menos una vez y despues se ejucta siempre y cuando la condicion se cumpla.*/

let cont2 = 10;

do{
  console.log(`El contador 2 es ${cont2}`);
  cont2++
}while(cont2 < 10);

/* En el For se establece la varible contadora, la condicion y el iterador en la misma linea de codigo*/

let a = [10, 20, 30, 40, 50];

for (var i = 0; i < a.length; i++) {
  console.log(`El valor de arreglo a en la posicion ${i} es ${a[i]}`);
}

/* Un For in me va a permitir recorrer o iterrar las propiedades de un objeto */

const robin = {
  nombre: 'Robin',
  apellido: 'Lugo',
  edad: 22
};

for (const p in robin){
  console.log(`Propiedad: ${p}, Valor: ${robin[p]}`);
}

/* El for of me permite recorrer cualquier objeto iterable en Javascript, por el ejemplo un arreglo o cadena de texto*/

let datos = ['Robin', 'Joel', 22, true];

for (const e of datos) {
  console.log(`Elemento: ${e}`);
}

let saludo = 'Hola mundo';

for (const caracter of saludo) {
  console.log(`Caracter: ${caracter}`);
}