// If -Else if - Else

let a = parseInt(prompt('Ingresar edad 1'));
let b = parseInt(prompt('Ingresar edad 2'));
let c = parseInt(prompt('Ingresar hora'));
let d = parseInt(prompt('Ingresa el numero del dia: \n1. Lunes 2. Martes 3. Miercoles 4. Jueves\n5. Viernes 6. Sabado 7. Domingo'));

// ¿Eres mayor o menor de edad?
let edad = a;
console.log(`Edad = ${edad}`);

if (edad > 17){
  console.log('Eres mayor de edad');
}
else{
  console.log('Eres menor de edad');
}

let edad2 = b;
console.log(`Edad = ${edad2}`);

if (edad2 < 18){
  console.log('Eres menor de edad');
}
else{
  console.log('Eres mayor de edad');
}

/*
  Dejame dormir: 0:00h - 5:59h
  Buenos dias: 6:00h - 11:59h
  Buenas tardes: 12:00h - 18:30h
  Buenas noches: 18:31h - 23:59h
*/

let hora = c;
console.log(`Hora = ${hora}`);

if (hora >= 0 && hora <= 5){
  console.log('Dejame dormir');
}
else if (hora >= 6 && hora <= 11){
  console.log('Buenos dias');
}
else if (hora >= 12 && hora <= 18) {
  console.log('Buenas tardes');
}
else if (hora >= 19 && hora <= 23) {
  console.log('Buenos dias');
}


if (hora > -1 && hora < 6){
  console.log('Dejame dormir');
}
else if (hora > 5 && hora < 12){
  console.log('Buenos dias');
}
else if (hora > 11 && hora < 19) {
  console.log('Buenas tardes');
}
else if (hora > 18 && hora < 24) {
  console.log('Buenos dias');
}

/* Operador ternerio - Sieve para ejecutar una conciocion en una solo linea de codigo*/
console.log('Operador ternario ***********');
  // variable = (condicion) ? verdadero : falso

  let eresMayorDeEdad = (edad > 17)
  ?'Eres mayor de edad'
  :'Eres menor de edad';

  console.log(eresMayorDeEdad);

//------------------------------------------

/* Switch - case*/
  /*
    Lunes = 1, Martes = 2, Miercoles = 3, Jueves = 4, Viernes = 5, Sabado = 6, Domingo = 7
  */
  let dia = d;
  console.log(`Dia = ${dia}`);

  switch (dia) {
    case 1:
      console.log('Hoy es Lunes');
      break;
    case 2:
      console.log('Hoy es Martes');
      break;
    case 3:
      console.log('Hoy es Miercoles');
      break;
    case 4:
      console.log('Hoy es Jueves');
      break;
    case 5:
      console.log('Hoy es Viernes');
      break;
    case 6:
      console.log('Hoy es Sabado');
      break;
    case 7:
      console.log('Hoy es Domingo');
      break;
    default:
      console.log('No escogio un dia valido');
      break;
  }