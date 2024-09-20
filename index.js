//dotenv (esto debería estar antes de usar las variables de entorno)
require('dotenv').config();

// Importaciones
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const colors = require('colors');

// Llamar a la función para conectar la base de datos
connectDB();

//traduzco los datos de JSON a objeto literal para la base
app.use(express.json())

// Motor de plantillas
app.set('view engine', 'ejs');

// Servicios estáticos
app.use(express.static('public'));

// Conexión al servidor
app.listen(4500, () => {
    console.log('Servidor corriendo en el puerto 4500'.green);
});



/*--------------------RUTAS--------------------*/

//Ruta inicial
app.get('/',(req,res)=>{
    res.render('Home')
})

//Ruta Recetas
 app.get('/Recetas',(req,res)=>{
    res.render('Recetas')
})
//Ruta Productos
app.get('/Productos',(req,res)=>{
    res.render('Productos')
})

//Ruta Historia
app.get('/Historia',(req,res)=>{
    res.render('Historia')
})
//Ruta Contacto
app.get('/Contacto',(req,res)=>{
    res.render('Contacto')
})

//Ruta Registro
app.get('/Registro',(req,res) =>{
    res.render('Registro')

})

//Ruta Login 
app.get('/Login',(req,res) =>{
    res.render('Login')
})

//Ruta Blog 
app.get('/Blog',(req,res) =>{
    res.render('Blog')
})

//Ruta Bakers
app.get('/Bakers',(req,res) =>{
    res.render('Bakers')
})

/*----------------------------------------*/ 

/*--------------------SUB PAGINA BLOG--------------------*/

//Ruta BlogI1 
app.get('/BlogI1',(req,res) =>{
    res.render('BlogI1')
})

//Ruta BlogI2 
app.get('/BlogI2',(req,res) =>{
    res.render('BlogI2')
})

//Ruta BlogI3 
app.get('/BlogI3',(req,res) =>{
    res.render('BlogI3')
})

//Ruta BlogI4 
app.get('/BlogI4',(req,res) =>{
    res.render('BlogI4')
})

//Ruta BlogI5 
app.get('/BlogI5',(req,res) =>{
    res.render('BlogI5')
})

//Ruta BlogI6 
app.get('/BlogI6',(req,res) =>{
    res.render('BlogI6')
})

/*----------------------------------------*/ 

/*--------------------SUB PAGINA RECETA--------------------*/

//Sub pagina de receta -> red velvet
app.get('/RecetaVelvet',(req,res)=>{
    res.render('RecetaVelvet')
})

//Sub pagina de receta -> pan
app.get('/RecetaPan',(req,res)=>{
    res.render('RecetaPan')
})

//Sub pagina de receta -> croisant
app.get('/RecetaCroisant',(req,res)=>{
    res.render('RecetaCroisant')
})

//Sub pagina de receta -> brownie
app.get('/RecetaBrownie',(req,res)=>{
    res.render('RecetaBrownie')
})

//Sub pagina de receta -> tiramisu
app.get('/RecetaTiramisu',(req,res)=>{
    res.render('RecetaTiramisu')
})

//Sub pagina de receta -> macarons
app.get('/RecetaMacarons',(req,res)=>{
    res.render('RecetaMacarons')
})
/*----------------------------------------*/ 