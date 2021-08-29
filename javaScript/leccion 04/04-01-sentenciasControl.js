let condicion=false;

if(2>4){ //sin llaves si solo tenes una linea en la sentencia if/else
console.log("Condicion verdadera");
}
else{
console.log("Condicion false");
}


//-------------------
let numero=2;

if(numero==1){
    console.log("Numero 1");
}
else if(numero==2){
    console.log("Numero 2");
}
else if(numero==3){
    console.log("Numero 3");
}
else if(numero==4){
    console.log("Numero 4");
}
else{
    console.log("Numero desconocido");
}

//---------------
let mes=12;
let estacion;

if(mes==1 || mes==2 ||mes==12 ){
    estacion="Invierno";
}
else if(mes==3 || mes==4 ||mes==5){
    estacion="Primavera";
}
else if(mes==6 || mes==7 || mes==8){
    estacion="Verano";
}
else if(mes==9 || mes==10 ||mes==11){
    estacion="Otoño";
}
else{
    estacion="Incorrecto";
}

console.log(estacion);