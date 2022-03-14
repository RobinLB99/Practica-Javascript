export const numeroPI = Math.PI;

export let usuario = "Robin";
let password = "0944149020";
// export default password;
/* La contantes y valiables se las tienen que esportar despues de su declaracion */

export default function saludar() {
    console.log("Hola modulos +ES6");
}
/* No puedes tener dos objetos exportados de manera default.
    Las funciones son las unicas que se las pueden exportar por default en el momento de su declaracion.*/

export class Saludar{
    constructor(){
        console.log("Hola clases +ES6");
    }
}