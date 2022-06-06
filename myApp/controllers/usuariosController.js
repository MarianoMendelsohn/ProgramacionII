const db =require('../database/models')
const user = db.Usuario;

const usuariosController = {
  index: (req, res) => {
    db.Usuario.findAll({
        /* where : [{awards: 1}, {length: 120}], */
        /* order : [["title", "ASC"]],
        limit : 5,
        offset: 4 */
       
      })
      .then((result) => {
        return res.send(result);
      });
  },
  registro: function (req, res) {
    res.render("registro", {
      usuario: data.usuario,
    });
  },
  login: function (req, res) {
    res.render("login", {
      usuario: data.usuario,
    });
  },
  editarPerfil: function (req, res) {
    res.render("editarPerfil", {
      usuario: data.usuario,
    });
  },
  perfil: function (req, res) {
    res.render("perfil", {
      usuario: data.usuario,
      lista: data.productos,
      comentarios: data.comentarios,
    });
  },
  //create: (req, res) => {
  //  return res.render('registro')
  //}
  //store: function (req, res) {
  //  let info = req.body;
  //  let usuario = 
  //}
};

module.exports = usuariosController;
