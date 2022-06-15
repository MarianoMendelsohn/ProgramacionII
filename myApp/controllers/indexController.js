const db = require ('../database/models');
const sequelize = require ('sequelize');

const indexController = {

    index:function(req, res ) {
      let producto = db.Producto.findAll({
        order:[
          ['createdAt','DESC']
        ],
      })
    },
    
}
module.exports = indexController