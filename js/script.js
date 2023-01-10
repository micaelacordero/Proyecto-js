let nombreProducto1 = "Bacha Artesanal"
let precioProducto1 = 4850
let stockProducto1 = 5

let nombreProducto2 = "Jarrita Acqua"
let precioProducto2 = 1200
let stockProducto2 = 20

let nombreProducto3 = "Jarrón Rubí"
let precioProducto3 = 3300
let stockProducto3 = 25

let nombreProducto4 = "Cuenco Acqua"
let precioProducto4 = 1300
let stockProducto4 = 30

let nombreProducto5 = "Ensaladera Mar"
let precioProducto5 = 2800
let stockProducto5 = 20


let precioTotal = 0

let primerIngreso = true


alert ("Bienvenidos a Magia Blanca! Aquí podra adquirir los siguientes productos: \n - Bacha Artesanal  \n - Jarrita Acqua \n - Jarrón Rubí \n - Cuenco Acqua  \n - Ensaladera Mar \n - Salir")
  


let cantidadCompra = prompt ("Cuantos productos desea adquirir?")

for(let i = 0; i < cantidadCompra; i = i + 1){
  let productoCompra = prompt("Que producto desea comprar?: \n - Bacha Artesanal \n - Jarrita Acqua \n - Jarrón Rubí \n - Cuenco Acqua \n - Ensaladera Mar \n - Salir"  )

if (productoCompra == "Salir"){
   break
}

if (productoCompra == "Bacha Artesanal"){

  let cantidadProductoBacha = prompt("Ingrese que cantidad de " + nombreProducto1 + " desea comprar:")
  if (cantidadProductoBacha <= stockProducto1){
       precioTotal = precioTotal + (cantidadProductoBacha * precioProducto1)
  }
  else {
      alert("El stock actual de este producto es de: " + stockProducto1 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
  }
}

else if (productoCompra == "Jarrita Acqua"){

  let cantidadProductoJarrita = prompt("Ingrese que cantidad de " + nombreProducto2 + " desea comprar:")
  if (cantidadProductoJarrita <= stockProducto2){
       precioTotal = precioTotal + (cantidadProductoJarrita * precioProducto2) 
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto2 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}

else if (productoCompra == "Jarrón Rubí"){

  let cantidadProductoJarrón = prompt("Ingrese que cantidad de " + nombreProducto3 + " desea comprar:")
  if (cantidadProductoJarrón <= stockProducto3) {
       precioTotal = precioTotal + (cantidadProductoJarrón * precioProducto3) 
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto3 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
} 
}

else if (productoCompra == "Cuenco Acqua"){

  let cantidadProductoCuenco = prompt("Ingrese que cantidad de " + nombreProducto4 + " desea comprar:")
  if (cantidadProductoCuenco <= stockProducto4) {
        precioTotal = precioTotal + (cantidadProductoCuenco * precioProducto4) 
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto4 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}  
}

else if (productoCompra == "Ensaladera Mar"){

  let cantidadProductoEnsaladera = prompt("Ingrese que cantidad de " + nombreProducto5 + " desea comprar:")
  if (cantidadProductoEnsaladera <= stockProducto5) {
        precioTotal = precioTotal + (cantidadProductoEnsaladera * precioProducto5) 
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto5 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}

} 

if (precioTotal != 0){
  alert("El precio total es: " + precioTotal)
}

function saludo (){
  alert ("Gracias por ingresar a Magia Blanca!")
}

saludo();