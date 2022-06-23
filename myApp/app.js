var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session') // requereimos el modulo session
const db = require('./database/models')
let indexRouter = require('./routes/indexRouter') // requerimos los modulos de las rutas que fueron exportados en los archivos correspondientes
let productosRouter = require('./routes/productosRouter') // requerimos los modulos de las rutas que fueron exportados en los archivos correspondientes
let usuariosRouter = require('./routes/usuariosRouter') // requerimos los modulos de las rutas que fueron exportados en los archivos correspondientes

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( { secret: "burgerfly!",
  resave: false,
  saveUninitialized: true
}));

app.use(function (req, res, next) {
  if (req.session.user != undefined) {    
    res.locals.user = req.session.user
  }
  console.log(req.session.user, "session.user");
  return next();
});

app.use(function(req, res, next) {
  if(req.cookies.userId && !req.session.user) {
    db.Usuario.findByPk(req.cookies.userId).then(results => {      
      req.session.user = results;
      console.log(req.session.user, "set session.user");
      return next();
    });
  } else {
  	return next();
  }}
);


app.use('/', indexRouter); // asignamos los prefijjos a los modulos declarados arriba. Declaramos el path/ 
app.use('/usuarios', usuariosRouter);
app.use('/product', productosRouter); 


// hay que ver si configuramos session





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Info para todas las vistas


module.exports = app;
