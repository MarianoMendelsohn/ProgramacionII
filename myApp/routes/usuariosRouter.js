var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')

const multer = require('multer');
const path = require('path');

/* Configurar multer */

let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usuarios'))
    },
    filename : function(req, file, cb) {
      
        /*          name campoDelForm          -   26052022                 .png  */
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage : storage})

//router.get('/login', usuariosController.login);
//router.get('/editarPerfil', usuariosController.editarPerfil);
router.get('/perfil/:id', usuariosController.perfil);
router.get('/miPerfil',usuariosController.miperfil);
//router.get('/registro', usuariosController.registro);

//router.post('/editarPerfil',usuariosController.store);
//router.get('/editarPerfil',usuariosController.create);

//router.post('/registro', usuariosController.store);
//router.get('registro',usuariosController.create);

/*router.get('/register/create', usuariosController.create);
router.post('/register/store', usuariosController.store);*/

router.get('/registro', usuariosController.registro);
router.post('/registro',upload.single("imgPerfil") ,usuariosController.procesarRegistro);

router.get('/login', usuariosController.login);
router.post('/login', usuariosController.procesarLogin);

router.get("/login", usuariosController.cerrarSesion) //logout
module.exports = router;

