

mes(5);

function mes(numeroMes){
    switch(numeroMes){
        case 1:
            console.log("Enero");
        break;
        case 2:
            console.log("Febrero");
        break;
        case 3:
            console.log("Marzo");
        break;
        case 4:
        console.log("Abril");
        break;
        case 5:
        console.log("Mayo");
        break;
        case 6:
        console.log("Junio");
        break;
        case 7:
        console.log("Julio");
        break;
        case 8:
        console.log("Agosto");
        break;
        case 9:
        console.log("Septiembre");
        break;
        case 10:
        console.log("Octubre");
        break;
        case 11:
        console.log("Noviembre");
        break;
        case 12:
        console.log("Diciembre");
        break;
        default:
            return alert("ERROR; EL NÚMERO DEBE ESTAR ENTRE 1 Y 12.");
            break;
    }
}

let stringanumero= "2";
switch(stringanumero){
    case "1":
        console.log(Number("1"));
        break;
    case "2":
        console.log(Number("2"));
        break;
    case "3":
        console.log(Number("3"));
        break;
    case "4":
        console.log(Number("4"));
        break;
    case "5":
        console.log(Number("5"));
        break;
    default:
        console.log("No deberías estar aquí");
        break;
}