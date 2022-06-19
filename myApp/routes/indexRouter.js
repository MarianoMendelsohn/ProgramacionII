var express = require('express');
var router = express.Router();
const indexController =require('../controllers/indexController') 

router.get('/', indexController.home); // router.get marca el suffijo
//router.get('/detalle/:id')

module.exports = router;
