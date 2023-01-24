


function Producto (nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock || 0;
}

let producto1 = new Producto ("bacha artesanal", 4850, 5)

let producto2 = new Producto ("jarrita acqua", 1200, 20)

let producto3 = new Producto ("jarrón rubí", 3300, 25)

let producto4 = new Producto ("cuenco acqua", 1300, 30)

let producto5 = new Producto ("ensaladera mar", 2800, 20)

let precioTotal = 0

let listaProductos = [producto1 , producto2, producto3, producto4, producto5] 

let listaNombres = []


for (const producto of listaProductos){
  listaNombres.push(producto.nombre) 
}

function saludo (){
  alert ("Gracias por ingresar a Magia Blanca!")
}

saludo();

alert ("Aquí podra adquirir los siguientes productos: \n - " + listaProductos.join("\n - "))
  

let cantidadCompra = prompt ("Cuantos productos desea adquirir?")

for(let i = 0; i < cantidadCompra; i = i + 1){
  let productoCompra = prompt("Que producto desea comprar?: \n - Bacha Artesanal \n - Jarrita Acqua \n - Jarrón Rubí \n - Cuenco Acqua \n - Ensaladera Mar \n - Salir"  )

if (productoCompra == "Salir"){
   break
}

if (productoCompra == Producto){

  let cantidadProducto = prompt("Ingrese que cantidad de " + Producto + " desea comprar:")
  if (cantidadProducto <= Producto.stock){
       precioTotal = precioTotal + (cantidadProducto * Producto.precio)
  }
  else {
      alert("El stock actual de este producto es de: " + Producto.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
  }
}

else if (productoCompra == Producto){

  let cantidadProducto = prompt("Ingrese que cantidad de " + Producto + " desea comprar:")
  if (cantidadProducto <= Producto.stock){
       precioTotal = precioTotal + (cantidadProducto * Producto.precio) 
  }
  else {
    alert("El stock actual de este producto es de: " + Producto.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}

/*else if (productoCompra == "jarrón rubí"){

  let cantidadProductoJarrón = prompt("Ingrese que cantidad de " + producto3.nombre + " desea comprar:")
  if (cantidadProductoJarrón <= producto3.stock) {
       precioTotal = precioTotal + (cantidadProductoJarrón * producto3.precio) 
  }
  else {
    alert("El stock actual de este producto es de: " + producto3.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
} 
}

else if (productoCompra == "cuenco acqua"){

  let cantidadProductoCuenco = prompt("Ingrese que cantidad de " + producto4.nombre + " desea comprar:")
  if (cantidadProductoCuenco <= producto4.stock) {
        precioTotal = precioTotal + (cantidadProductoCuenco * producto4.precio) 
  }
  else {
    alert("El stock actual de este producto es de: " + producto4.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}  
}

else if (productoCompra == "ensaladera mar"){

  let cantidadProductoEnsaladera = prompt("Ingrese que cantidad de " + producto5.nombre + " desea comprar:")
  if (cantidadProductoEnsaladera <= producto5.stock) {
        precioTotal = precioTotal + (cantidadProductoEnsaladera * producto5.precio) 
  }
  else {
    alert("El stock actual de este producto es de: " + producto5.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}*/
} 

if (precioTotal != 0){
  alert("El precio total es: " + precioTotal)
}

function saludo (){
  alert ("Gracias por ingresar a Magia Blanca!")
}

saludo();