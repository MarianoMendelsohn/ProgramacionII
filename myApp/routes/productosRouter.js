var express = require('express');
var router = express.Router();

const productosControllers = require('../controllers/productosControllers')


router.get('/product/:id', productosControllers.detalleProducto)
router.get('/agregarProducto', productosControllers.agregarProducto)
router.get('/editarProducto', productosControllers.editarProducto)
router.get('/busquedaProducto', productosControllers.busquedaProducto)



module.exports = router;
