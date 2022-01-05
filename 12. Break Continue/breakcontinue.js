let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/* Break rompera la extructura de control. En el caso de este ciclo, al llegar a la posicion 5 del arreglo bloque dejara todo el ciclo dejara de ejecutarse. */
for (var i = 0; i < numeros.length; i++){
    if (i === 5){
        break;
    }
    console.log(numeros[i]);
}

/* Continue. En el caso de ciclo, al llegar a la posicion 5 omitira la ejecucion del bloque en esa iteracion del ciclo y continuara a la siguiente. */
for (var i = 0; i < numeros.length; i){
    if (i === 4){
        continue;
    }
    console.log(numeros[i]);
}