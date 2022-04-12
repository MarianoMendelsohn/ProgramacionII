const data = require('../data/data');

const productosControllers = {

    index:function(req, res ) {
        return res.render('index',{
          lista: data.productos
        });
      },
    detalleProducto: function (req, res){
      let idProducto = req.params.id
      return res.render('product',{
        producto: data.productos[idProducto],
        comentarios: data.comentarios
      })
    },
    agregarProducto: function(req, res){
      return res.render('agregarProducto',{})
    },
    resultadoProducto: function (req, res){
      return res.render('resultadoBusqueda',{})
    },
    

   
}


module.exports = productosControllers