var express = require('express');
var router = express.Router();
const usuariosController =require('../controllers/usuariosController') 

router.get('/', usuariosController.index); 
router.get('/login', usuariosController.login);
router.get('/editarPerfil', usuariosController.editarPerfil);
router.get('/perfil', usuariosController.perfil)
router.get('/registro', usuariosController.registro);

/*router.get('/register/create', usuariosController.create);
router.post('/register/store', usuariosController.store);*/

module.exports = router;

