const express = require ('express')
const path = require ('path')
const app = express ()
const hbs = require ('hbs')
const puerto = 1010
app.use (express.static('public'))

app.set ('views', path.join(__dirname+'/public/views'))
app.set ('view engine', 'hbs')
hbs.registerPartials(__dirname+ '/public/views/partials');


app.get('/', (req , res) => {
    res.render ('home',
    {
      titulo : 'home',
      nombre:'Diego Betancur'  
    }) 
})

app.listen (puerto, () => {
    console.log (`Escuchando el puerto ${puerto}`)

} )


