class Persona{
    static contadorObjetosPersona=0; //atributo de nuestra clase
    email="valor default del email";//atributo de nuestros objetos

    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
        Persona.contadorObjetosPersona++;
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
 
    //Sobreescribiendo el metodo de la clase Padre(Object)
    toString(){
        //se aplica polimorfismo(el metodo que se ejecuta depende si es una referencia
        // de tipo padre o de tipo hijo)
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde el metodo static");
    }

    static saludar2(persona){
        console.log(persona.nombre+ " " + persona.apellido);
    }
} 

//Herencia clase Persona
class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre,apellido);//llamar al constructor de la clase padre
        this._departamento=departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        return this._departamento=departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+ ", Dpto:  "+ this._departamento;
    }
}

let persona1= new Persona("Juan", "Perez");
console.log(persona1.toString());

let empleado1=new Empleado("Maria","Selene" , "Ingenieria");
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());


//persona1.saludar(); no es posible llamar un metodo static desde un objeto
//metodos static
Persona.saludar();//solo desde la clase
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//atributos static
console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);

//atributos no static
console.log(persona1.email);
console.log(empleado1.email);



