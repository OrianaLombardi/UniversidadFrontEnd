//llamadas asincronas con uno setTimeout
function miFuncionCallBack(){
    console.log("Saludo asincrono despues de 3 segundos");
}

setTimeout(miFuncionCallBack,3000);//despues de 3 segundos

setTimeout(function(){console.log("Saludo asincrono 2")},4000);

setTimeout(() =>console.log("Saludo asincrono 3"),5000);


