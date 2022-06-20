const db = require('../database/models');
const sequelize = require('sequelize');
const { Sequelize } = require('../database/models');
const op = db.Sequelize.Op;


module.exports = {
  home: function (req, res) {
    
    db.Producto.findAll({     
    })
      .then(function (listaProductosResultado) {        
        res.render('index', { productos: listaProductosResultado, tittle: 'index' })        
      })
  }
}