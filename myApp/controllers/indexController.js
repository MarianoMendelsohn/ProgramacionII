const db = require ('../database/models');
const sequelize = require ('sequelize');

const indexController = {

    index:function(req, res ) {
      res.render('index',{
        lista : data.productos
      });
    }
    
}
module.exports = indexController