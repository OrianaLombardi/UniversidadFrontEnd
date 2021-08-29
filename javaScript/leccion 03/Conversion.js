let miNumero="18";
//console.log(typeOf miNumero);

let edad=Number(miNumero); //para convertir a numero un string
console.log(edad);


//isNan sirve para saber si es un numero;
if(isNaN(edad)){
    console.log("No es un numero");    
}else{
    if(edad>=18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}



if(isNaN(edad)){
    console.log("No es un numero");    
}else{

let resultado=(edad>=18) ? "Puede votar" : "No puede votar";
console.log(resultado);}

