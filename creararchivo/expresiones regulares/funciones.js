const validar = () =>{
    const expresionDocumento = /^[0-9]+$/
    const expresionNombres =  /^[a-zA-Z]+$/
    const expresionApellidos = /^[a-z A-Z]+$/
    const expresionEmail = /\S+@\S+\.\S+/
    const expresionCelular =  /^[0-9]+$/
    let errores = ''

    const Documento = document.getElementById ('Documento').value
    const Nombres =document.getElementById ('Nombres').value
    const Apellidos =document.getElementById ('Apellidos').value
    const Email =document.getElementById ('Email').value
    const Celular =document.getElementById ('Celular').value

    if (!expresionDocumento.test(Documento)){
        errores += 'El Documento debe ser solo numerico.\n'
    }

    if (!expresionNombres.test(Nombres)){
        errores += 'El Nombre debe de tener solo letras.\n'
    }

    if (!expresionApellidos.test(Apellidos)){
        errores += 'El Apellido debe ser solo Letras.\n'
    }

    if (!expresionEmail.test(Email)){
        errores += 'El Email debe tener @.\n'
    }
    if (!expresionCelular.test(Celular)){
        errores += 'El Celular debe ser solo numerico.\n'
    }

    document.getElementById ('error').innerText = errores

}


document.querySelector ('#btnRegistrar')
.addEventListener('click', () => validar() )