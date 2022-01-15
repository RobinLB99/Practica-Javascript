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
  /*-*/console.info(`console.log(window)`);
  console.log(window);

/*Muestra la extructura del html*/
  /*-*/console.info(`console.log(document)`);
  console.log(document);

/* Cunado se quiera representar un elemento como que si fuera un objeto y ver todas sus propiedades, utilizar console.dir() */
  /* Al igual que console.log(), me muestra las propiedades del objeto window*/
    /*-*/console.info(`console.dir(window)`);
    console.dir(window);

  /* Me muestra las propiedades del objeto document*/
    /*-*/console.log(`console.dir(document)`);
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

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8],
    vocales = ["a","e","i",'o',"u"];
  console.table(numeros);
  console.table(vocales);

  const perro = {
    nombre: "Toby",
    raza: "Golden",
    edad: 1
  }
  console.table(perro);

/* Sirve para calcular el tiempo de ciclo de un codigo */
  console.info('console.time()/console.timeEnd()');
  console.time('Cuanto tarda mi codigo');

    const arreglo = Array(1000000);

    for (let i = 0; i < arreglo.length; i++){
      arreglo[i] = i * 2;
    }

  console.timeEnd('Cuanto tarda mi codigo');

  // console.log(arreglo)

/* console.count() - Sirve para saber contar el numero de veces que se ha ejecutado un evento */
  console.info('console.count()');
  function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  let num = aleatorio(0, 100);

  for (let i = 0; i < num; i++){
    console.count("Codigo for")
    console.log(i);
  }

/* Console.assert() - Sirve para realizar pruebas donde se espara que ocurra cierto resultado y en el caso de no obtener el resultado esperado laza un mesaje de error en consola */
  console.info('console.assert()')
  let x = 3,
    y = 2,
    pruebaXY = "Se espera que x sea menor y"

  console.assert(x < y, {x,y,pruebaXY});