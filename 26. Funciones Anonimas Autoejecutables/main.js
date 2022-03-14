// Funciones anonimas autoejecutables

(function (d, w, c){

    console.log("mi primera funcion anonima autoejecutada");

    console.log(d); // #document

    console.log(w); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

    console.log(c); // console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

})(document, window, console);

(function (){
    console.log("mi segunda funcion anonima autoejecutada");
})();

/* Versiones de escritura de una funcion anonima autoejecutable */
    // Version clasica
    (function (){
        console.log("Version clasica");
    })();

    // Version Crockford (Javascript The Good Parts)
    ((function (){
        console.log("version Crockford");
    })());

    // Version Unaria
    +function () {
        console.log("Unaria");
    }();

    // Version Facebook
    !function () {
        console.log("Facebook");
    }();