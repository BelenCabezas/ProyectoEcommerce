const express = require('express');

// Llamo a los controllers y exporto las funciones
const { getProductos, postProducto, updateProductos, deleteProducto, getProducto } = require('../controllers/productos');

const router = express.Router(); // Corregido: Router con "R" mayúscula

// Definición de rutas
router.route('/').get(getProductos).post(postProducto);
router.route('/:id').get(getProducto).put(updateProductos).delete(deleteProducto);

module.exports = router;
