let horario=5;
let buenas;

if(horario>=6 && horario<=11){
        buenas="Buenos dias";
    }
else if(horario>=12 && horario <=18){
        buenas="Buenas tardes";
    }
else if(horario>=19 && horario<=24){
        buenas="Buenas noches";
    } 
else if(horario>=0 && horario<6){
        buenas="Durmiendo";
    }
else{
    buenas="Valor incorrecto";
}

console.log(buenas);