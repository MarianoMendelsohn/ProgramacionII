const data = require('../data/data');

const usuariosController = {
   
    registro:function(req, res ) {
      res.render('registro',{});
    },
    login:function(req, res ) {
      res.render('login',{});
    },
    editarPerfil: function(req , res ) {
      res.render('editarPerfil',{})
    },
    perfil: function (req , res) {
      res.render('perfil', {})
    }




    
    
}
module.exports = usuariosController