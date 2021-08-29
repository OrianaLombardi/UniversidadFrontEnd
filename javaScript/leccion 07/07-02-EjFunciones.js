//sumar todos los argumentos
let resultado=sumarTodo(5,4,13,10,9,25);
console.log(resultado);

function sumarTodo(){
    let suma=0;
    for(let i=0;i<arguments.length;i++){
        suma += arguments[i]; //suma=suma+arguments[i]
    }
    return suma;
}

//----------------------
//Tipos primitivos
let x=10; 

function cambiarValor(a){
    a=20;
}

//paso x valor- no podemos cambiar el valor de la variable aunque hayamos pasado por fuera del metodo ya que es un tipo primitivo y no tiene metodos ni atributos

cambiarValor(x); //10
console.log(x);
//console.log(a);



//-----------------
//Creando objeto 
const persona= {
    nombre:"Juan",
    apellido: "Perez"
}

function cambiarValorObjeto(p1){
    p1.nombre="Carlos";
    p1.apellido="Lara";
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);
