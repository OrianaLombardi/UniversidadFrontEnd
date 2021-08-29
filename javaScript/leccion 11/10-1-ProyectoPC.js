class dispositivoEntrada{

    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca=marca;
    }

    toString(){
        return `Marca:${this._marca}, tipo Entrada: ${this._tipoEntrada} `;
    }
}

class Raton extends dispositivoEntrada{
static contadorRatones=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton=++Raton.contadorRatones;
    }

    toString(){
        return `
        Raton
        ------
        IDRaton: ${this._idRaton},
        Tipo Entrada: ${this._tipoEntrada},
        Marca: ${this._marca}
        `; 
    }
}

class Teclado extends dispositivoEntrada{
    static contadorTeclados=0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado=++Teclado.contadorTeclados;
    }

    toString(){
        return `
        Teclado
        ---------
        IDTeclado: ${this._idTeclado},
        Tipo Entrada: ${this._tipoEntrada},
        Marca: ${this._marca}    `;
    }
}

class Monitor{
    static contadorMonitores=0;

    constructor(marca, tamaño){
        this._marca=marca;
        this._tamaño=tamaño;
        this._idMonitor=++Monitor.contadorMonitores;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca=marca;
    }

    get tamaño(){
       return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño=tamaño;
    }

    toString(){
        return `
        Monitor
        --------
        IDMonitor: ${this._idMonitor},
        tamaño ${this._tamaño},
        marca ${this._marca} `;
    }


}

class Computadora{
   static contadorComputadoras=0;
    constructor(nombre,monitor,raton,teclado){
        this._raton=raton;
        this._monitor=monitor;
        this._idComputadora=++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._teclado=teclado;
    }

    
    get raton(){
        return this._raton;
    }

    set raton(raton){
        this._raton=raton;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        this._teclado=teclado;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){
        this._monitor=monitor;
    }

    get idComputadoras(){
        return this._idComputadora;
    }

    toString(){
        return `
        IDComputadora: ${this._idComputadora},
        Nombre: ${this._nombre},
        ${this._monitor},
        ${this._teclado},
        ${this._raton}
        `;
            
    }

}




class Orden{
    static contadorOrdenes=0;

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden=" ";
        for(let computadora of this._computadoras){
            computadorasOrden+=computadora.toString();
        }
        console.log(`Orden: ${this._idOrden} 
        --------------------
        Productos:${computadorasOrden}`);
    }

}

let raton=new Raton("USB", "Hyperx");
console.log(raton.toString());
let raton1=new Raton("USB", "Redragon");
console.log(raton1.toString());
let teclado=new Teclado("USB", "HP");
console.log(teclado.toString());
let teclado1=new Teclado("Bluetooh", "Noga");
console.log(teclado1.toString());
let monitor=new Monitor("LG",20);
let monitor1=new Monitor("Samsung",19);
console.log(monitor.toString());
console.log(monitor1.toString());
let computadora=new Computadora("Pc Gamer",monitor,raton,teclado);
let computadora1=new Computadora("Pc Gamer",monitor1,raton1,teclado1);
console.log(computadora.toString());
console.log(computadora1.toString());

let orden=new Orden();
orden.agregarComputadora(computadora);
orden.mostrarOrden();
let orden1=new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();



