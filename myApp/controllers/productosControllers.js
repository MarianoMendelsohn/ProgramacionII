const db = require('../database/models');
const sequelize = require('sequelize');
const Product = db.Producto


const productosControllers = {



  detalleProducto: function (req, res) {
    let idProducto = req.params.id;
    db.Producto.findByPk(id, {
      inclcude: [{ all: true, nested: true }]
    })
      .then(function (unProducto) {
        res.render('detalle', { UnProducto: unProducto, title: unProducto.nombre })
      })
  },

  agregarComentario: function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
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
        res.redirect('/detalleProducto/:id' + id_producto)
      })
  },


  agregarProducto: function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
      res.redirect("/");
    }
    res.render('agregarProducto', { title: 'Agregar Producto' });
  },

  cargarProducto: function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
      res.redirect("/");
    }
    let id_producto = req.params.id;
    let id_usuario = req.session.usuarioLogueado.id;

    db.Producto.create({
      titulo_producto: req.body.titulo_producto,
      // imagen_producto: req.file ?
      descripcion_producto: req.body.descripcion_producto,
      id_usuario: id_usuario,
    })
    //.then (Producto =>{
    //  return res.redirect('/todosLosProductos');
    // })
  },


  misProductos: function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
      res.redirect("/")
    }

    db.Producto.findAll(
      {
        where: { id_usuario: req.session.usuarioLogueado.id },
        order: [['updatedAt', 'DESC']]
      }
    )
      .then(function (productos) {
        res.render('misProductos', { productos: productos, title: 'Mis Productos' })
      })
  },
  editarProducto: function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
      res.redirect("/");
    }
    let id = req.params.id;
    db.Producto.findByPk(id)
      .then(function (producto) {
        res.render('editarProducto', { producto: producto, tittle: 'Editar producto' })
      })
  },

  cargarEditar: function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
      res.redirect("/");
    }

    let id = req.params.id;
    db.Producto.update(req.body,
      {
        where: {
          id: id
        }
      })
      .then(function (output) {
        res.redirect('/todosLosProductos')
      })
  },

  borrarProducto: function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
      res.redirect("/");
    }
    let id = req.params.id;
    db.Producto.findByPk(id)
      .then(function (producto) {
        res.render('detalleProducto', { producto: producto, title: 'Borrar producto' })
      })
  },
  borrarConfirm: function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
      res.redirect("/");
    }
    let id = req.params.id;
    db.Producto.destroy({
      where: {
        id: id
      }
    })
      .then(function (output) {
        res.redirect('/usuarios/perfil')
      })
  }

}






module.exports = productosControllers