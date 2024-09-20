const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    Titulo: {
        type: String,
        required: [true, 'Por favor ingrese el título del producto'],
        trim: true, // elimina los espacios
        maxlength: [500, 'El título no puede tener más de 500 caracteres'] 
    },
    Imagen: {
        type: String,
        default:'El producto no tiene foto'
    },
    Precio: {
        type: Number,
        required: [true, 'Por favor ingrese el precio del producto']
    },
    Descripción: {
        type: String,
        required: [true, 'Por favor ingrese la descripcion del producto'],
        maxlength: [500, 'El producto no puede tener más de 500 caracteres'] 

        
    }
});

// Creación de la colección
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;


    

