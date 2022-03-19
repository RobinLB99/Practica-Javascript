/* 15) Programa una función para convertir números de base binaria a decimal y viceversa,
pe. miFuncion(100,2) devolverá 4 base 10. */

const convertirBase = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn(`No ingreso el numero a convertir`);
    if(typeof numero !== "number") return console.error(`El valor a convertir debe ser tipo numerico`);
    if(base === undefined) return console.warn(`No ingreso la base del numero a convertir`);
    if(typeof base !== "number") return console.error(`El valor de base debe ser tipo numerico`);
    if (base !== 10 && base !== 2) return console.error(`La base ${base} no es una base valida`);

    if(base === 10) {
        i = numero;
        binario = [];
        while(i > 0){
            let base2 = i % 2;
            binario.push(base2);
            i = Math.floor(i / 2);
        }
        binario = binario.reverse().join("");
        return console.info(`${numero} base ${base}  =  ${binario} base 2`);
    }
    if(base === 2) {
        let base2 = numero.toString().split("");

        /* Determina si el numero ingresado contiene numeros de entre 2 y 9.
            De ser verdad expReg sera igual a true y si no sera igual a false. */
        expReg = /[2-9]/.test(base2);

        if(expReg === true){
            console.error(`${numero} no es de base 2`);
        }
        else{
            decimal = [];
            base10 = 0;

            for (let i = 0; i < base2.length; i++) {
                exp = 2;
                digito = base2[i] * Math.pow(2, exp);
                decimal.push(digito);
                exp--;
            }

            for(let i = 0; i < decimal.length; i++) {
                base10 = base10 + decimal[i];
            }

            return console.info(`${numero} base ${base}  =  ${base10} base 10`);
        }
    }
}

convertirBase(100,2) // 4

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad
dada, pe. miFuncion(1000, 20) devolverá 800. */

const descuento = (valor = undefined, porcentRebaja = undefined) => {
    if (valor === undefined) return console.warn(`No ingreso un valor`);
    if(typeof valor !== 'number') return console.error(`El valor ingresado no es un numero`);
    if(porcentRebaja === undefined) return console.warn(`No ingreso el porcentaje de descuento`);
    if(typeof porcentRebaja !== 'number') return console.error(`El porcentaje de descuento no es un numero`);

    rebaja = 100 - porcentRebaja;
    montoFinal = (valor * rebaja)/100

    return console.info(`El monto final es: ${montoFinal}`);
}

descuento(1000, 20); // 800


/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día
de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const años = (fecha = undefined) => {
    if (fecha === undefined) return console.warn(`No ingreso la fecha`);
    if (fecha === 'number' || fecha === 'string' || fecha === 'boolean') return console.error(`El tipo de dato ingresado no es el correcto`);

    fechaActual = new Date(); // año actual
    fechaInicial = fecha; // 1984

    fechaFinal = fechaActual.getFullYear() - fechaInicial.getFullYear();

    console.info(`Han transcurrido ${fechaFinal} años desde ${fecha.toDateString()}`);
}

años(new Date(1984,4,23)); // 35