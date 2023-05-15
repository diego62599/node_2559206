


const numeros = async (numero) =>{

    let respuesta= ''
    try{
        for( let i=1; i<100;i++){
            if (i>=1 && i<=100){
                
            }
            respuesta +=`${numero} * ${i}\n`
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