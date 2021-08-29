let persona1={
    nombre:"Juan",
    apellido:"Perez",
    nombreCompleto:function(titulo,tel){
        return titulo + ": "+ this.nombre+ " " + this.apellido + " , " + tel ;
    }
}

let persona2={
    nombre:"Carlos",
    apellido:"Lara"
}

console.log(persona1.nombreCompleto());
//Uso de call para usar metodo persona1.nombreCompleto con los datos de persona2
 //console.log(persona1.nombreCompleto(persona2));
console.log(persona1.nombreCompleto.call(persona2,"Ingeniero", "556639"));


//Uso de apply pero utilizando un arreglo
let arreglo=["Ing", "639741"]
console.log(persona1.nombreCompleto("Lic." , "6628931"));
console.log(persona1.nombreCompleto.apply(persona2,arreglo));