//Palabra BREAK
inicio:
for(let contador=0;contador<=10;contador++){
    if(contador%2==0){
        console.log("El numero "+ contador + " es par");
        break inicio; //para que aparezca solo el primer numero par 
    }
}

//OTRA FORMA DE HACERLO
let contador=0;
while(contador<=10){
    contador++;
    if(contador%2==0){
        console.log(contador);
        
    }
}

//palabra CONTINUE y ETIQUETAS LABELS

inicio:
for(let contadorr=0; contadorr<=10;contadorr++){
    if(contadorr%2!==0){
        continue inicio; //ir a la siguente iteracion
    }
    console.log(contadorr); 
}


console.log("Fin del ciclo for");