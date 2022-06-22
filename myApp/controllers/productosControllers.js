const db = require('../database/models');
const sequelize = require('sequelize');
const Product = db.Producto
const Comment = db.Comentario



const productosControllers = {


  detalleProducto: function (req, res) {
    let id = req.params.id;
    db.Producto.findByPk(id, {
      include: [{ all: true, nested: true }]
    }).then(function (unProducto) {          
            
            res.render('product', { producto: unProducto })                  
    })
    
  },

  agregarComentario: function (req, res) {
    if (!req.session.user){
      throw Error ('No Autorizado')
    }

    let productos_id = req.params.id;
    let info = req.body;

    console.log(info,'info')

    let comentario ={
      texto_comentario:info.comentar,
      
      productos_id: productos_id,
      usuarios_id: req.session.user.id
    }

    Comment.create(comentario)
      .then((result)=>{
        return res.redirect(req.params.id)
      })
  

    
   
  },
  


  agregarProducto: function (req, res) {
    if (!req.session.user){
      throw Error ('Not Authorised')
    }
    res.render('agregarProducto')
  },

  productoSubmit: (req,res)=> {
    let info = req.body;
    let imgProducto = req.file.filename; 

    let producto = {
      titulo_producto: info.nuevoProducto,
      imgProducto: imgProducto,
      descripcion: info.descripcion,
      created_at: new Date(),
      update_at: new Date()
    };

    Product.create(producto)
    .then((result)=> {
      return res.redirect("/")
    })
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