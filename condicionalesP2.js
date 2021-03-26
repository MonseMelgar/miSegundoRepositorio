//Ejemplo
//Dado un número, separarlo en centenas, decenas y unidades,
//intercambiar la posición entre centenas y las unidades 
//e imprimir el número final

var numeroCompleto = 738;
if( numeroCompleto <= 999 && numeroCompleto > 99){
    var centenas = parseInt (numeroCompleto / 100);
    //console.log( centenas );
     var decenas = parseInt ( (numeroCompleto % 100) / 10);
    //console.log( decenas );
    var unidades = ( numeroCompleto % 100 ) - ( decenas*10 );
    //console.log( unidades );
    //console.log( "El valor final es: " + unidades  + decenas + centenas );
}
else{
    //console.log( "Ingresa un número de 3 cifras " );
}

//parseInt = convertir un número decimal a un entero

//var resto = 120;
//resultado = 210 % 20;
//console.log( resultado );

//Condicional Switch
var conSwitch = "Luis";
var edad = "18"
switch( conSwitch ){
    case 2:
        console.log("El valor ingresado es: 2");
        break;
    case 6:
        console.log( "El valor ingresado es: 6" );
        break;
    case "Luis":
        console.log( "Hola Luis" );
        if(edad == 18)
            console.log( "Felicidades eres mayor de edad");
            break;
    default:
        console.log( "El valor ingresaoo es distinto" );
        break;
}

