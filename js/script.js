function Producto (nombre, precio, stock, img) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock || 0;
  this.img = img
  this.restarStock = function(cantidad){
    this.stock -= cantidad
  }
  {
    this.sumarStock = function(cantidad){
      this.stock += cantidad
    }
  }
}

let producto1 = new Producto ("bacha artesanal", 4850, 5, "../media/BachaArtesanal.jpeg")

let producto2 = new Producto ("jarrita acqua", 1200, 20,"../media/Jarrita Acqua.jpeg")

let producto3 = new Producto ("jarrón rubí", 3300, 25, "../media/JarrónRubí.jpeg")

let producto4 = new Producto ("cuenco acqua", 1300, 30, "../media/CuencoAcqua.jpeg")

let producto5 = new Producto ("taza rústica rubí", 1500, 50, "../media/TazarústicaRubi.jpeg")

let producto6 = new Producto ("ensaladera mar", 2800, 20, "../media/EnsaladeraMar.jpeg")



let precioTotal = 0

/*Cards*/

let productos = document.getElementById("productos")

for (const prod of productos){

let card = document.createElement("div")

card.className = "card"

card.innerHTML = `<img src="${prod.img}" height="200" width="400"></imagen><h1>${prod.nombre}</h1><p>Precio: $${prod.precio}</p><button id="boton"${prod.listaProductos}>Comprar</button>`

productos.append(card)
}

let boton = document.getElementById("boton")

boton.addEventListener("click", mostrarPorConsola)

function mostrarPorConsola(){
  console.log("click")
}

let input = document.getElementById("search")

input.addEventListener('input', () => {console.log(input.value)})