/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios. *
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
     7 restantes números.*
  - Valida que el título no rebase los 100 caracteres.*
  - Valida que el director no rebase los 50 caracteres.*
  - Valida que el año de estreno sea un número entero de 4 dígitos.*
  - Valida que el país o paises sea introducidos en forma de arreglo.*
  - Valida que los géneros sean introducidos en forma de arreglo.*
  - Valida que los géneros introducidos esten dentro de los géneros
     aceptados*. *
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
    decimal de una posición. *
  - Crea un método que devuelva toda la ficha técnica de la película. *
  - Apartir de un arreglo con la información de 3 películas genera 3
    instancias de la clase de forma automatizada e imprime la ficha técnica
    de cada película.*

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class pelicula {
    constructor (idIMDB, titulo, director, anio, pais, generos, calIMDB){
        this.idIMDB = idIMDB;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.pais = pais;
        this.genero = generos;
        this.calIMDB = calIMDB;
    }
    fichaTecnica(){
        console.info(
            "ID: " + this.idIMDB +
            "\nTitulo: " + this.titulo +
            "\nDirector: " + this.director +
            "\nAño: " + this.anio +
            "\nPais: " + this.pais +
            "\nGeneros: " + this.genero +
            "\nCalificacion: " + this.calIMDB
        );
    }
    static generos(){
        console.table(generos);
    }
}

const generos = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']

const peliculas = [
    new pelicula("TF1234567", "Transformers", "Michael Bay", 2007, ["Estados Unidos"], ["Sci-Fi", "Action"], "7.1"),
    new pelicula("TB1234567", "The Batman", "Matt Reeves", 2022, ["Estados Unidos"], ["Sci-Fi", "Action"], "8.3"),
    new pelicula("SP1234567", "Spiderman No way home", "Jon Watts", 2021, ["Estados Unidos"], ["Sci-Fi", "Action"], "8.5"),
]

let validado = true;

function validarTodosLosDatos(object) {
    sinIngresarDatos = false;
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            if (object[key] === "") {
                sinIngresarDatos = true;
            }
        }
    }
    if (sinIngresarDatos === true) {
        console.warn('Existen datos sin ingresar. Por favor verifique todos los campos esten llenos');
    }
    else{
        if (object.idIMDB.split("").length !== 9) {
            console.error(`El id de la pelicula debe contener 9 caracteres.`);
            validado = false;
        }

        if (/[a-z]{2}([0-9]{7})/ig.test(object.idIMDB) !== true) {
            console.error(`El id de la pelicula no es un id IMDB valido`);
            validado = false;
        }

        if (object.titulo.split("").length > 100) {
            console.error('El titulo de la pelicula tiene mas de 100 caracteres!');
            validado = false;
        }

        if (/^[A-ZÑáéíóúü\s]+$/gi.test(object.director) === false) {
            console.error('El nombre del director tiene caracteres invalidos');
            validado = false;
        }

        if (object.director.split("").length > 50) {
            console.error('El nombre del director tiene mas de 50 caracteres');
            validado = false;
        }

        if (/[\p{L}\p{P}\p{M}\p{S}\p{Z}\p{C}]/giu.test(object.anio) === true) {
            console.error('El año de la pelicula tiene caracteres invalidos')
            validado = false;
        }

        if (typeof object.anio !== 'number') {
            console.error(`El año no puede ser de tipo ${typeof object.anio}`);
            validado = false;
        }else{
            if (object.anio.toString().length !== 4) {
                console.error('El año de la pelicula debe contener 4 digitos');
                validado = false;
            }
        }

        if (!(object.pais instanceof Array)) {
            console.error('El pais ingresado no es una array');
            validado = false;
        }
        if (!(object.genero instanceof Array)) {
            console.error('El o los generos no fueron ingresados en forma de array');
            validado = false;
        }

        generoIncluido = false;
        for (const iterator of object.genero) {
            if (generos.includes(iterator) === true) {
                generoIncluido = true;
            }
            else{
                generoIncluido = false;
            }
        }

        if (generoIncluido === false) {
            console.error('Los generos ingresados no coinciden con los de la lista');
            console.info(`Generos ingresados: `)
            console.table(object.genero);
            console.info('Generos permitidos:')
            console.table(generos);
            validado = false;
        }

        if (typeof object.calIMDB !== 'string'){
            console.error(`La calificacion de la pelicula no puede ser de tipo "${typeof object.calIMDB}"`);
            validado = false;
        }else{
            if (parseFloat(object.calIMDB) > 10){
                console.error('La calificacion no puede ser mayor a 10 puntos');
                validado = false;
            }
            else{
                if (parseFloat(object.calIMDB) <= -1){
                    console.error('La calificacion no puede ser menor a 0');
                    validado = false;
                }
                else{
                    if (parseFloat(object.calIMDB) === 10){}
                    else{
                        if (/^[0-9]+(\.[0-9])/i.test(object.calIMDB) !== true){
                            console.warn('No ha ingresado una calificacion valida');
                            validado = false;
                        }
                    }
                }
            }
        }
    }

}

(function(){
    for (const iterator of peliculas) {
        validarTodosLosDatos(iterator)
        if (validado === true) {
            iterator.fichaTecnica();
        }
        else{
            console.warn(`No se pudo imprimir la ficha tecnica de la pelicula ${iterator}`);
        }
    }
}())
//pelicula.generos()

