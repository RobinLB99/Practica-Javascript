let numeros = [0,1,2,3,4,5,6,7,8,9];

/* Break rompera la ejecucion de la extructura de control */
for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numeros[i]);
}

/* continue en el caso de este ciclo, omitira la ejecucion del codigo en esa iteracion del ciclo y continuara con las siguientes */
for (let i = 0; i < numeros.length; i++) {
    if (i === 5){
        continue;
    }
    console.log(numeros[i]);
}