/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

    // Mi solucion ----------------------------------------------------------
    const consonantesVocales = (cadena = "") => {
        if (typeof cadena !== "string") return console.error(`No ingreso una cadena de texto`);
        if (cadena === "") return console.warn(`La cadena de texto esta vacia`);

        const expReg1 = /[^AEIOU\d\p{S}\p{P}\p{M}\p{Z}\p{C}]/giu;
        const expReg2 = /[^B-DF-HJ-NP-TV-ZÑ\d\p{S}\p{P}\p{M}\p{Z}\p{C}]/giu;

        consonantes = cadena.match(expReg1);
        vocales = cadena.match(expReg2);

        return (consonantes === null && vocales === null)
            ? console.info(`Candena: ${cadena}, Vocales: 0, Consonantes: 0`)
            : (vocales === null)
                ? console.info(`Candena: ${cadena}, Vocales: 0, Consonantes: ${consonantes.length}`)
                : (consonantes === null)
                    ? console.info(`Candena: ${cadena}, Vocales: ${vocales.length}, Consonantes: 0`)
                    : console.info(`Candena: ${cadena}, Vocales: ${vocales.length}, Consonantes: ${consonantes.length}`);
    }
    consonantesVocales("Hola mundo");

    // Solucion jonmircha (mejorado)--------------------------------------------
    const contarLetras = (cadena = "") => {
        if (typeof cadena !== "string") return console.error(`No ingreso una cadena de texto`);
        if (cadena === "") return console.warn(`La cadena de texto esta vacia`);

        let vocales = 0,
            consonantes = 0;

        for(let letra of cadena){
            if(/[aeiouáéíóúü]/gi.test(letra)){
                vocales++;
            }
            if(/[B-DF-HJ-NP-TV-ZÑ]/gi.test(letra)){
                consonantes++;
            }
        }

        return console.info(`Cadena: ${cadena}, Vocales: ${vocales}, Consonantes: ${consonantes}`)
    }
    contarLetras('HolA mündÓ');

/* 19) Programa una función que valide que un texto sea un nombre válido,
pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

    // Mi solucion------------------------------------------------------
    const validarNombre = (nombre = "") => {
        let digitos = /\d/g; // busca digitos
        let arroba = /\@/g // busca @
        let simbolos = /\p{S}/gu // busca Simbolos = - + * / % $ # !
        let guionBajo = /\_/g // Busca subguiones "_"

        return (typeof nombre !== "string")
            ? console.error(`El parametro ingresado no es una cadena de texto`)
            : (nombre === "")
                ? console.error(`No ha ingresado un texto`)
                : ((digitos.test(nombre)) === true)
                    ? console.error(`El texto ingresado "${nombre}" no es un nombre valido. Contiene digitos`)
                    : ((arroba.test(nombre)) === true)
                        ? console.error(`El texto ingresado "${nombre}" no es un nombre valido. Contiene @`)
                        : ((simbolos.test(nombre)) === true)
                            ? console.error(`El texto ingresado "${nombre}" no es un nombre valido. Contiene simbolos`)
                            : ((guionBajo.test(nombre)) === true)
                                ? console.error(`El texto ingresado "${nombre}" no es un nombre valido. Contiene "_"`)
                                : console.info(`"${nombre}" es un nombre valido`)
    }
    validarNombre("Jonathan MirCha");

    //Solucion jonmircha (mejorado)--------------------------------------------
    const nombreValido = (cadena = "") => {
        if (typeof cadena !== "string") return console.error(`El parametro ingresado no es una cadena de texto`)
        if (cadena === "") return console.warn(`La cadena de texto esta vacia`)

        let expReg = /^[A-ZÑáéíóúü\s]+$/gi.test(cadena)

        return (expReg)
            ? console.info(`"${cadena}" es un nombre valido`)
            : console.info(`"${cadena}" no es un nombre valido`)
    }
    nombreValido("Robin Lugo")

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

    // Mi solucion ---------------------------------------------------
    function correo(cadena = "") {
        let expReg = new RegExp("@gmail.com","g");
        const expRegEmail = /@gmail.com/g;

        validacion = expRegEmail.test(cadena);
        if (validacion === true){
            console.info(`${cadena} es un correo es valido`)
        }
        else{
            console.info(`${cadena} no es un correo es valido`)
        }
    }
    correo("jonmircha@gmail.com");

    // Solucion jonmircha ---------------------------------------------------
    const correoValido = (email = "") => {
        if (typeof email !== "string") return console.error(`El parametro ingresado no es una cadena de texto`)
        if (email === "") return console.warn(`La cadena de texto esta vacia`)

        let expReg = /[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z]{2,15})/i.test(email);

        return (expReg)
            ? console.info(`"${email}" es un correo electronico valido`)
            : console.info(`"${email}" no es un correo electronico valido`)
    }
    correoValido("rlugo.est@gmail.com") // Este es un correo falso.




// Mi solucion a la fusion de los ejercicios 19 y 20 ------------------------
const validarPatron = (cadena = "", patron = "") => {
    if (typeof cadena !== "string") return console.error(`El parametro ingresado no es una cadena de texto`)
    if (cadena === "") return console.warn(`La cadena de texto esta vacia`)
    if(typeof patron !== "string") return console.warn(`El parametro "patron" no es una cadena de texto`);
    if (patron === "") return console.warn(`El parametro "patron" es una cadena vacia`)

    if(patron === "nombre"){
        let expRegNombre = /^[A-ZÑáéíóúü\s]+$/gi.test(cadena);

        return (expRegNombre)
            ? console.info(`"${cadena}" es un nombre valido`)
            : console.info(`"${cadena}" no es un nombre valido`)
    }
    if(patron === "email"){
        let expRegEmail = /[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z]{2,15})/i.test(cadena);

        return (expRegEmail)
            ? console.info(`"${cadena}" es un correo electronico valido`)
            : console.info(`"${cadena}" no es un correo electronico valido`)
    }
}
validarPatron("rlugo.est@gmail.com", "email");
validarPatron("Robin Lugo Boero", "nombre");
