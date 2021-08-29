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


//otra forma de imprimir un objeto
console.log(persona.nombre +" ," +persona.apellido);

    //for in impresion
    for(nombrePropiedad in persona){
        console.log(persona[nombrePropiedad]);   
}

    //objeto impresion
    let personaArray= Object.values(persona);
    console.log(personaArray);

    //metodo JSON
    let personaString=JSON.stringify(persona);
    console.log(personaString);