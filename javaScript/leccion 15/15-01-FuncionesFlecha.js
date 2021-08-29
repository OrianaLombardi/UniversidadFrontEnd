let miFuncion=function (){
    console.log("Mi funcion");
}

/*let miFuncionFlecha= () =>{
    console.log("Mi funcion flecha");
}*/

//const miFuncionFlecha=()=> console.log("Mi funcion flecha");


//miFuncionFlecha();// no se aplica hoisting 

/*const saludar=() =>{
    return "Saludos desde funcion flecha";
}*/

const saludar=() => "Saludos desde funcion flecha";

console.log(saludar());

const regresaObjeto= ()=>({nombre: "Juan",apellido:"Lara"});
console.log(regresaObjeto());


const funcionParametros=function(mensaje){
    console.log(mensaje);
}

//const funcionParametros=(mensaje) =>console.log(mensaje);
funcionParametros("SALUDOS");



//const funcionConParametros=(op1,op2)=>op1+op2;
const funcionConParametros=(op1,op2)=>{
    let resultado=op1+op2;
    return resultado;
};
console.log(funcionConParametros(15,10));