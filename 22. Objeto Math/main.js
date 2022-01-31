/* Objeto Math */
console.log(Math);

/*El numero PI */
    console.log(Math.PI);
    // 3.141592653589793

/* Math.abs() - devuelve el valor absoluto */
    console.log(Math.abs(-7.2)); // 7.2
    console.log(Math.abs(8.2)); // 8.4

// Metodos para redpndear
    /*Math.ceil() - va a redondear al numero entero posterior inmediato */
    console.log(Math.ceil(7.2)); // 8
    console.log(Math.ceil(6.8)); // 7

    /* Math.floor() - va a redondear al numero entero anterior inmediato*/
    console.log(Math.floor(8.2)); // 8
    console.log(Math.floor(9.8)); // 9

    /* Math.round() - va a redondear al numero entero mas cercano inmediato */
    console.log(Math.round(8.2)); // 8
    console.log(Math.round(8.49)); // 8
    console.log(Math.round(8.6)); // 9
    console.log(Math.round(8.5)); // 9

/* Math.sqrt() - metodo para calcular raices cuadradas */
    console.log(Math.sqrt(81)); // 9
    console.log(Math.sqrt(9)); // 3

/* Math.pow(b, exp) - metodo para calcular potencias */
    console.log(Math.pow(5,3)); // 125

/* Math.sign() - devuelve un numero dependiendo si es negativo, positivo o 0 */
    // positivo
    console.log(Math.sign(5)); // 1
    console.log(Math.sign(0.1)); // 1
    // Negativo
    console.log(Math.sign(-5)); // -1
    console.log(Math.sign(-0.1)); // -1
    // Cero
    console.log(Math.sign(0)); // 0

/* Math.random() - va a dar un valor aleatorio entre 0 y 1 */
    console.log(Math.random());
    /* Numero aleatorio entre 0 y 1000 */
        console.log(Math.round(Math.random()*1000));