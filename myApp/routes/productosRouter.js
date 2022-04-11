var express = require('express');
var router = express.Router();

const productosControllers =require('../controllers/productosControllers') 

router.get('/todosLosProductos', productosControllers.index); // router.get marca el suffijo
//router.get('/detalle/:id')
router.get ('/detalleProducto', productosControllers.detalleProducto)



module.exports = router;
