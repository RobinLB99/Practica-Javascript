/* Constructor Date() - Nos da la fecha y hora actual */

console.log("Date() - Fecha, hora y uso horario: ", Date());
// dayWeek month dayMonth year h:min:sgs usoHorario

let fecha = new Date();
console.log(fecha);

/* getDate() - Para utilizar el dia del mes */
    console.log("getDate(), dia del mes:", fecha.getDate()); // dayMonth: num

/*
getDay() - Nos da el dia de la semana, como una posicion de un arreglo donde domingo empieza en 0:
    pos0 = domingo
    pos1 = lunes
    pos2 = martes
    pos3 = miercoles
    pos4 = jueves
    pos5 = viernes
    pos6 = sabado
*/
    console.log("getDay(), dia de la semana:", fecha.getDay()); // dayWeek: num

/* getMonth() - Nos da el mes como posicion de un arreglo
    0 = enero
    1 = febrero
    2 = marzo
    3 = abril
    4 = marzo
    etc...
*/

    console.log("getMonth(), mes:", fecha.getMonth()); // dayMonth: num

/* Para obtener el año */
    // getYear() - Los años que han pasado desde el año 1900
    console.log("getYear(), años desde 1900:", fecha.getYear()); // 12x

    // getFullYear() - Año actual
    console.log("getFullYear(), año actual", fecha.getFullYear()); // 202x

// getHours() - para obtener la hora
    console.log("getHours(), hora:", fecha.getHours());

// getMinutes() - para obtener los minutos
    console.log("getMinutes(), minuto:", fecha.getMinutes());

// getSeconds() - para obtener los segundos
    console.log("getSeconds(), segundo:", fecha.getSeconds());

// getMilliseconds() - para obtener los milisegundos
    console.log("getMilliseconds(), milisegundos:", fecha.getMilliseconds());

// toString() - Obtiene los datos de Date()
    console.log("toString():",fecha.toString());

// toDateString() - Obtiene los los datos con realcion a la fehca de Date()
    console.log("toDateString():",fecha.toDateString());

// toLocaleString() - nos da los datos referente a la fecha y hora de manera mas humana.
    console.log("toLocaleString():",fecha.toLocaleString());

// toLocaleDateString() - nos da los datos solo referente a la fecha de manera mas humana.
    console.log("toLocaleDateString():",fecha.toLocaleDateString());

// toLocaleTimeString() - nos da los datos solo referente a la hora
    console.log("toLocaleTimeString():",fecha.toLocaleTimeString());

// getTimezoneOffset() - nos los datos con referente al uso horario en minutos
    console.log(`getTimezoneOffset()
    minutos de diferencia con el meridiano 0:`,fecha.getTimezoneOffset());

// getUTC...() - nos dan los datos del meridiano 0
    console.log("getUTCDate() dia:",fecha.getUTCDate());
    console.log("getUTCMonth() mes:",fecha.getUTCMonth());
    console.log("getUTCHours(): hora:",fecha.getUTCHours());
    console.log("getUTCMinutes() minuto:",fecha.getUTCMinutes());
    console.log("getUTCSeconds() segundo:",fecha.getUTCSeconds());
    console.log("getUTCMilliseconds():",fecha.getUTCMilliseconds());

// Date.now() - Indica los segundos que han pasado desde 1 de enero de 1970
    console.log("Date.now() - Miliegundos desde el 1 de enero de 1970:", Date.now());

// Ejemplo - mi fecha de cumpleaños new Date(año, mes(posicion en arreglo), dia)
    const cumpleañosJoel = new Date(1999,10,2);
    console.log(cumpleañosJoel);
    console.log(cumpleañosJoel.toLocaleDateString());