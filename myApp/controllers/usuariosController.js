const usuariosController = {

    registro:function(req, res ) {
        res.render('registro',{});
      },
    login: function(req,res){
      res.render('login',{});
    }
    
    
}
module.exports = usuariosController