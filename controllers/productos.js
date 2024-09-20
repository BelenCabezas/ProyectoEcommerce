//documentacion de los controladores
//@descr obtenemos todos los productos
//router GET /productos
// acess Publico


//en este archivo, hago el CRUD PARA LA BASE 
exports.getProductos=(req,res,next)=>{
    res.status(202).json({resultado,mensaje:'creaste un producto'})
}

//documentacion de los controladores
//@descr crear un producto
//router POST /productos
// acess Privado


exports.postProductos=(req,res,next)=>{
    res.status(202).json({resultado:true,mensaje:'creaste un producto'})
    
}
//documentacion de los controladores
//@descr actualizamos un produto
//router PUT /productos/:id
// acess Privado

exports.updateProductos=(req,res,next)=>{
    res.status(202).json({resultado:true,mensaje:'actualizaste un producto${req.params.id}'})
    
}
//documentacion de los controladores
//@descr Eliminar un producto
//router  /productos/:id
// acess Privado

exports.deleteProductos=(req,res,next)=>{
    res.status(202).json({resultado:true,mensaje:'eliminar un producto'})

    
}

//documentacion de los controladores
//@descr obtener un producto
//router GET /productos/:id
// acess Privado

exports.getProducto=(req,res,next)=>{
    res.status(202).json({resultado:true,mensaje:'obtener un producto'})
    
    
}

