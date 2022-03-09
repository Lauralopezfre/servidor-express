var express = require('express');
var app = express();

require('dotenv').config();
console.log(process.env)

//Paso 1: Exponer archivos en una ruta específica.
app.use('/archivo_prueba',express.static('public')) 
app.use('/archivo_prueba/imagen1',express.static('public/prueba_covid.jpg')) 
app.use('/archivo_prueba/imagen2',express.static('public/software_prueba.jpg')) 
app.use('/archivo_prueba/imagen3',express.static('public/testing.jpg')) 


//Paso 2: Responder un texto (el que desee) cuando se le haga un get a la ruta /holamundo
app.get('/holamundo', (req, res)=>{
    res.send('Estamos dentro de /holamundo')
})

app.get('/', (req, res)=>{
    res.send('Aqui inicia el proyecto')
})

//Paso 3: Tener la capacidad de recibir un texto (en el cuerpo del mensaje) mediante el método POST
app.post('/', function (req, res) {
    res.send('Hola usuario llamado: ' + req.query.nombre) 
  });
  
app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})