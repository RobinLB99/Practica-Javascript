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
/* Debido a que el objeto y la variable tienen el mismo nombre, esto permite que javascript asigne dinamicamente el valor de la variable al objeto del mismo nombre. Ademas, se declara directamente la funcion como que si la estubieramos invocando y el nombre del objeto se le asigna dinamicamente el nombre de la funcion. unaFuncion(){codigo} */

console.log(student);
student.hablar();