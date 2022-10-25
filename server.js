const { response } = require("express")
const express = require("express")
const Contenedor = require('./contenedor')

//2) creamos el servidor
const app = express()
const PORT = 8080

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

const contenedorProductos = new Contenedor("productos.txt")


//Ruta productos
app.get("/productos", async (req, res) => {
  // res.send()
  try {
    const productos = await contenedorProductos.getAll();
    console.log(productos);
    res.send(productos)
  } catch (error) {
    res.send("hubo un error")
  }

})



app.get("/random", async (req, res) => {
  try {
    const productos = await contenedorProductos.getAll();
    // console.log(productos.length);
    const randomId = productos[Math.floor(Math.random() * productos.length)];
    console.log("Random Product:", randomId);
    res.send(randomId)
  } catch (error) {
    res.send("hubo un error")
  }
})