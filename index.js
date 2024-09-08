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
//Ruta Productos
app.get('/Productos',(req,res)=>{
    res.render('Productos')
})

/**********SUB PAGINAS**********/

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

//Sub pagina de receta -> tiramisu
app.get('/RecetaMacarons',(req,res)=>{
    res.render('RecetaMacarons')
})