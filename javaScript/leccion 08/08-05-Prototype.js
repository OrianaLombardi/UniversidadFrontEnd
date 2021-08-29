//Funcion constructor de objetos de tipo Persona
function Persona(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto=function(){
        return this.nombre + " " + this.apellido;
    }

}

//PROTOTYPE :Para modificar metodos o atributos asociados a un objeto
Persona.prototype.tel="458893";


//Creacion de objetos
let padre= new Persona("Juan", "Perez","jperez@gmail.com");
padre.tel="5893644";
console.log(padre.tel);

let madre= new Persona("Maria","Gutierrez","mgutierrez@gmail.com");
console.log(madre.nombreCompleto());
console.log(madre.tel);