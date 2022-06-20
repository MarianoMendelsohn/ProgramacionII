const db = require('../database/models')
const user = db.Usuario;

/* Requiriendo el modulo de bcryptjs .. */
const bcryptjs = require("bcryptjs");


/*const usuariosController = {
  index: (req, res) => {
    db.Usuario.findAll({
      where: [{ awards: 1 }, { length: 120 }],
      order: [["", "ASC"]],
      limit: 5,
      offset: 4

    })
      .then((result) => {
        return res.send(result);
      });
  },
    

}*/


const usuariosController = {
  login: (req, res) => {
    return res.render("login");
  },
  procesarLogin: (req, res) => {
   let info = req.body;
   //return res.send(info.usuario) para ver si capturo la informacion del formulario

    user.findOne({
      where : [{email: info.email}]
    }).then((result) =>{
      if (result != null) {
        let claveCorrecta = bcryptjs.compareSync(info.password, result.password)
        if (claveCorrecta) {
        req.session.user = result;
        if(info.loginRemember){
          res.cookie('userId',result.id,{maxAge:1000*60*5})
        }
        res.redirect('/')
        } else {
          res.render('login')
         
        }



        
      } else {
        return res.send ("no existe el mail"+ "" + info.email)
      }

    });





  },
  registro: (req, res) => {
    return res.render("registro");
  },
  procesarRegistro: (req, res) => {

    let info = req.body;
    let passEncriptada = bcryptjs.hashSync(info.password, 10) //nivel de salt 
    let usuario = {
      username: info.username,
      email: info.email,
      password: passEncriptada,
      birthdate: info.birthdate,
      imagen_perfil:"",
      created_at: new Date(),
      update_at: new Date(),
    };

     user.create(usuario)
     .then((result) => {
      return res.redirect("/usuarios/login")
     })
  },

}

module.exports = usuariosController;

/*registro: (req, res) => {
  if (req.session.usuarioIngresado != null) {
      return res.redirect("/")
  } else {
      return res.render("register")
  }
  
},
store: function(req, res, next){
  let info=req.body;
  let passEncriptada = bcryptjs.hashSync(info.password,10);
  let UsuarioRegistrado ={
    username: info.username,
    email: info.email,
    password: passEncriptada,
    imagen_perfil: info.imagen_perfil,
    birthdate: info.birthdate,
    created_at: new Date (),
    update_at: new Date (),
  }
  user.create(UsuarioRegistrado)
  .then((result)=>{
    return res.redirect('/usuarios/login')
  })
},


 

 

 // if (req.query.error){
  //  res.render('registro', {title: 'Registración', error: true, message:'El nombre de usuario o email ya existe'});
  //}else {
   // res.render('registro', {title:'Registración', error: false, message: 'El nombre de usuario o email ya existe'})
  //} *
  
 
 
  //.then (function (usuario) {
    //if(req.body.email == ""){
      //  res.render('registro', {title: 'Registración', error: true, message:'El email no puede estar vacío'});
    //} else if (req.body.password == ""){
      //  res.render('registro', {title: 'Registración', error: true, message:'La contraseña no puede estar vacía'});
    //} else if (usuario != null){
      //  res.render('registro', {title: 'Registración', error: true, message:'El nombre de usuario o el email ya existe. Elija otro.'});
    //} else if(usuario == null){
      //  let password = bcrypt.hashSync(req.body.password, 10);
        

      //  db.Usuario.create({
        //    nombre: req.body.nombre,
          //  email: req.body.email,
           // password: password,
        //})
        //.then(function () {
          ///  res.redirect('/usuario/login');
        //})
    //}else {
      //  res.redirect('/usuario/registro?error=true');
    //}
   
//}),
 

loginForm: function (req,res){
  if (req.session.usuarioLogueado != undefined) {
    res.redirect("/");
  }

if(req.query.error == 'usuario'){
  res.render('login', {tittle: 'Login', error: 'usuario' })
} else if (req.query.error == 'password'){
  res.render('login', { tittle: 'Login', error: 'password'})
}else{
  res.render('login', {tittle: 'Login', error: false})
}
},


login: function (req, res) {
  if (req.session.usuarioLogueado != undefined){
    res.redirect("/");
  }
  db.Usuario.findOne({
    where: {
      [op.or]: [
        {email: req.body.nombre},
        {nombre: req.body.nombre}
      ]
    }
  })
  .then(function (usuario) {
    if(!usuario){
        res.redirect('/usuario/login?error=usuario');
    } else if (bcrypt.compareSync(req.body.password, usuario.password) == false ){
        res.redirect('/usuario/login?error=password');
    }else{
        req.session.usuarioLogueado = usuario;
        if(req.body.recordar != undefined){
            res.cookie('usuarioLogueadoId', usuario.id, { maxAge: 1000 * 60 * 60 * 24 * 365});
        }
        
        res.redirect('/')
    }
})
},

logout: function (req,res) {
  if (req.session.usuarioLogueado != undefined) {
      res.redirect("/");
  }
  req.session.usuarioLogueado = undefined;
  res.clearCookie('idUsuario');
  return res.redirect('/');
},
comentarios: function (req, res) {
if (req.session.usuarioLogueado == undefined) {
    res.redirect("/");
}
let usuario_id = req.session.usuarioLogueado.id;
db.Comentario.findAll({
    where: [
        {usuario_id: usuario_id}
    ],
    order:[
        ['createdAt', 'DESC']
    ],
    include: [  
        {association: 'producto'},
        {association: 'usuario'}
    ]
})
.then(function (comentarios) {
    res.render('misComentarios', { comentarios: comentarios, title: 'Mis comentarios' })
})
},
borrarComentario: function (req,res) {
if (req.session.usuarioLogueado == undefined) {
    res.redirect("/");
}
let id = req.params.id;
db.Comentario.findByPk(id)
.then(function (comentario) {
    res.render('borrarComentario', {comentario: comentario, title: 'Borrar comentario'})
})
},
dropComentario: function (req,res) {
      if (req.session.usuarioLogueado == undefined) {
          res.redirect("/");
      }
      let id = req.params.id;
      db.Comentario.destroy({
          where: [
              { id:id }
          ]
      })
      .then(function (result) {
          console.log(result);
          res.redirect('/usuario/comentarios');
      })
  },

editarPerfil: function (req, res) {
  res.render("editarPerfil", {
    usuario: db.Usuario,
    username: req.body.username,
    email:req.body.email,
    password:req.body.password,
    birthdate:req.body.birthdate,

  });
},
perfil: function (req, res) {
  res.render("perfil", {
    usuario: data.usuario,
    lista: data.productos,
    comentarios: data.comentarios,
  });
},

};*/


