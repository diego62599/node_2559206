const fs = require('fs')

const generarNumeros = async() =>{
mayores = []
menores = []
menMenores = ""
menMayores = ""
try {
    for(let i = 0; i<100; i++){
        var numero = Math.floor(Math.random() * 101)
        if (numero > 17){
         mayores.push(numero)
        }
        else{
         menores.push(numero)
        }
     }

     for (i = 0; i < menores.length; i++){
        menMenores += `${menores[i]}\n`
     }
     fs.writeFileSync(`menores.txt`, menMenores)

     for (i = 0; i < mayores.length; i++){
        menMayores += `${mayores[i]}\n`
     }
     fs.writeFileSync(`mayores.txt`, menMayores)
     return `los archivos menores.txt y mayores.txt han sido creados`

} catch (error) {
    return error
}

}

module.exports = {
    generarNumeros
}