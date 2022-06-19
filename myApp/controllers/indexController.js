const db = require ('../database/models');
const sequelize = require ('sequelize');
const { Sequelize } = require('../database/models');
const op = db.Sequelize.Op;


module.exports ={
  home: function (req,res){
    db.Producto.findAll({
      order: Sequelize.literal('rand()')
    })
    .then(function(productos){
      res.render('index', {productos:productos, tittle: 'index'})
    })
  }
}