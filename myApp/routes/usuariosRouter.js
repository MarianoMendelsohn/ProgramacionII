var express = require('express');
var router = express.Router();
const usuariosController =require('../controllers/usuariosController') 

router.get('/', usuariosController.registro); // router.get marca el suffijo
//router.get('/detalle/:id')

module.exports = router;
