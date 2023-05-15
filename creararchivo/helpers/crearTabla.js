const fs = require ('fs') // manipulacion o generacion de archivos , modulo paquete libreria 


const crearTabla = async (base) =>{

    let respuesta= ''
    try{
        for( let i=1; i<11;i++){
            respuesta +=`${base} * ${i}\n`
        }
        fs.writeFileSync(`tabla_${base}.txt`,respuesta)
        return `el archivo tabla_${base}.txt se creo exitosamente`
    } catch(error){
        return error
    }

}

module.exports ={ //exportar la funcion 
    crearTabla
}