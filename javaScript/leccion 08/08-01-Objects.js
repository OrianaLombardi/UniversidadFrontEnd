//primera forma de crear objetos
let persona= {
    nombre:"Juan",
    apellido:"Perez",
    email:"jperez@gmail.com",
    edad:28,
    //agregar metodo
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    }
}

console.log(persona.nombreCompleto());
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);


//segunda forma de crear objetos

let persona2= new Object();
persona2.nombre="Carlos";
persona2.direccion="Saturno 15";
persona2.tel="2255893";

console.log(persona2.tel);


//otra forma de acceder a las propiedades de los objetos
console.log(persona["apellido"]);

//recorrer las propiedades de un objeto,for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//agregar nuevas propiedades al objeto
persona.tel="5566981";
persona.tel="5598196";//se agregar el ultimo que agregaste
console.log(persona);

//eliminar una propiedad existente
delete persona.tel;
console.log(persona);

