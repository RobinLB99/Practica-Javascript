/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const aleatorio = (min, maxi) => {
    (!min)
        ? console.warn("No ingresaste el numero minimo")
        : (!maxi)
            ? console.warn("No ingresaste el numero maximo")
            : (typeof min !== "number")
                ? console.error("El parametro 'min' no es un numero")
                : (typeof maxi !== "number")
                    ? console.error("El parametro 'maxi' no es un numero")
                    : console.info(`El numero aleatorio entre ${min} y ${maxi} es: ${resultado = Math.floor(Math.random() * (maxi - min + 1) + min)}`)
}

aleatorio(501, 600);

// Solucion jonmircha -----------------------------------

const aleatorie = () => console.info(Math.round(Math.random() * 100) + 500);
aleatorie();

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un
    sentido que en otro), pe. miFuncion(2002) devolverá true. */

const capicua = (numero) => {
    if (!numero) return console.warn("No ingresate el parametro 'numero'")
    if (typeof numero !== "number") return console.error("El parametro 'numero' no es un numero")

    numero = numero.toString();
    nuevoNumero = numero.split("").reverse().join("");

    return (numero !== nuevoNumero)
        ? console.info(`El numero no es capicua. Numero inicial: ${numero}. Numero final: ${nuevoNumero}`)
        : console.info(`El numero es capicua. Numero inicial: ${numero}. Numero final: ${nuevoNumero}`)
}

capicua(2002);


/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el
    producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (numero) => {
    if(!numero) return console.warn("No ingreso el parametro 'numero'");
    if(typeof numero !== "number") return console.error("El parametro ingresado no es un numero");
    if (numero <= 0) return console.error("No se puede sacar factorial de un numero negativo");

    fact = 1;
    for(let i = numero; i > 0; i--){
        fact = fact * i;
    }
    return console.info(`El factorial de ${numero} es: ${fact}`);
}

factorial(5);
