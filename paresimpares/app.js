const { generarNumeros } = require("./helpers/generarNumeros")

generarNumeros()
.then(mensaje => console.log(mensaje))
.catch(error => console.log(error))