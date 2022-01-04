/* ---------------------------------- Tipos de operadores ------------------------------ */

// Operadores aritmeticos ( + , - , * , /, % ).
    console.log(`*********** Operadores aritmeticos **************`);

    let a =  (5 + 5 - 10) * (0 + 5);
    console.log(`let a =  (5 + 5 - 10) * (0 + 5);`);
    console.log("let a =",a);

    /* Modulo calcula el reciduo de una division */
        let modulo = 5 % 2;
        console.log(`let modulo = 5 % 2;`);
        console.log("let modulo", modulo);

// Operadores relacionales (>, <, >=, <=, ==, ===, !=, !==, !===)
    console.log(` ******* Operadores Relacionales ********* `);

    let b = 5;
    let c = 10;
    let d = 5;

    console.log("let c = 10 > let b = 5 ?", c > b);
    console.log("let b = 5 >= let c = 10 ?", b >= c);
    console.log("let b = 5 >= let d = 5 ?", b >= d);

    /* = -> asignacion de variable. */
        let variable = 1;
        console.log("a let variable se le asigno el valor", variable);

    /* == -> comparacion de valores  -> Se esta conciderando una mala practica*/
        console.log(` Comparacion de valores ( == )`);
        console.log("7 == 7" ,7 == 7);
        console.log("8 == 1", 8 == 1);
        console.log('"7" == 7', "7" == 7);
        console.log('"5" == 7', "5" == 7);
        console.log("0 == false", 0 == false);

    /* === -> comparacion de tipos de datos y valores */
        console.log(`Comparacion de datos y valores ( === )`);
        console.log("7 === 7" ,7 === 7);
        console.log("8 === 1", 8 === 1);
        console.log('"7" === 7', "7" === 7);
        console.log('"5" === 7', "5" === 7);
        console.log("0 === false", 0 === false);
        /* Con triple igual nos aseguramos que estamos reciviendo el tipo de dato que
        queremos recivir */

// Operadores de incremento y decremento
    console.log("***** Operadores de Incremento y decremento ********");
    let i = 1;
    console.log(`let i =`,i);
    i++; //Tambien se puede escribir de esta manera: ++i;
    console.log(`    i++
    i =`, i);

    let e = 9;
    console.log(`let e =`,e);
    e--; // Tambien se puede escribir de esta manera: --e;
    console.log(`    e--
    e =`,e);

    let f = 10;
    console.log(`let f =` ,f);
    f += 10;
    console.log(`    f += 10
    f =`,f);

    let g = 15;
    console.log(`let g =` ,g);
    g -= 5;
    console.log(`    g -= 5
    g =`,g);

// Operadores Logicos (AND - &&, OR - ||, NOT - ! )
    console.log(`*********** Operadores Logicos *************`);

    /* NOT - ! : Lo que es verdadero lo vuleve falso */
    console.log(`operador NOT - !`);

        console.log(`true`);
            console.log(true);

        console.log(`!true`);
            console.log(!true);

        console.log(`false`);
            console.log(false);

        console.log(`!false`);
        console.log(!false);

    /* OR - || : Cuando tengo 2 o mas condiciones,
    se validara siempre y cuando una saea verdadera */
    console.log(`Operador OR - ||`);

        /* Se cumple la primera y valida en true */
        console.log(`(9 === 9) || (9 === "9"), se cumple la primera`);
        console.log((9 === 9) || (9 === "9"));

        /* No se cumple ninguna, entonce falida a false */
        console.log(`(9 === 4) || (9 === "9"), no se cumple ninguna`);
        console.log((9 === 4) || (9 === "9"));

    /* AND - && : Cuando necesitamos que todas nuestras condiciones se cumplan */
    console.log(`Operador AND - &&`);

        /* Se cumple la primera pero no la segunda, entonces valida en false */
        console.log(`(9 === 9) && (9 === "9"), se cumple la primera, pero no la segunda`);
        console.log((9 === 9) && (9 === "9"));

        /* Se cumplen todas, entonces validad en true */
        console.log(`(9 === 9) && ("4" === "4"), se cumplen ambas`);
        console.log((9 === 9) && ("4" === "4"));