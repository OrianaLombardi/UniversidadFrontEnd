//Funcion constructor de objetos de tipo Persona
function Persona(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto=function(){
        return this.nombre + " " + this.apellido;
    }

}

//Creacion de objetos
let padre= new Persona("Juan", "Perez","jperez@gmail.com");
padre.tel="259893"
console.log(padre.nombreCompleto());
console.log(padre.tel);

let madre= new Persona("Maria","Gutierrez","mgutierrez@gmail.com");
console.log(madre.nombreCompleto());

let miObjeto= new Object();
let miObjeto2={};

let miCadena1=new String("Hola");
let miCadena2= "Hola";

let miNumero=new Number(1);
let miNumero2=1;

let miBoolean=new Boolean(false);
let miBoolean2=false;

let miArreglo1=new Array();
let miArreglo2=[];

let miFuncion=new Function();
let miFuncion2=function(){};



//modificacion del nombre
padre.nombre="Carlos";
console.log(padre);