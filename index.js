const express=require('express')
const app=express()

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
//Ruta Recetas
 app.get('/Recetas',(req,res)=>{
    res.render('Recetas')
})
//Sub pagina de receta -> red velvet
app.get('/RecetaVelvet',(req,res)=>{
    res.render('RecetaVelvet')
})

//Ruta Productos
app.get('/Productos',(req,res)=>{
    res.render('Productos')
})