//Ejercicio 1
//Cada vez que una persona ingrese una hora del día 
//se mostrará un mensaje que diga el deporte que se 
//está realizando en la cancha

const prompt = require( 'prompt-sync' )();
//var horaDía = prompt( "Dame la hora: " );
//console.log( horaDía );
/*
if( horaDía <= 3 ){
    console.log( "Está el equipo de Futbol entrenando" );
}
else if( (horaDía > 3) && ( horaDía <= 6 ) ){
    console.log( "Está el equipo de Futbol Americano entrenando" );
}
else if( ( horaDía > 6 ) && ( horaDía <= 9 ) ){
    console.log( "Está el equipo de Atletismo entrenando" );
}


switch( horaDía <= 3 ){
    case true:
        console.log( "Está el equipo de Futbol entrenando" );
        break;
    case false:
        console.log( "Está otro equipo entrenando" );
        break;    
}


//Pedir datos desde pantalla
// nmp install prompt-sync
//const prompt = require( 'prompt-sync' )();
//var nombre = prompt ( "Ingresa tu nombre" );
//console.log( "Hola " + nombre );




//Ejercicio 2
//Cada vez que una persona ingrese un deporte, te dirá
//el horario que le corresponde para la cancha.

var deporte = prompt( "Dime el nombre del deporte: " );
switch( deporte ){
    case "Futbol":
        console.log( "Horario: 1 a 3 PM" );
        break;
    case "Americano":
        console.log( "Horario: 3 a 6 PM" );
        break;
    case "Atletismo":
        console.log( "Horario: 6 a 9 PM");
        break;
}
*/

var arregloNumerico = [ 1, 2, 3, 4, 5 ];
console.log( arregloNumerico );
var arregloNombres = [ "Luis", "Diana", "Omar", "Paola" ];
console.log( arregloNombres );
var arregloMixto = [ 20, 16, , "Luis", , "Paola", true, false ];
console.log( arregloMixto );

console.log( arregloNombres[0] );