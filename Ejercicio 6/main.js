function suma(a,b,c){
    let resultado=a+b+c;
    return resultado;
}

console.log("El resultado de la suma es: "+ suma(3,5,5));

function concatenarNombre(nombre, apellido1, apellido2){
    let concatenado= nombre+" "+apellido1+" "+apellido2
    return concatenado;
}
console.log(concatenarNombre("Antonio Jesús", "Gómez", "Villén"));

function aceptarNumeros(d,e){
    if(d>e){
        return d;
    }else{
        if(d<e){
            return e;
        }else{
            return "Ambos son iguales."
        }
    }
}

console.log(aceptarNumeros(10,9));

