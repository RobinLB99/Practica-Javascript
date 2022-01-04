/* ------------------------------------- Funciones -------------------------------- */

/* Funcion declarada */

    //Sin parametros ni retorno de valores.
        function funcion(){
            console.log("uno");
            console.log("dos");
            console.log("tres");
        }

    // Parametros para recibir un valor.
        function suma(a, b){
            let c = a + b;
            return c;
            /*
            return a + b;
            */ 
            /* La funcion se ejecuta hasta el return. Despues del return no se ejecuta otra
            linea de codigo */
        } 

        /* Tambien puedo declarar un valor por defecto a los parametros para cuando no
            no se envie un parametro al momento de invocarla */ 
        function saludar(nombre = "Desconocido", edad = 0){
            console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
        }
        
        // Funcion anonima

        /* expresada(); - 
        Este tipo de funcion no se puede invocar antes de serinicializada.*/
        const expresada = function(){
            console.log(`Funcion declarada como una constante. Esta se puede invocar como cualquier otra funcion, por ejemplo: expresada();, pero no antes de la linea donde se inicializa`);
        }


/* Invocacion de Funcion */

    // No se le envia parametros ni retorna valores.
    funcion();

    // Se envia parametros y retorna un valor
    console.log("El valor retornado por la funcion suma es: ", suma(5,2));

    saludar("Robin", 22);
    saludar();
    
    expresada(); 
    /* NO se puede invocar antes de las lineas de donde se declara, ya que se declaro 
    como una constante, donde estas se len deacuerdo al orden en el que estan escritas */
   
/* Existen dos formas de crear una funcion: 
    * funcion declarada:
        function nombreDeLaFuncion(){};
    
    * Funcion asignada:
        const nombreDeLaFuncion = function(){};
*/