var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')



//router.get('/login', usuariosController.login);
//router.get('/editarPerfil', usuariosController.editarPerfil);
//router.get('/perfil', usuariosController.perfil);
//router.get('/registro', usuariosController.registro);

//router.post('/editarPerfil',usuariosController.store);
//router.get('/editarPerfil',usuariosController.create);

//router.post('/registro', usuariosController.store);
//router.get('registro',usuariosController.create);

/*router.get('/register/create', usuariosController.create);
router.post('/register/store', usuariosController.store);*/

router.get('/registro', usuariosController.registro);
router.post('/registro', usuariosController.procesarRegistro);

router.get('/login', usuariosController.login);
router.post('/login', usuariosController.procesarLogin);

module.exports = router;

