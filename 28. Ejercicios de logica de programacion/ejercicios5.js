/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */




/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

const descuento = (valor = undefined, porcentRebaja = undefined) => {
    if (valor === undefined) return console.warn(`No ingreso un valor`);
    if(typeof valor !== 'number') return console.error(`El valor ingresado no es un numero`);
    if(porcentRebaja === undefined) return console.warn(`No ingreso el porcentaje de descuento`);
    if(typeof porcentRebaja !== 'number') return console.error(`El porcentaje de descuento no es un numero`);

    rebaja = 100 - porcentRebaja;
    montoFinal = (valor * rebaja)/100

    return console.info(`El monto final es: ${montoFinal}`);
}

descuento(1000, 20);


/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const años = (fecha = undefined) => {
    if (fecha === undefined) return console.warn(`No ingreso la fecha`);
    if (fecha === 'number' || fecha === 'string' || fecha === 'boolean') return console.error(`El tipo de dato ingresado no es el correcto`);

    fechaActual = new Date(); // año actual
    fechaInicial = fecha; // 1984

    fechaFinal = fechaActual.getFullYear() - fechaInicial.getFullYear();

    console.info(`Han transcurrido ${fechaFinal} años desde ${fecha.toDateString()}`);
}

años(new Date(1984,4,23));