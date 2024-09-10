const express=require('express')
const app=express()
//traigo la conexion de la base de datos al index.js
const connectDB = require('./config/db');
//dotenv
require('dotenv').config();
//colores para los mensajes de la consola
const colors=require('colors')
//Motor de plantillas 
app.set('view engine','ejs')

//Servicios estaticos 
app.use(express.static('public'))

//Ruta inicial
app.get('/',(req,res)=>{
    res.render('Home')
})

//CONEXION SERVER
app.listen(4500,()=>{ 
    
 })
 //llamo a la funcion para conectar la base de datos
 connectDB()

/*--------------------RUTAS--------------------*/

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

/*----------------------------------------*/ 

/*--------------------SUB PAGINA--------------------*/

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