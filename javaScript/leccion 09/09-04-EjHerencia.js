class Persona{
    static contadorPersonas=0; 

    constructor(nombre,apellido,edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._idPersona=++Persona.contadorPersonas;
        this._edad=edad;
    
    }

    get idPersona(){
        return this.idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad=edad;
    }

    toString(){
        return this._idPersona+
        " , "+  this._nombre+
         " " + this._apellido + " ,edad: "+ this._edad;
    }


}
class Empleado extends Persona{
    static contadorEmpleados=0; 

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo=sueldo;
        this._idEmpleado=++Empleado.contadorEmpleados;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo=sueldo;
    }

    toString(){
        return super.toString() + " sueldo:  " +this.sueldo + " , id Empleado:" + this._idEmpleado;
    }

}

class Cliente extends Persona{
    static contadorClientes=0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._fechaRegistro=fechaRegistro;
        this._idCliente=++Cliente.contadorClientes;
    }


    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }


    set fechaRegistro(fechaRegistro){
        this._fechaRegistro=fechaRegistro;
    }

    toString(){
        return  super.toString() + " fecha registro: " +this._fechaRegistro + " , id Cliente: "+ this._idCliente;
    }
}


//prueba clase persona

let persona1=new Persona("Juan ", "Perez ",25);
console.log(persona1.toString());
let persona2=new Persona("Julio ", "Ruiz ",35);
console.log(persona2.toString());

let empleado1=new Empleado("carla","gomez",25,5000);
console.log(empleado1.toString());
let empleado2=new Empleado("laura","quintero",30,8000);
console.log(empleado2.toString());

let cliente1=new Cliente("Miguel", "Lilo", 41, new Date());
console.log(cliente1.toString());

let cliente2=new Cliente("Angela", "Leiva", 26, new Date());
console.log(cliente2.toString());