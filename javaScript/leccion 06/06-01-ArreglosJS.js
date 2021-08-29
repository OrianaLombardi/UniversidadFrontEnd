//let autos = new Array("BMW","Mercedez benz","Volvo");
const autos=["BMW","Mercedes benz","Volvo"];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

//recorrer arreglo
for(let i=0;i<autos.length;i++){
    console.log(i + " : " +autos[i]);
}

//modificar arreglos
autos[1]="MercedesBenz";
console.log(autos[1]);

//agregar nuevos valores
autos.push("Audi");
console.log(autos);

//otra forma de agregar
console.log(autos.length);
autos[autos.length]="Cadillac";
console.log(autos);

//Agregar elementos dejando un valor vacio
autos[6]="Porshe";
console.log(autos);

//como saber si es un arreglo
console.log(Array.isArray(autos));

//otra forma de saber si es arreglo
console.log(autos instanceof Array);