var express = require('express');
var router = express.Router();
const usuariosController =require('../controllers/usuariosController') 

router.get('/', usuariosController.registro); 
router.get('/login', usuariosController.login);
router.get('/editarPerfil', usuariosController.editarPerfil);
router.get('/perfil', usuariosController.perfil)
router.get('/registro', usuariosController.registro);

module.exports = router;

