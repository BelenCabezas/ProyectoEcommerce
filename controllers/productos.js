const productos=require('../model/producto')

// Documentación de los controladores
//@descr Obtenemos todos los productos
// router GET /productos
// acceso Público
exports.getProductos = async(req, res, next) => {
    try{
        let productos= await productos.find()
         res.status(200).json({ resultado: true, mensaje: 'mostrar todos los productos' });
    } catch{(error)
        res.status(400).json({mensaje: 'no funciona'})
    }
   
};

// Documentación de los controladores
//@descr Crear un producto
// router POST /productos
// acceso Privado
exports.postProducto =async (req, res, next) => {
    try{
        const productos= await productos.create(req.body)
        res.status(201).json({ resultado: true, mensaje: 'Has creado un producto' });
    } catch(error){
        res.status(400).json({mensaje: 'no funciona'})

    }
 
    }
  
// Documentación de los controladores
//@descr Actualizamos un producto
// router PUT /productos/:id
// acceso Privado
exports.updateProducto= async(req, res, next) => {
    try{  
        const productos =await productos.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({resultado:true,mensaje:'Se actualizo un producto'})
    } catch{ (error)
        res.status(400).json({mensaje: 'no funciona'})

    }
};

// Documentación de los controladores
//@descr Eliminar un producto
// router DELETE /productos/:id
// acceso Privado
exports.deleteProducto = async(req, res, next) => {
    try{  
        const productos =await productos.findByIdAndDelete(req.params.id)
        res.status(200).json({ resultado: true, mensaje: 'Has eliminado un producto' });
    } catch{ (error)
        res.status(400).json({mensaje: 'no funciona'})

    }
};

// Documentación de los controladores
//@descr Obtener un producto
// router GET /productos/:id
// acceso Público
exports.getProducto = async(req, res, next) => {
    try{
        let productos= await Productos.findById(req.params.id)
        res.status(200).json({ resultado: true, mensaje: 'Producto encontrado' });
    } catch{(error)
        res.status(400).json({mensaje: 'no funciona'})
    }
    
    
};
