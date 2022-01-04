/* Estructura de control de errores */

try {
    console.log('En el try se agrega el codigo a evaluar');
    // Error de sintaxis
    noExiste;
    /* Cuando el try detecta el error las siguientes lineas de codigo no se ejecutan */
    console.log('Segundo mensaje en el try');
} catch (error) {
    console.log('catch captura cualquier error surgido en en el try');
    console.log(error);
} finally {
    console.log('El bloque finally se ejecutara siempre al final de un bloque try-catch');
}
// La variable noExiste, si la sacamos a fuera del try-catch lanzara el tipico mensaje rojo en la consola.
    /*
    noExiste;
    */
console.log('-----------------------------------------------------------');

try {
    let numero = "y";

    /* isNaN() es una funcion en donde si el parametro no es un numero te retorna verdadero y si es falso te retorna falso */
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un numero")
    }

    console.log(numero * numero);
} catch (error) {
    console.log(`${error}`);
}