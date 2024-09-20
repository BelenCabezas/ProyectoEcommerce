// Documentación de los controladores
//@descr Obtenemos todos los productos
// router GET /productos
// acceso Público
exports.getProductos = (req, res, next) => {
    res.status(200).json({ resultado: true, mensaje: 'mostrar todos los productos' });
};

// Documentación de los controladores
//@descr Crear un producto
// router POST /productos
// acceso Privado
exports.postProducto = (req, res, next) => {
    res.status(201).json({ resultado: true, mensaje: 'Has creado un producto' });
};

// Documentación de los controladores
//@descr Actualizamos un producto
// router PUT /productos/:id
// acceso Privado
exports.updateProducto= (req, res, next) => {
    res.status(200).json({ 
        resultado: true, 
        mensaje: `Has actualizado el producto con ID: ${req.params.id}` 
    });
};

// Documentación de los controladores
//@descr Eliminar un producto
// router DELETE /productos/:id
// acceso Privado
exports.deleteProducto = (req, res, next) => {
    res.status(200).json({ resultado: true, mensaje: 'Has eliminado un producto' });
};

// Documentación de los controladores
//@descr Obtener un producto
// router GET /productos/:id
// acceso Público
exports.getProducto = (req, res, next) => {
    res.status(200).json({ resultado: true, mensaje: 'Producto encontrado' });
};
