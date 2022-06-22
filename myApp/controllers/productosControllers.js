const db = require('../database/models');
const sequelize = require('sequelize');
const Product = db.Producto


const productosControllers = {


  detalleProducto: function (req, res) {
    let id = req.params.id;
    db.Producto.findByPk(id, {
      include: [{ all: true, nested: true }]
    }).then(function (unProducto) {          
            console.log(unProducto.comentarios);
            res.render('product', { producto: unProducto, comentarios: unProducto.comentarios })                  
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
        res.redirect('/product/:id' + id_producto)
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
    let imgProducto = req.file.filename;

    db.Producto.create({
      titulo_producto: req.body.titulo_producto,
      imagen_producto: imgProducto,
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
        res.render('product', { producto: producto, title: 'Borrar producto' })
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

  },

  //buscacador

  busquedaProducto: function (req, res) {
    let busqueda = "%" + req.query.search + "%"
    const op = db.Sequelize.Op
    db.Producto.findAll({
      where:{ [op.or]:[
        { titulo_producto: { [op.like]: busqueda } }, 
        { descripcion_producto: { [op.like]: busqueda } }
      ]}
    ,
      order: [['titulo_producto']]
    }

    ).then(
      function (result) {
        res.render('resultadoBusqueda', { productos: result });
      }
    )
  }
}






module.exports = productosControllers