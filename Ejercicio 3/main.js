var string;
string="Esto es un string";
console.log(string);
console.log(typeof string);
var number;
number=1234;
console.log(number);
console.log(typeof number);
var boolean;
boolean=false;
console.log(boolean);
console.log(typeof boolean);
var _null;
_null=null;
console.log(_null);
console.log(typeof _null);
var undefined;
console.log(undefined);
console.log(typeof undefined);
var symbol;
symbol="Esto es symbol";
console.log(symbol);
console.log(typeof symbol);
var object;
object={descripcion: 'Esto es un objeto', continua:'PRUEBA'};
console.log(object);
console.log(typeof Object);
console.table(object)
{
    let letlocal="Let LOCAL"
    console.log(typeof letlocal);
}
console.log(typeof letlocal);

function saludar(nombre, apellidos){
    console.log("Te saludo desde esta función: "+nombre + " " + apellidos);
}

saludar("Antonio Jesús", "Gómez Villén");

