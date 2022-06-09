const arrowFuncion = (nombre, apellidos)=>{
    nombre=nombre+apellidos;
    return nombre;
}
console.log(arrowFuncion("Antonio Jesús","Gómez Villén"));

let verdadFalso=true;
function segundo(verdadFalso){
    console.log(verdadFalso);
}

function tercero(...parametro){
    parametro.forEach(Element=>{
        console.log(Element)
    });
}
tercero(1,2,3,4,5);

