class Animal{
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

class Conejo extends Animal {
    constructor(nombre, genero, altura){
        // Funcion super(). Hereda los atributos de la clase padre.
        super(nombre, genero);
        this.altura = altura;
        this.raza = null;
    }
    sonar(){
        console.log(`Soy un conejo y digo "Que hay de nuevo viejo?"`);
    }
    sonido(){
        console.log(`Que hay de nuevo viejo?`);
    }
    /* Un metodo estatico es aquel que se puede ejecutar sin necesidad de instanciar la clase. */
    static queEres(){
        console.log(`Los conejos somos roedores, que tiene dos orejas grandes`);
    }
    /* Los getters y setters son metodos especiales que nos permiten establecer y obtener los valores de atrubutos de nuestra clase */
    get getRaza(){
        return this.raza;
    } // get getRaza() - nos mostrara el valor del atributo raza que le asignamos con set setRaza()

    set setRaza(raza){
        this.raza = raza;
    } // set setRaza() - Establecera el valor para el atributo raza en el momento que lo desee.

    /*Aunque son metodos los vamos a utilizar como que si fueran atributos */
}

/* El metodo statico lo puedo ejecutar sin la necesidad de crear un objeto */
    Conejo.queEres();


const buzz = new Conejo("Buzz Bunny", "Macho", "Mediana");

console.log(buzz.getRaza) // null.

buzz.setRaza = "Orejas grandes";

console.log(buzz.getRaza); // Orejas grandes.

console.log(buzz);