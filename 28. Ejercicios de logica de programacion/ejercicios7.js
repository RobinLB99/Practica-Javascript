/* 21. Escribe una funcion que dado un array numerico devuelva otro array
con los numero elevados al cuadrado pe. miFuncion([1, 4, 5]) devolvera [1, 16, 25] */

//Mi solucion ------------------------------------------------
    const alCuadrado = (array = []) => {
        if (array.length === 0) return console.warn(`No ingreso un objeto que contenga elementos`);
        if (typeof array !== "object") return console.error(`El tipo de dato ingresado no es un objeto`);

        arrayAlCuadrado = [];
        for (const elemento of array) {
            let newElement = Math.pow(elemento, 2)
            arrayAlCuadrado.push(newElement);
        }
        console.log(arrayAlCuadrado);
    }

    alCuadrado([1, 4, 5])

/* 22. Programa una funcion que dado un array devuelva el numero mas alto y el mas bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolvera [90 , -60] */

// Mi solucion ----------------------------------------------------------------
    function mayorMenor(array = []) {
        if (array.length === 0) return console.warn(`No ingreso un objeto que contenga elementos`);
        if (typeof array !== "object") return console.error(`El tipo de dato ingresado no es un objeto`);

        array.sort(function (a, b) {
            return a - b;
        });
        console.log(array);
    }

    mayorMenor([1, 4, 5, 99, -60])

/* Programa una funcion que dado un array de numeros devuelva un objeto con 2 arreglos en el primero almacena los numeros pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolvera {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

// Mi solucion ---------------------------------------------------------------
    const paresImpares = (array = []) => {
        if (array.length === 0) return console.warn(`No ingreso un objeto que contenga elementos`);
        if (typeof array !== 'object') return console.error(`El parametro ingresado no es un tipo objeto`);

        numPares = [], numImpares = [];

        for (const element of array) {
            (element % 2 === 0)
                ? numPares.push(element)
                : numImpares.push(element)
        }

        const arrayParesImpares = {
            Pares: numPares,
            Impares: numImpares
        }

        console.log(arrayParesImpares);
    }

    paresImpares([1,2,3,4,5,6,7,8,9,0])