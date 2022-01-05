// Parametros Rest
function sumar(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n){
        resultado += n;
    });

    return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3, 5));
console.log(sumar(5, 1, 6, 4));

// Operador Spread
const array1 = [1, 2, 3, 4, 5],
    array2 = [6, 7, 8, 9, 10];

console.log(array1, array2);

const array3 = [...array1, ...array2];

console.log(array3);