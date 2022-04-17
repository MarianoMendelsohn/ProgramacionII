const data = require("../data/data");

const usuariosController = {
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
};

module.exports = usuariosController;
