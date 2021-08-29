//Hoisting
miFuncion(4,2);

//declaracion de funcion
function miFuncion(a,b){
    console.log(arguments.length);
    return a+b;
}

//llamando a la funcion
let resultado=miFuncion(15,3);
console.log(resultado);


//declaracion funcion de tipo expresion
let sumar= function (a=8,b=15){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a+b+arguments[2]
};

resultado=sumar(5,4,8);
console.log(resultado);


//Funcion de tipo  self invoking se usa para llamar a si misma y no puede ser reutilizada
(function(a,b){
    console.log("Ejecutando la funcion: "+ (a+b));
})(6,9);

//CONVERTIR NUESTRA FUNCION A TEXTO
var miFuncionTexto=miFuncion.toString();
console.log(miFuncionTexto);


//Declaracion de funcion de tipo Flecha
const sumarFuncion= (a,b)=> a+b;
resultado=sumarFuncion(15,25);
console.log(resultado);
