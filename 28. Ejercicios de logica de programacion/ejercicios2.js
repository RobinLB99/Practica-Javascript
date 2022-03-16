/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

// Mi solucion --------------------------------------
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

// Solucion jonmircha -------------------------------
    const invertirCadena = (cadena = "") =>
        (!(typeof cadena === "string"))
            ? console.warn("El parametro ingresado no es una cadena de texto")
            : (!cadena)
                ? console.warn("No ingreso la cadena de texto")
                : console.info(cadena.split("").reverse().join(""))

    invertirCadena("Hola mundo"); // odnum aloH



/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

// Mi solucion --------------------------------
    function contar(cadena, palabra) {

        if(!cadena) return console.warn("No ingreso el parametro cadena");
        if(!(typeof cadena === "string")) return console.error("El parametro cadena ingresado no es una cadena de texto");
        if(!palabra) return console.warn("No ingreso el parametro palabra");
        if(!(typeof palabra === "string")) return console.error("El parametro palabra ingresado no es una cadena de texto");

        let cont = 0;
        texto = cadena.split(" ");

        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === palabra) {
                cont = cont + 1;
            }
        }
        return cont;
    }

    console.info(contar("Hola mundo adios mundo", "mundo")); // 2

// Solucion jonmircha --------------------------------------
    const contarPalabra = (cadena = "", palabra = "") => {

        if(!cadena) return console.warn("No ingreso el parametro cadena");
        if(!(typeof cadena === "string")) return console.error("El parametro cadena ingresado no es una cadena de texto");
        if(!palabra) return console.warn("No ingreso el parametro palabra");
        if(!(typeof palabra === "string")) return console.error("El parametro palabra ingresado no es una cadena de texto");

        let i = 0,
            cont = 0;

        while(i !== -1){
            i = cadena.indexOf(palabra, i)
            if(i !== -1){
                i++;
                cont++;
            }
        }
        return console.info(`La palabra ${palabra} se repite ${cont} veces.`);
    }

    contarPalabra("Hola mundo adios mundo","mundo");


/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

// Mi solucion ----------------------------------
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

// Solucion jonmircha-----------------------------

    const palindroma = (palabra = "") => {

        if (!palabra) return console.warn("No ingresate el parametro cadena");
        if (!(typeof palabra === "string")) return console.error("El parametro cadena no es una cadena de texto");

        palabra = palabra.toLowerCase();
        let alReves = palabra.split("").reverse().join("");

        return (palabra === alReves)
            ? console.info(`Si es palindromo. Palabra original: ${palabra}. Palabra al reves: ${alReves}`)
            : console.info(`No es palindromo. Palabra original: ${palabra}. Palabra al reves: ${alReves}`)
    }

    palindroma("Salas");


/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

// Mi solucion ---------------------------------

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

    console.info(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz")); // 1, 2, 3, 4 y 5

// Solucion jonmircha ----------------------------------

    const eliminarCaracteres = (cadena, patron) =>
        (!cadena)
            ? console.warn("No ingreso el parametro 'cadena'")
            : (!patron)
                ? console.warn("No ingreso el parametro 'patron'")
                : (!(typeof cadena === "string"))
                    ? console.error("El parametro 'cadena' no es una cadena de texto")
                    : (!(typeof patron === "string"))
                        ? console.error("El parametro 'patron' no es una cadena de texto")
                        : console.info(cadena.replace(new RegExp(patron,"ig"),""));

    eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz"); // 1, 2, 3, 4 y 5
