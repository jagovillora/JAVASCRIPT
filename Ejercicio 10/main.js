//1
let cadena="supercalifrAgilisticoespialidoso";
reemplazo(cadena);
function reemplazo(cadena){


    for(let recorro=0;recorro<=cadena.length; recorro++){
        cadena = cadena.replace("a","o");
        cadena = cadena.replace("A","O");
    }
    
    console.log(cadena);

}

//2

function comprobar(textoacomprobar){

console.log(textoacomprobar.startsWith("aca"));

}

comprobar("academia");
comprobar("escuela");


//3

function saludoTriple(){
    console.log("hola".repeat(3));
}
saludoTriple();
