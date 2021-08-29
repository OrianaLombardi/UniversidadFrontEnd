let persona= {
    nombre:"Juan",
    apellido:"Perez",
    email:"jperez@gmail.com",
    edad:28,
    idioma:"es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma=lang.toUpperCase();
    },
     get nombreCompleto(){
        return this.nombre+" "+this.apellido;
    }
}

console.log(persona.lang);

persona.lang="en";
console.log(persona.lang);
console.log(persona.idioma);

//metodo get-leer info - al ponerle get no es necesario usar parentesis
//Uppercase para pasarlo a mayusculas
