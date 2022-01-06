// Funcion declarada
    saludar();
    function saludar(){
        console.log('Hola');
    }

// Funcion expresada.
    otroSaludo = function(){
        console.log('otro Hola');
    }
    otroSaludo(); // No pueden ser invocadas antes de inicializarce.

// Arrow functions
    const tercerSaludo = () => console.log('Hola Arrow');
    tercerSaludo();
    /* Puedo omitir las llaves en el caso de que solo tenga un comando. */

    let hablar = () => {
        console.log(`Hola, como estas?`);
        console.log('Espero que muy bien');
    }
    hablar();
    /* No se pueden invocar antes de inicializarce */

    /* Cuando recibe parametros, no hace falta ponerlos entre parentesis */
    const saludo = nombre => console.log(`Hola ${nombre}, como estas?`);
    saludo("Robin");
        /* Tambien es un return implicito */

    /*
    function sumar(a, b){
        return a + b;
    }
    */
    const sumar = (a, b) => a + b;
    /* Altener mas de un parametro hay necesidad de insertar parantesis */
    console.log(sumar(1, 2));

    const Numeros = [1, 2, 3, 4, 5, 6];
    Numeros.forEach((element, index) => console.log(`${element} esta en la posicion ${index}`));

    /*
    function perro(){
        console.log(this);
    }
    perro();
    */

    const perro = {
        nombre: "Boby",
        ladrar(){
            console.log(this);
            // Hace referencia l objeto perro.
        }
    }
    perro.ladrar();

    const perro2 = {
        nombre: "Boby",
        ladrar: () => console.log(this)
        // Con arrow function hace referncia al objeto window del navegador.
    }
    perro2.ladrar();