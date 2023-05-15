 const {crearTabla } = require('./helpers/crearTabla')

 const base = 7
// llamar la funcion generar tabla


crearTabla (base)
.then(mensaje => console.log(mensaje))
.catch(error => console.log (error))
