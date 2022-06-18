var express = require('express');
var router = express.Router();

const productosControllers =require('../controllers/productosControllers') 

 
router.get('/detalleProducto/:id', productosControllers.detalleProducto)
router.get('/agregarProducto', productosControllers.agregarProducto)
router.get('/editarProducto', productosControllers.editarProducto)
router.get('/resultadoProducto', productosControllers.resultadoProducto)



module.exports = router;
