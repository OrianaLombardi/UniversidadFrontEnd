class Producto{
    static contadorProductos=0;

    constructor(nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
        this._idProducto=++Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        this._precio=precio;
    }

    set precio(precio){
        this._precio=precio;
    }

    toString(){
        return `
        idProducto: ${this._idProducto}
        Nombre: ${this.nombre}
        Precio: $ ${this._precio}
        ------`;
    }
}


class Orden{
    static contadorOrdenes=0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._productos=[];
        //this._contadorProductosAgregados=0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length<Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos(this._contadorProductosAgregados++)=productos;
        }
        else{
            console.log("No se puede agregar mas productos");
        }
    }

    calcularTotal(){
        let totalVenta=0;
        for(let producto of this._productos){
            totalVenta+=producto._precio; //totalVenta=totalVenta+producto.precio
        }
        return totalVenta;
    }


    mostrarOrden(){
        let productosOrden=" ";
        for(let producto of this._productos){
            productosOrden += producto.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden} 
        Total: ${this.calcularTotal()}
        --------------------
        Productos:${productosOrden}`);
    }



}








let producto1=new Producto("Jeans", 2000);
let producto2=new Producto("Camisa", 6000);

let orden1=new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();


let orden2=new Orden();
let producto3=new Producto("Cinturon", 95);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);

orden2.mostrarOrden();

