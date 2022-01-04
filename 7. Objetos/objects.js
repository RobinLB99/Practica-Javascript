/* ----------------------------------- Objetos --------------------------------------- */

// No recomendado.
    /* Objeto de la clase String */
        let a = new String("Hola");
        console.log(a);

    /* prootipo Object */
        const b = new Object();
        console.log(b);


const objeto = {
    //
}
console.log(objeto);

/* Las varaibles dentro de un objeto se les llaman atributos/propiedades
y a las funciones se les llaman metodos */
const usuario = {
    nombre: "Robin",
    apellido: "Lugo",
    edad: 22,
    nacimiento: "02/11/1999",
    estado_civil: "soltero",
    contacto: {
        correo: "correoelectronico@hotmail.com",
        telefono: 0952147896
    },
    pasatiempos: ["Jugar", "youtube", "Comer"],
    saludar: function (){
        console.log("Hola");
    },
    decirMiNombre: function (){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años de edad.`);
    }
}

console.log(usuario);

// Acceder a una propiedad del objeto
console.log(usuario["nombre"]);
console.log(usuario.nombre);

// Acceder al elemento del arreglo que esta dentro del objeto
console.log(usuario.pasatiempos);
console.log(usuario.pasatiempos[1]);

// Acceder a la propiedad del objeto contacto que a su vez es propiedad del objeto usuario
console.log(usuario.contacto);
console.log(usuario.contacto.correo);

//Ejecucion del metodo del objeto usuario.
usuario.saludar();
usuario.decirMiNombre();

// Enlista las llaves(atributos) del objeto usuario en forma de un arreglo.
console.log(Object.keys(usuario));

// Enlista los valores de los atributos(keys) del objeto usuario en forma de un arreglo.
console.log(Object.values(usuario));

// Este metodo me permite saber si el objeto tiene una propiedad.
console.log(usuario.hasOwnProperty("nombre"));