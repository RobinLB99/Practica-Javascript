/* Programa una funcion que cuente el numero de caracteres de una cadena de texto, pe. miFuncion("Hola mundo") devolvera 10 */

function contarCaracteres(c){
    if (typeof c == "string"){
        console.log(c.length);
    }
    else{
        console.log("No se ingreso una cadena de texto.");
    }
}

contarCaracteres("Hola mundo"); // 10

/* Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados, pe. miFuncion("Hola mundo", 4) devolvera "Hola" */

function textoRecortado(string, nCaracteres){
    if(typeof string == "string"){
        cadena = string.split(" ");
        for(let i = 0; i < cadena.length; i++){
            if(cadena[i].length == nCaracteres){
                console.log(cadena[i]);
            }
        }
    }
    else{
        console.info("Error: El parametro ingresado no es una cadena de texto");
    }
}

textoRecortado("Hola mundo", 4); // Hola

/* Programa una funcion que dada una String te devuelva un array de textos sepaprados por cierto caracter, pe. miFuncion("Hola que tal"," ") devolvera 'hola' 'que' 'tal' */

function arrayTextoSeparado(string, separ){
    if(typeof string == "string"){
        array = string.split(separ);
        console.log(array);
    }
    else{
        console.info("Error: El parametro ingresado no es una cadena de texto");
    }
}
arrayTextoSeparado("Hola que tal", " "); // (3) ['Hola', 'que', 'tal']


/* Programa una funcion que repita un texto X veces, pe. miFuncion('hola Mundo', 3) devolvera hola mundo hola mundo hola mundo */

function repetir(objeto, veces){
    if(typeof objeto == "string"){
        let texto = "";
        for(let i = 1; i <= veces ; i++){
            texto = texto + objeto + " ";
        }
        console.log(texto);
    }
    else{
        console.info("Error: El parametro ingresado no es una cadena de texto")
    }
}
repetir("Hola mundo", 3); // Hola mundo Hola mundo Hola mundo