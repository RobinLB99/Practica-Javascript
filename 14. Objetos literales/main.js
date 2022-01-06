let nombre = "Robin",
    edad = 22;

// Sin las nuevas caracteristicas
let alumno = {
    nombre: nombre,
    edad: edad,
    hablar: function (){
        console.log('Hola');
    }
};

console.log(alumno);
alumno.hablar();

// Con las nuevas caracteristicas de objetos literales - ES6
const student = {
    nombre,
    edad,
    pais: "Ecuador",
    hablar(){
        console.log('Hola compañeros');
    }
};
/* Escribir el nombre de la variable de esta manera dentro del objeto hara que javascript lo asigne a una propiedad con el mismo nombre dinamicamente. Ademas, podemos declarar la funcion como si la invocaramos y el nombre de la propiedad se le asignara dinamicamente el mismo nombre de la funcion. unaFuncion(){codigo} */

console.log(student);
student.hablar();