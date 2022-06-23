const db = require('../database/models');
const sequelize = require('sequelize');
const { Sequelize } = require('../database/models');
const op = db.Sequelize.Op;

let indexController= {
  home: function (req, res) {
    
    db.Producto.findAll({ 
      include: [{ all: true, nested: true }]    
    })
      .then(function (listaProductosResultado) {        
        res.render('index', { productos: listaProductosResultado})  //objeto literal usado en la vista      
      })
  }
};
// Deberia ser: //home y mostrar todos los productos

 module.exports = indexController