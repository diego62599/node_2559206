// importar modulo express
const express = require('express')

// especificar la funcion a emplear
const app = express()

// especificar el puerto
const port= 8282

// especificar el directorio de las paginas estaticas
app.use(express.static('public'))

// peticiones con el metodo get
// get: para consultar 

app.get('/',(req, res)=>{
    // res.write('Home')
    // res.end()
    res.sendFile(__dirname+'/public/home.html')
})

// Cualquier peticion que no exista
app.get('*',(req,res)=>{
    // res.write('Error 404. Pagina no encontrada')
    // res.end()
    res.sendFile(__dirname+'/public/404.html')
})

app.listen(port,()=>{
    console.log(`Escuchando por el puerto ${port}`)
})
