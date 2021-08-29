class Persona{
    static contadorPersona=0; 

    static get MAX_OBJ(){
        return 5;
    }
   
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
        
        if(Persona.contadorPersona<Persona.MAX_OBJ){
            this.idPersona=++Persona.contadorPersona;
        }
        else{
            console.log("Se han superado el max de objetos");
        }
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
        return this._apellido=apellido;
    }

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
 
   
    toString(){
        return this.idPersona + " " +this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde el metodo static");
    }

    static saludar2(persona){
        console.log(persona.nombre+ " " + persona.apellido);
    }
} 


class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre,apellido);
        this._departamento=departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        return this._departamento=departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto()+ ", Dpto:  "+ this._departamento;
    }
}

let persona1= new Persona("Juan", "Perez");
console.log(persona1.toString());

let empleado1=new Empleado("Maria","Selene" , "Ingenieria");
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

let persona2=new Persona("CARLA", "RAMIREZ");
console.log(persona2.toString());

console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ=10;
console.log(Persona.MAX_OBJ);

let persona3=new Persona("Mariano", "RAMIREZ");
let persona4=new Persona("Julio", "RAMIREZ");
let persona5=new Persona("Tulio", "RAMIREZ");




