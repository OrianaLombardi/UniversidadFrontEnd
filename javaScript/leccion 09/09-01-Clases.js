//no es posible crear objetos antes de la clase el hoisting no se puede aplicar
class Persona{
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }
} 

let persona1=new Persona("Juan", "Perez");
console.log(persona1.nombre);
persona1.nombre="Juan carlos"; //set nombre 
console.log(persona1.nombre);//get nombre


