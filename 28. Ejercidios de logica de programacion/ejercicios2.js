/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

function invertir(cadena = "") {
    if (!(typeof cadena === "string")) return console.warn("El parametro ingresado no es una cadena de texto");
    if (!cadena) return console.warn("No ingreso la cadena de texto");

    texto = cadena.split("");
    // Convierte la cadena en un arreglo seprandolo por el caracter espesificado
    texto.reverse();
    // Reordena el arreglo del ultimo al primero
    txt = texto.join("");
    // convierte el arreglo en una cadena separando cada elemento con un caracter.
    return txt;
}

console.info(invertir("Hola mundo")); //odnum aloH



/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

function contar(cadena, palabra) {
    let cont = 0;

    if(!cadena) return console.warn("No ingreso el parametro cadena");
    if(!(typeof cadena === "string")) return console.error("El parametro cadena ingresado no es una cadena de texto");
    if(!palabra) return console.warn("No ingreso el parametro palabra");
    if(!(typeof palabra === "string")) return console.error("El parametro palabra ingresado no es una cadena de texto");

    texto = cadena.split(" ");

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === palabra) {
            cont = cont + 1;
        }
    }

    return cont;
}

console.info(contar("Hola mundo adios mundo", "mundo")); // 2


/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

function palindromo(cadena) {
    if (!cadena) return console.warn("No ingresate el parametro cadena");
    if (!(typeof cadena === "string")) return console.error("El parametro cadena no es una cadena de texto");

    texto = cadena.toLowerCase();
    texto2 = texto.split("");
    texto3 = [];

    for(let i=0; i<texto2.length; i++){
        texto3.push(texto2[i]);
    }

    texto3.reverse();
    texto2_1 = texto2.join("");
    texto3_1 = texto3.join("");

    if(!(texto2_1 === texto3_1)) return false;
    return true;
}

console.info(palindromo("Salas")); // true


/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

function eliminarPatron(cadena, patron){
    if(!cadena) return console.warn("No ingreso el parametro 'cadena'");
    if(!patron) return console.warn("No ingreso el parametro 'patron'");
    if (!(typeof cadena === "string")) return console.error("El parametro 'cadena' no es una cadena de texto");
    if(!(typeof patron === "string")) return console.error("El parametro 'patron' no es una cadena de texto");

    txt = cadena.split(" ");
    a = patron.length;
    texto = [];

    for (i = 0; i < txt.length; i++){
        if (txt[i]) {
            b = txt[i].indexOf(patron);
            if(!(b === -1)) {
                texto.push(txt[i].slice(b+a));
            }else{
                texto.push(txt[i]);
            }
        }
    }
    return texto = texto.join(" ");
}

console.info(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz"));