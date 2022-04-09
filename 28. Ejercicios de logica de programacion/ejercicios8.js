/* 24. Programa una funcion que dado un arreglo de numeros devuelta un objeto
con dos arreglos, el primero tendra los numeros ordenados acendente y el otro
de forma descenciente, pe. miFuncion([7,5,7,8,6]) devolvera {asc: [5,6,7,7,8],
desc: [8,7,7,6,5]} */

// Mi solucion --------------------------------------------
    const ordenar = (array = undefined) => {
        if (array === undefined) return console.warn('No ingresaste un arreglo de numeros');
        if (typeof array !== 'object') return console.error('El parametro ingresado debe ser un arreglo')
        if (array.length === 0) return console.warn('El array esta vacio');
        for (const elemento of array) {
            if (typeof elemento !== "number") return console.error('El array contiene un elemento invalido')
        }

        const ordenado = {
            asc: ascendente = [],
            desc: descendiente = []
        }

        for (const elemento of array) {
            ascendente.push(elemento)
            descendiente.push(elemento)
        }

        ascendente.sort(function (a, b) {
            return a - b;
        })

        descendiente.sort(function (a, b) {
            return b - a;
        })

        console.log(ordenado);
    }

    ordenar([7,5,7,8,6])

// Solucion jonmircha -------------------------------------
const ordenarArreglo = (array = undefined) => {
    if (array === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if (!(array instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');
    if (array.length === 0) return console.error('El arreglo esta vacio');
    for (const elemento of array) {
        if (typeof elemento !== "number") return console.error('El array contiene un elemento invalido')
    }

    return console.info(
        {
            array,
            asc: array.map(elemento => elemento).sort(),
            desc:array.map(elemento => elemento).sort().reverse()
        }
    )
}

ordenarArreglo([7,5,7,8,6])

/* 25. Programa una funcion que dado un arreglo de elementos, elimine los
duplicados, pe. miFuncion(["x",10,"x",2,"10",10,true,true]) devolvera
["x",10,2,"10",true] */

// Solucion jonmircha -------------------------------------------------
const eliminarRepetidos = (array = undefined) => {
    if (array === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if (!(array instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');
    if (array.length === 0) return console.error('El arreglo esta vacio');
    if (array.length < 2) return console.error('El arreglo debe contener dos o mas elementos');

    /*return console.info(
        {
            original: array,
            sinDuplicados: array.filter((value, index, self) => self.indexOf(value) === index)
        }
    )*/
    return console.info(
        {
            original: array,
            sinDuplicados: [...new Set(array)]
        }
    )
}

eliminarRepetidos(["x",10,"x",2,"10",10,true,true])

/* 26. Programa una funcion que dado un arreglo de numeros obtenga el promedio,
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolvera 4.5 */

// Mi solucion ------------------------------------------
    const promedio = (array = undefined) => {
        if (array === undefined) return console.warn('No ingresaste un arreglo de numeros');
        if (typeof array !== 'object') return console.error('El parametro ingresado no es un array');
        if(array.length === 0) return console.error('El array esta vacio');
        for (const elemento of array) {
            if (typeof elemento !== "number") return console.error('El array contiene un elemento invalido')
        }

        suma = 0

        for (const elemento of array) {
            suma += elemento
        }

        console.log(`El promedio del arreglo es: ${suma/array.length}`);
    }

    promedio([9,8,7,6,5,4,3,2,1,0])

// Solucion jonmircha ----------------------------------------
    const promedioDeArreglo = (array) => {
        if (array === undefined) return console.warn('No ingresaste un arreglo de numeros');
        if (typeof array !== 'object') return console.error('El parametro ingresado no es un array');
        if(array.length === 0) return console.error('El array esta vacio');
        for (const elemento of array) {
            if (typeof elemento !== "number") return console.error('El array contiene un elemento invalido')
        }

        return console.info(
            array.reduce((total, numero, index, array) => {
                total += numero;
                if (index === array.length - 1) {
                    return `El promedio de ${array.join("+")} es: ${total/array.length}`
                }
                else{
                    return total;
                }
            })
        )
    }

    promedioDeArreglo([9,8,7,6,5,4,3,2,1,0])