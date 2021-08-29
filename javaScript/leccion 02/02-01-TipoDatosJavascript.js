/* Ejemplos de tipo de dato de JS*/
//Tipo de dato string
var nombre="Carlos";
console.log(typeof nombre);

nombre=10.5;
console.log(typeof nombre);


//Tipo de dato numerico
var numero=15;
console.log(numero);


//Tipo de dato objeto
var objeto={
    nombre: "Juan",
    apellido:"Perez",
    edad:25
}
console.log( objeto);

//Tipo de dato boolean(true,false)

var bandera=false;
console.log(bandera);

//tipo de dato function
function miFuncion(/*INFORMACION DE LO Q RECIBE LA FUNCION*/){/*CODIGO*/}
console.log(miFuncion);

//Tipo de dato symbol
var simbolo= Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(Persona);


//Tipo de dato undefined
var x;
console.log(x);

x=undefined;
console.log(x);

//null=ausencia de valor
var y=null;
console.log(typeof y);


var autos=["bmw","audi","volvo"];
console.log(autos);


var z="";
console.log(z);