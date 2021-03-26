//Ciclos - while
var contadorN1 = 5;
var contadorN2 = 30;
while( contadorN1 < 10 && contadorN2 > 25 ){
    console.log( "ContadorN1: " + contadorN1 +
     " ContadorN2: " + contadorN2);
    contadorN1++;
    contadorN2--;
};

var contadorN3 = 0;
var condicion = "Hola"
//Ciclos - do-while
do{
    console.log( "Entraste al ciclo do while" );
    contadorN3++;
    if( contadorN3 == 2 ){
        condicion = "Adios"
    }
}while( condicion == "Hola" );

var condicionN2 = 5
do{
    console.log( "Valor: " + condicionN2 );
    condicionN2 -= 5;
}while( condicionN2 >= 5 );


//Ejercicio do-while
//Crear un programa que lea tantos números
//como se requiera hasta que se reciba un cero,
//y se mostrará un resultado, que será la 
//suma de todos los números ingresados
const prompt = require('prompt-sync')();
var recibeNumero;
var suma = 0
do{
    //Recibimos un texto
    recibeNumero = prompt( "Dame un numero: " );
    suma = suma + parseInt( recibeNumero );
}while( recibeNumero != 0 );
console.log( "La suma total es: " + suma );

while( recibeNumero != 0 ){
    recibeNumero = prompt( "Dame un numero: " );
    suma = suma + parseInt(recibeNumero);
}

//Ejercicio - while
recibeNumero = prompt( "Dame un número " );
while( recibeNumero != 0){
    suma = suma + parseInt( recibeNumero );
    recibeNumero = prompt( "Dame un número " );
}
console.log( "La suma total con while es: " + suma );

 