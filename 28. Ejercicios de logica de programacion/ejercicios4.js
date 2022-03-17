/* 12) Programa una función que determine si un número es primo (aquel que solo es
    divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

    // solucion jonmircha ------------------------------------------------
    const numeroPrimo = (numero = undefined) =>{
        if (numero == undefined) return console.warn("No ingreso el parametro 'numero'");
        if (typeof numero !== "number") return console.error("El parametro 'numero' no es un numero");
        if(numero === 0) return console.error(`El numero no puede ser 0`);
        if(numero === 1) return console.error(`El numero no puede ser 1`);
        if(Math.sign(numero) === -1) return console.error(`El numero no puede ser un negativo`);

        let divisible = false;
        for(let i = 2; i < numero; i++){
            if((numero % i) === 0){
                divisible = true;
                break;
            }
        }

        return (divisible === true)
            ? console.info(`${numero} no es un numero primo`)
            : console.info(`${numero} es un numero primo`)
    }

    numeroPrimo(25)

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29)
    devolverá Impar. */

const parImpar = (numero) =>
    (!numero)
        ? console.warn("No ingreso el parametro 'numero'")
        : (typeof numero !== "number")
            ? console.error("El parametro 'numero' no es un numero")
            : (numero % 2 === 0)
                ? console.info(`${numero} es un numero Par`)
                : console.info(`${numero} es un numero Impar`);

parImpar(29);


/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
    pe. miFuncion(0,"C") devolverá 32°F. */

    const convertirGrados = (grados = undefined, medida = "") => {
        if(grados == undefined) return console.warn("No ha ingresado los grados a convertir");
        if (typeof grados !== "number") return console.error("El parametro 'grados' no es un numeros");
        if (!medida) return console.warn("No ingreso la medida del grado a convertir");
        if (typeof medida !== "string") return console.error("El parametro 'medida' no es una cadena de texto");

        medida = medida.toUpperCase();
        gradosCelsius = Math.round((grados - 32) / 1.8)
        gradosFahrenheit = Math.round((grados * 1.8) + 32)

        if (medida === "F"){
            return console.info(`${grados}ºF son: ${gradosCelsius}ºC`);
        }
        if(medida === "C"){
            return console.info(`${grados}ºC son: ${gradosFahrenheit}ºF`);
        }

        return console.warn(`El grado especificado no es valido`)
    }

    convertirGrados(0, "c");