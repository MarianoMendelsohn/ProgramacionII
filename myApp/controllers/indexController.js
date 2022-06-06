 const data = require('../data/data')
const indexController = {

    index:function(req, res ) {
      res.render('index',{
        lista : data.productos
      });
    }
    
}
module.exports = indexController