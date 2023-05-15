// importar el paquete que permite hacer peticiones http
const http = require('http')
// creando el servidor
http.createServer((req,res)=>{
    // imprimir mensajes

    res.write('Hola mundo\n Hoy es viernes')
    // crear objeto
    const producto ={
        referencia: 888,
        nombre: 'Papaya',
        precio: 4000
    }
// imprime formato json
    res.write(JSON.stringify(producto))
    res.end()
})

.listen(8080)