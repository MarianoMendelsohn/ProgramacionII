var express = require('express');
var router = express.Router();
const productosControllers =require('../controllers/productosControllers') 

router.get('/', productosControllers.index); // router.get marca el suffijo
//router.get('/detalle/:id')

module.exports = router;
