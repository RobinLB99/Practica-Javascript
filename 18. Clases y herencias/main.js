// Clases y herencias

/* La sisntaxis de clases en javascript es una azucar sintactica ( se refere a los añadidos a la sintaxis de un lenguaje de programación diseñados para hacer algunas construcciones más fáciles de leer o expresar). Javascript es un lenguaje que se maneja por prototipos, pero gracias a esta azucar sintactica podemos escribir clases y javascript internamente la maneja como prototipos. */

// CLases
    class Animal{
        /* El constructor es una funcion especial que se ejecuta al crear objetos de este
        tipo (instaniar la clase) */
        constructor(nombre, genero){
            this.nombre = nombre;
            this.genero = genero;
        }
        saludar(){
            console.log(`Hola, me llamo ${this.nombre}`);
        }
        sonido(){
            console.log(`Hago sonidos porque estoy vivo`);
        }
    }

    const conejo = new Animal("Buzz Bonnie", "Macho");
    console.log(conejo);
    conejo.saludar();
    conejo.sonido();
    /*
    consola:
        Animal {nombre: 'Buzz Bonnie', genero: 'Macho'}
            genero: "Macho"
            nombre: "Buzz Bonnie"
            [[Prototype]]: Object

        Hola, me llamo Buzz Bonnie
        Hago sonidos porque estoy vivo
    */

    const pato = new Animal("Lucas", "Macho");
    console.log(pato);
    pato.saludar();
    pato.sonido();
    /*
    Consola:

        Animal {nombre: 'Lucas', genero: 'Macho'}
            genero: "Macho"
            nombre: "Lucas"
            [[Prototype]]: Object

        Hola, me llamo Lucas
        Hago sonidos porque estoy vivo
    */

// Herencias

    /*
    Cuando se quiere que una clase herede propiedades de otra, se escribe la nueva clase y a continuacion la palabra reservada extends seguido de la clase padre del que va a heredar
        Class nuevaClase extends clasePadre{
            constructor(parametroPadre1, parametroPadre2, nuevoParametro){
                /codigo/
            }
        }
    */
    class Conejo extends Animal {
        constructor(nombre, genero, altura){

            /* super() es un metodo que va a llamar el constructor de la clase padre */
            super(nombre, genero); // Trae las propiedades de la clase Animal (herencia)

            // Propiedad la clase Conejo
            this.altura = altura;
        }

        /* La sobre escritura del metodo de la clase Animal */
        sonar(){
            console.log(`Soy un conejo y digo "Que hay de nuevo viejo?"`);
        }

        /* Nuevo metodo de la clase Conejo */
        sonido(){
            console.log(`Que hay de nuevo viejo?`);
        }
    }

    const conejo2 = new Conejo("Buzz Bonnie", "Macho", "Mediano");
    console.log(conejo2);
    conejo2.saludar(); //Pertenece a la clase padre
    conejo2.sonar(); //Sobreescritura del metodo de la clase padre
    conejo2.sonido(); //Nuevo metodo de la clase conejo

    /*
    Consola:

        Conejo {nombre: 'Buzz Bonnie', genero: 'Macho' altura: 'Mediana'}
            genero: "Macho"
            nombre: "Buzz Bonnie"
            altura: "Mediano"
            [[Prototype]]: Animal
                constructor: class Conejo
                sonar: ƒ sonar()
                sonido: ƒ sonido()
                [[Prototype]]: Object

        Hola, me llamo Buzz Bonnie
        Soy un conejo y digo "Que hay de nuevo viejo?"
        Que hay de nuevo viejo?

    */