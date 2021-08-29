function miFuncion1(){
    console.log("Funcion1");
}

function miFuncion2(){
    console.log("Funcion2");
}

miFuncion1();
miFuncion2();

//funcion de tipo callback
function  imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,funcionCallback){
let resultado=op1+op2;
funcionCallback("Resultado:"+ resultado);
}

sumar(5,8,imprimir);

