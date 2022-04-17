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
  loginGet: function (req, res) {
    const usuario = req.body.usuario;
    const password = req.body.password;

    // falta: buscar en db
    const user = data.usuario.mail === usuario ? data.usuario : null;
    if (!user) {
      // error -- credenciales no coinciden
      res.redirect("/usuarios/login");
    } else {
      // éxito
      // crear sesión y guardar en cookie
      res.redirect("/");
    }
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
