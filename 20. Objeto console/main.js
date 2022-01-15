/* Propiedades o atributos del objeto console */
  console.log(console);
  
/* Sirve para dar a conocer un error en la consola */
  console.error('Esto es un error');

/* Sirve para dar a concocer un aviso en la consola */
  console.warn('Esto es un aviso');

/* Sirve para dar a conocer información en la consola */
  console.info('Esto es una informacion importante');

/* Sirve para dar un registro de lo que pasa en nuestra aplicacion */
  console.log('Esto es un registro');
  let numero = 1;
  console.log(numero);
  
  let nombre = 'Robin',
    apellido = 'Lugo',
    edad = 22;
  
  console.log(nombre, apellido, edad);
  /*Robin Lugo 22*/
  console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años de edad`);
  /*Hola, mi nombre es Robin Lugo y tengo 22 años de edad*/
  
  console.log(`Hola, mi nombre es %s %s y tengo %d años de edad`, nombre, apellido, edad);
  /*Hola, mi nombre es Robin Lugo y tengo 22 años de edad*/
  
// Limpia la consola
  /*
  console.clear();
  */

/* Muestra las propiedades del objeto window*/
  console.log(window);
  
/*Muestra la extructura del html*/
  console.log(document);
  
/* Al igual que console.log(), me muestra las propiedades del objeto window*/
  console.dir(window);
  
/* Me muestra las propiedades del objeto document*/
  console.dir(document);

/* Nos indica el inicio de un grupo de mensajes en la consola */
  console.group('Cursos de jonmircha');
  /* console.groupCollapse()*/

    console.log('Javascript');
    console.log('POO');
    console.log('PHP');

/* Fin del grupo de mensajes*/
  console.groupEnd();
  
/* Representa las entradas de objeto como una tabla */
  console.table(Object.entries(console));
  // En orden alfabetico
    console.table(Object.entries(console).sort());