const db = require ('../database/models');
const sequelize = require ('sequelize');
const Product = db.Producto


const productosControllers = {



      detalleProducto: function (req, res){
      let idProducto = req.params.id;
      db.Producto.findByPk(id, {
        indlcude: [{all:true,nested: true}]
      })
      .then(function (unProducto){
        res.render('detalle',{UnProducto: unProducto, title: unProducto.nombre})
      })
    },

    agregarComentario: function (req,res) {
      if (req.session.usuarioLogueado == undefined){
        res.redirect("/");
      }
      let id_producto = req.params.id;
      let id_usuario = req.session.usuarioLogueado.id;

      db.Comentario.create({
        texto_comentario: req.body.texto_comentario,
        id_usuario: id_usuario,
        id_producto: id_producto,
      })
      .then(function () {
        res.redirect('/detalleProducto/:id'+id_producto)
      })
    },
    

 agregarProducto: function (req, res){
  if (req.session.usuarioLogueado == undefined){
    res.redirect("/");
  }
  res.render('agregarProducto', { title:'Agregar Producto'});
 },
 
 cargarProducto: function (req,res) {
  if (req.session.usuarioLogueado == undefined){
    res.redirect("/");
  }
  let id_producto = req.params.id;
  let id_usuario = req.session.usuarioLogueado.id;

  db.Producto.create({
    titulo_producto: req.body.titulo_producto,
    imagen_producto: req.file ?
    descripcion_producto: req.body.descripcion_producto,
    id_usuario: id_usuario,
  })
  //.then (Producto =>{
  //  return res.redirect('/todosLosProductos');
 // })
 }   
}


  



module.exports = productosControllers