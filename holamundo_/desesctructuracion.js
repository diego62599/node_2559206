const aprendices = ['Maria', 'Lina' , 'Carmen', 'Carlos', 'Ramon']


const  [n1, n2,n3,n4, n5]= aprendices

console.log (n3)

console.log(n5)


mascota ={
    nombre : 'tigre',
    tipo : 'perro',
    raza : 'chihuahua'

}

const {nombre, tipo, raza} = mascota

console.log(nombre+' '+raza)



usuarios ={
    nombres : 'rodolfo',
    apellidos : 'gonzales',
    email  : 'rodolfo@gmail.com',
    password : '12345'
}

const {nombres,apellidos,email,password}=usuarios

console.log(nombres+' '+apellidos+' '+email+' '+password)
