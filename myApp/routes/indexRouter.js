var express = require('express');
var router = express.Router();
const indexController =require('../controllers/indexController') 
const multer = require('multer');
const path = require('path');


let storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/prodctos'))
    },
    filename : (req, file, cb) => {
      
        /*          name campoDelForm          -   26052022                 .png  */
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage : storage})

router.get('/', indexController.home); 



module.exports = router;
