const data = require('../data/data');

const productosControllers = {

    index:function(req, res ) {
        return res.render('index',{
          lista: data.productos
        }); // metodo . con parametros request y response donde vamos a renderizar vista index. Ademá de eso contamos con un objeto literal que nos va a traer del modulo de datos la información solicitada.
      },
    detalleProducto: function (req, res){
      let idProducto = req.params.id
      return res.render('product',{
        producto: data.productos[idProducto],
        comentarios: data.comentarios
      }) // letidproductoreqparams: declaramos la variable que despues vamos a usar en el return.
      // producto: trae los productos con su id.
      // comentarios: data trae los comentarios. 
      // id producto es la asignación al producto solicitado.  ( al modulo data lo requerimos arriba en const= data require)
    },
    agregarProducto: function(req, res){
      return res.render('agregarProducto', {
        lista: data.productos,
        usuario: data.usuario
      }) 
      //idem anterior
    },
    resultadoProducto: function (req, res){
      return res.render('resultadoBusqueda',{})
    },
   
}


module.exports = productosControllers