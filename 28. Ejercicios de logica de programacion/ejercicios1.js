/* Programa una funcion que cuente el numero de caracteres de una cadena de texto, pe. miFuncion("Hola mundo") devolvera 10 */
/*
    function contarCaracteres(c){
        if (typeof c == "string"){
            if(!c){
                console.warn("No ingresaste una cadena de texto");
            }
            else{
                console.log(c.length);
            }
        }
        else{
            console.warn("El parametro ingresado no es una cadena de texto");
        }
    }
*/

const contarCaracteres = (cadena) =>
    (typeof cadena === "string")
        ? (!cadena)
            ? console.warn("No ingresaste una cadena de texto")
            : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
        : console.warn("El parametro ingresado no es una cadena de texto");

contarCaracteres("Hola mundo"); // La cadena "Hola mundo" tiene 10 caracteres


/* Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados, pe. miFuncion("Hola mundo", 4) devolvera "Hola" */
/*
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
*/

const textoRecortado = (cadena = "", longitud = undefined) =>
    (typeof cadena === "string")
        ? (!cadena)
            ? console.warn("No ingresaste el texto")
            : console.info(cadena.slice(0,longitud))
        : console.warn("El parametro ingresado no es una cadena de texto");

textoRecortado("Hola mundo", 4); // Hola

/* Programa una funcion que dada una String te devuelva un array de textos sepaprados por cierto caracter, pe. miFuncion("Hola que tal"," ") devolvera 'hola' 'que' 'tal' */

/*
    function arrayTextoSeparado(string, separ){
        if(typeof string == "string"){
            array = string.split(separ);
            console.log(array);
        }
        else{
            console.info("Error: El parametro ingresado no es una cadena de texto");
        }
    }
*/

const arrayTextoSeparado = (string, separ) =>
    (typeof string === "string")
        ? (!separ)
            ? console.warn("No definieste el separador")
            : console.log(array = string.split(separ))
        : console.warn("El parametro ingresado no es una cadena de texto")

arrayTextoSeparado("Hola que tal", " "); // (3) ['Hola', 'que', 'tal']


/* Programa una funcion que repita un texto X veces, pe. miFuncion('hola Mundo', 3) devolvera hola mundo hola mundo hola mundo */
/*
function repetir(objeto, veces){
    if(typeof objeto == "string"){
        let texto = "";
        for(let i = 1; i <= veces ; i++){
            console.log(veces, texto);
        }
    }
    else{
        console.info("Error: El parametro ingresado no es una cadena de texto")
    }
}
*/

const repetir = (texto = "", veces = undefined) => {
    if(!texto) return console.warn("No ingresaste un texto");

    if(veces === undefined) return console.warn("No especificaste el numero de veces a repetir");

    if(veces === 0) return console.error("El numero de veces no puede ser 0");

    if(Math.sign(veces) === -1) return console.error("El numero de veces no puede ser un numero negativo");

    for(let i = 1; i <= veces; i++){
        console.info(`${texto}, ${i}`)
    }
}

repetir("Hola mundo", 3); // Hola mundo Hola mundo Hola mundo