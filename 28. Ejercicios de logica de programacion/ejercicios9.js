/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios. *
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
     7 restantes números. *
  - Valida que el título no rebase los 100 caracteres. *
  - Valida que el director no rebase los 50 caracteres. *
  - Valida que el año de estreno sea un número entero de 4 dígitos. *
  - Valida que el país o paises sea introducidos en forma de arreglo. *
  - Valida que los géneros sean introducidos en forma de arreglo. *
  - Valida que los géneros introducidos esten dentro de los géneros
     aceptados. *
  - Crea un método estático que devuelva los géneros aceptados. *
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
    decimal de una posición. *
  - Crea un método que devuelva toda la ficha técnica de la película. *
  - Apartir de un arreglo con la información de 3 películas genera 3
    instancias de la clase de forma automatizada e imprime la ficha técnica
    de cada película. *

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class pelicula {
    constructor (id = undefined, titulo = undefined, director = undefined, anio = undefined, pais = undefined, genero = undefined, calificacion = undefined) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;
    }
    fichaTecnica() {
        console.info(`Id: ${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.anio}\nPais: ${this.pais}\nGenero: ${this.genero}`)
    }
    static generosAceptados(objeto){
      console.log(`Los generos aceptados son: ${objeto.toString()}`);
    }
}

const generos = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']

const peliculas = [
  transformers = new pelicula("TF1234567", "Transformers", "Michael Bay", "2007", ["Estados Unidos"], ["Sci-Fi", "Action"], "7.1"),
  batman = new pelicula("TB1243567", "The Batman", "Matt Reeves", "2022", ["Estados Unidos"], ["Sci-Fi", "Action"], "8.3"),
  spiderman = new pelicula("SP1234567", "Spiderman No way home", "Jon Watts", "2021", ["Estados Unidos"], ["Sci-Fi", "Action"], "8.5")
]

const validarDatosIngresados = (objeto) => {
  for (const iterator of objeto) {
    for (const key in iterator) {
      if (Object.hasOwnProperty.call(iterator, key)) {
        const element = iterator[key];
        if(element === undefined){
          console.error(`Existen datos sin llenar`)
          return datosIngresados = false;
        }
      }
    }
  }
}

const validarId = (object) => {
  for (const iterator of object) {
    idIMDB = /[a-z]{2}[0-9]{7}$/gi
    if (idIMDB.test(iterator.id) !== true){
      console.error(`El id ${iterator.id} no es valido`);
      datosCorrectos = false;
    }
  }
}

const validarTitulo = (object) => {
  for (const iterator of object) {
    if (iterator.titulo.split('').length > 100) {
        console.error(`El titulo "${iterator.titulo}" sobrepasa el numero de caracteres permitidos`);
        datosCorrectos = false;
    }
    else{
      tituloIMDB = /[\p{N}\p{P}\p{M}\p{S}\p{C}]/giu
      if (tituloIMDB.test(iterator.titulo) === true) {
        console.error(`El titulo "${iterator.titulo}" contiene caracteres invalidos`);
        datosCorrectos = false;
      }
    }
  }
}

const validarDirector = (object) => {
  for (const iterator of object) {
    if (iterator.director.split('').length > 50) {
        console.error(`El nombre del "${iterator.director}" sobrepasa el numero de caracteres permitidos`);
        datosCorrectos = false;
    }
    else{
      directorIMDB = /[\p{M}\p{Z}\p{C}\p{N}\p{P}]/giu
      if (directorIMDB.test(iterator.director) !== true) {
        console.error(`El nombre "${iterator.director}" contiene caracteres invalidos`);
        datosCorrectos = false;
      }
    }
  }
}

const validarAnio = (object) => {
  for (const iterator of object) {
    anioIMDB = /[\p{N}]{4}$/giu
    if (anioIMDB.test(iterator.anio) === false) {
      console.error(`El año "${iterator.anio}" no es una año valido`);
      datosCorrectos = false;
    }
  }
}

const validarPaises = (object) => {
  for (const iterator of object) {
    if ((iterator.pais instanceof Array) !== true) {
      console.error(`El pais ${iterator.pais} no fue ingresado en forma de array`);
      datosCorrectos = false;
    }
  }
}

const validarGeneros = (object, generos) => {
  for (const iterator of object) {
    if ((iterator.genero instanceof Array) !== true) {
      console.error(`El o los generos ${iterator.genero} no fue ingresado en forma de array`);
      datosCorrectos = false;
    }
    else{
      for (let i = 0; i < iterator.genero.length; i++) {
        const element = iterator.genero[i];
        if (!(generos.includes(element))) {
          console.warn('Los generos ingresados no son generos validos');
          pelicula.generosAceptados(generos);
          datosCorrectos = false;
        }
      }
    }
  }
}

const validarCalificacion = (object) => {
  for (const iterator of object) {
    calif = parseFloat(iterator.calificacion)
    if (calif > 10) {
      console.warn(`La calificacion ${iterator.calificacion} excede a la puntuacion maxima permitida`);
      datosCorrectos = false;
    }
    else if (calif < 10 && calif >= 0) {
      calificacion = /[0-9]+(\.[0-9])$/g
      if (calificacion.test(iterator.calificacion) !== true) {
        console.error(`El valor de ${iterator.calificacion} no es una calificacion valida`)
        datosCorrectos = false;
      }
    }
    else if (calif <= -1) {
      console.warn(`La calificacion ${iterator.calificacion} no es una calificacion valida. La calificacion no puede ser una inferior a 0`);
      datosCorrectos = false;
    }
  }
}

(function(){
  datosingresados = true;
  validarDatosIngresados(peliculas)
  if (datosingresados === true) {
    datosCorrectos = true;
    validarId(peliculas)
    validarTitulo(peliculas)
    validarDirector(peliculas)
    validarAnio(peliculas)
    validarPaises(peliculas)
    validarGeneros(peliculas, generos)
    validarCalificacion(peliculas)
    if (datosCorrectos === true) {
      for (const iterator of peliculas) {
        iterator.fichaTecnica()
      }
    }
  }
})();