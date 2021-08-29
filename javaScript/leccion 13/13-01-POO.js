class Empleado{

    constructor(nombre,sueldo){
        this._nombre=nombre;
        this._sueldo=sueldo;
    }

    obtenerDetalles(){
        return `
        Empleado:
        Nombre: ${this._nombre},
        Sueldo: $${this._sueldo}
        `;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento=departamento;
    }

    obtenerDetalles(){
        return `
        Gerente:
        ${super.obtenerDetalles()}
        Depto: ${this._departamento}`;
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo._departamento);
    }

    else if(tipo instanceof Empleado){
        console.log("Es un tipo empleado");
        console.log(tipo._departamento);
    }

    else if(tipo instanceof Object){
        console.log("Es un tipo Object");
    }
}

let empleado1=new Empleado("Juan",3000);
let gerente=new Gerente("Carla",5000,"Sistemas");


determinarTipo(empleado1);
determinarTipo(gerente);



