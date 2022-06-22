const db = require('../database/models')
const user = db.Usuario;

/* Requiriendo el modulo de bcryptjs .. */
const bcryptjs = require("bcryptjs");

const usuariosController = {
  login: (req, res) => {
    return res.render("login");
  },
  procesarLogin: (req, res) => {
    let info = req.body;
    let errors = {}
    //return res.send(info.usuario) para ver si capturo la informacion del formulario

    user.findOne({
      where: [{ email: info.email }]
    }).then((result) => {
      if (result != null) {
        let claveCorrecta = bcryptjs.compareSync(info.password, result.password)
        if (claveCorrecta) {
          req.session.user = result;
          if (info.loginRemember) {
            res.cookie('userId', result.id, { maxAge: 1000 * 60 * 10 })
          }
          res.redirect('/')
        } else {
          errors.message = "credenciales invalidas";
          res.locals.errors = errors;
          res.render('login'  )

        }
      } else {
        errors.message = "credenciales invalidas";
        res.locals.errors = errors;
        res.render('login')
      }

    });





  },
  registro: (req, res) => {
    return res.render("registro");
  },
  procesarRegistro: (req, res) => {

    let info = req.body;
    let passEncriptada = bcryptjs.hashSync(info.password, 10) //nivel de salt 
    let imgPerfil = req.file.filename;

    let usuario = {
      username: info.username,
      email: info.email,
      password: passEncriptada,
      birthdate: info.birthdate,
      imagen_perfil: imgPerfil,
      created_at: new Date(),
      update_at: new Date(),
    };

    user.create(usuario)
      .then((result) => {
        return res.redirect("/usuarios/login")
      })
  },

  cerrarSesion: (req, res) => {
    req.session.destroy()
    res.clearCookie("userId")
    return res.render("login")
  },

  perfil: function (req, res) {
    let id = req.params.id
    db.Usuario.findByPk(id,{
      include: [{ all: true, nested: true }]
    })
 
    .then(
      function(result){
       //console.log(result.Seguidores, "seguidores");
       return res.render("perfil", {
          usuario : result
          
         
        });
      }
    )    
  },
  miperfil: function(req,res){
    if (!req.session.user){
      throw Error ('Not Authorized')
    }
    res.render('miPerfil');
    let id = req.params.id;
        user.findByPk(id,  {
            include:
            {
                all: true,
                nested: true
            }
        })
            .then((result) => {
                // return res.send(result)
                return res.render('miPerfil')
  })
  
  },
  editarPerfil: function(req,res){
    if(!req.session.user){
      throw Error ("Not Authorized")
    }
    res.render('editarPerfil');
  },
  perfilEditado: (req,res) =>{
    let info = req.body;
     let imgPerfil = req.file.filename;
    let usuario ={
      username: info.username,
      email: info.email,
      imagen_perfil: imgPerfil,

    }
    let filtro = {
      where: {
        id: req.params.id
      }
    }
    if (req.params.id !=usuario.usuario_id){
      return res.redirect('/usuarios/login')
    }
    else {
      user.update(usuario,filtro)
      .then((result)=>{
        req.sesson.user=result.dataValues;
        return res.redirect('/usuarios/perfil'+ req.params.id)
      })
    }
  }

}

module.exports = usuariosController;



