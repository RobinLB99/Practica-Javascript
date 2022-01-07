/* Programación Orientada a Objetos
  * Clases - Modelo a seguir
  * Objetos - Instancia de la clase
      - Atributos: Caracteristica o propiedad del objeto (variables dentro de un objeto)
      - Metodos: Son las acciones que un objeto puede realizar (Funciones dentro de un objeto)
*/

//Objeto literal.
const animal = {
  Nombre: 'Snopy',
  sonar(){
    console.log('Sueno, porque estoy vivo');
  }
}
console.log(animal);

const animal2 = {
  Nombre: 'Buzz Bonny',
  sonar(){
    console.log('Que hay de nuevo, viejo?!');
  }
}
console.log(animal2);
/* Escribir varios objetos con la misma extrutura no es funcional*/


// Funciones constructora
  /*
  function Animal(nombre, genero, sonido){
    this.Nombre = nombre;
    this.Genero = genero;
    //Dentro de una funcion constructora se declara un metodo de la manera tradicional
    this.sonido = function (){
      console.log(sonido);
    }
    this.saludar = function (){
      console.log(`Hola, me llamo ${this.Nombre}`);
    }
  }
  */
  
  /* Funcion.constructora donde asignamos los metodos al prototipo, no a la funcion como tal*/
    function Animal(nombre, genero) {
      this.Nombre = nombre;
      this.Genero = genero;
      
    }
    // Metodos agregados al prototipo de la funcion constructora
    Animal.prototype.sonido = function() {
      console.log('Hago sonido porque estoy vivo');
    }
    Animal.prototype.saludar = function() {
      console.log(`Hola, me llamo ${this.Nombre}`);
    }
    /* Esto mejora el rendimiento y eespacio en memoria, ya que evita que por cada instancia repita los metodos llenando la memoria. Esto hace que los metodos se queden solo en el prototipo.*/
  
  const conejo = new Animal('Buzz Bonny', 'Macho');
  const pato = new Animal('Lucas', 'Macho');
  
  console.log(conejo);
  console.log(pato);
  
  conejo.sonido();
  conejo.saludar();
  
  pato.sonido();
  pato.saludar();
  