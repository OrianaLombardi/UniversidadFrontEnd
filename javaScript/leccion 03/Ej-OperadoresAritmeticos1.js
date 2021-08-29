//Ejemplo de AND
let a=5;
let valMin=0,valMax=20;

if(a>=valMin && a<=valMax){
    console.log("Dentro de rango ");
}
else{
    console.log("Fuera de rango ");
}

//Ejemplo de OR
let vacaciones=true, diaDescanso=false;

if(vacaciones==true || diaDescanso==true){
    console.log("El padre puede asistir al juego ");
}
else{
    console.log("El padre esta ocupado ");
}


//------------TERNARIO

let resultado=(3>2) ? "Verdadero" : "Falso";
console.log(resultado);

let numero=100;
resultado=numero%2==0 ? "Es par " : "Es impar";
console.log(resultado); 
