const data = require('../data/data');
const prodctos = require('../data/data')

const productosControllers = {

    index:function(req, res ) {
        return res.render('index',{
          lista: data.productos
        });
      }
   
}








module.exports = productosControllers