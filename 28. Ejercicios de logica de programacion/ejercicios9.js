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
    static generosAceptados() {
        console.log(generos);
    }
    validarDatosIngresados() {
        if (this.calificacion === undefined) return datosIngresados = false;
    }
    validarId() {
        const idExpReg = /[a-z]{2}[0-9]{7}$/gi
        if (idExpReg.test(this.id) === false) {
            console.error(`El id ${this.id} no es un Id valido`);
            datoCorrecto = false
        }
    }
    validarTitulo() {
        if (this.titulo.length > 100) {
            console.error(`El titulo ${this.titulo} tiene mas de 100 caracteres`);
            datoCorrecto = false;
        }
        else {
            const tituloExpReg = /[\p{L}\p{N}\p{P}\p{Zs}]/giu
            if (tituloExpReg.test(this.titulo) !== true) {
                console.error(`El titulo ${this.titulo} tiene mas de 100 caracteres`);
                datoCorrecto = false;
            }
        }
    }
    validarDirector() {
        if (this.director.length <= 50) {
            const directorExpReg = /^[A-ZÑáéíóúü\s]+$/gi
            if (directorExpReg.test(this.director) === false) {
                console.error(`El nombre "${this.director}" tiene caracteres invalidos`);
                datoCorrecto = false;
            }
        }
        else {
            console.error(`El nombre "${this.director}" tiene mas de 50 caracteres`);
            datoCorrecto = false;
        }
    }
    validarAnio() {
        if (this.anio.length !== 4) {
            console.error(`El año "${this.anio}" debe contener 4 digitos`);
            datoCorrecto = false;
        }
        else {
            const anioExpReg = /[\p{L}\p{P}\p{S}\p{C}\p{M}\p{Z}]/giu
            if (anioExpReg.test(this.anio) === true) {
                console.error(`El año "${this.anio}" contiene caracteres invalidos`);
                datoCorrecto = false;
            }
        }
    }
    validarPaises() {
        if (!(this.pais instanceof Array)) {
            console.error(`Debe ingresar el o los paises en forma de arreglo`);
            datoCorrecto = false;
        }
    }
    validarGeneros() {
        if (!(this.genero instanceof Array)) {
            console.error(`Debe ingresar el o los generos en forma de arreglo`);
            datoCorrecto = false;
        }
        else {
            for (let i = 0; i < this.genero.length; i++) {
                if (generos.includes(this.genero[i]) === false) {
                    console.error(`${this.genero[i]} no se encuentra en la lista de generos`);
                    datoCorrecto = false;
                }
            }
        }
    }
    validarCalificacion() {
        if (typeof this.calificacion !== "string") {
            console.error(`El valor de la califiacion debe ser de tipo String`);
            datoCorrecto = false;
        }
        else {
            if (parseFloat(this.calificacion) > 10) {
                console.error(`La calificacion: '${this.calificacion}'. La calificacion no puede supera los 10 puntos`);
                datoCorrecto = false;
            }
            else if (parseFloat(this.calificacion) <= -1) {
                console.error(`La califcacion: '${this.calificacion}'. La calificacion no puede ser inferior a 0 puntos`);
                datoCorrecto = false;
            }
        }
    }
    fichaTecnica() {
        console.info(`ID: ${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.anio}\nPais: ${this.pais}\nGenero: ${this.genero}\nCalificacion: ${this.calificacion}`)
    }
}

const peliculas = [
    transformers = new pelicula("TF1234567", "Transformers", "Michael Bay", "2007", ["Estados Unidos"], ["Sci-Fi", "Action"], "7.1"),
    batman = new pelicula("TB1243567", "The Batman", "Matt Reeves", "2022", ["Estados Unidos"], ["Sci-Fi", "Action"], "8.3"),
    spiderman = new pelicula("SP1234567", "Spiderman No way home", "Jon Watts", "2021", ["Estados Unidos"], ["Sci-Fi", "Action"], "8.5")
]

const generos = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']

pelicula.generosAceptados();

(function(){
  let datosIngresados = true
  let datoCorrecto = true

  for (const iterator of peliculas) {
      iterator.validarDatosIngresados()
      if (datosIngresados === true) {
          iterator.validarId()
          iterator.validarTitulo()
          iterator.validarDirector()
          iterator.validarAnio()
          iterator.validarPaises()
          iterator.validarGeneros()
          iterator.validarCalificacion()
          if (datoCorrecto === true) {
              iterator.fichaTecnica()
          }
      }
      else {
          console.error(`Existen datos sin ingresar`);
      }
  }
})();