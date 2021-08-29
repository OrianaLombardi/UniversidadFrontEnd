"use strict"

try{
    let x=15;
    //miFuncion();
    throw "mi error";

}
catch(error){
console.log(error);
}
finally{
console.log("Termina la revision de errores");
}
 
console.log("continuamos...");


let resultado=" ";

try{
    //x=10;
    if(isNaN(resultado))throw "No es un numero";
    else if(resultado===" ")throw "Es cadena vacia";
    else if(resultado>=0)throw "Valor positivo";
    else if(resultado<0)throw "Valor negativo";
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}