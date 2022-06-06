var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session') // requereimos el modulo session






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

app.use('/', indexRouter); // asignamos los prefijjos a los modulos declarados arriba. Declaramos el path/ 
app.use('/usuarios', usuariosRouter);
app.use('/product', productosRouter); 




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
app.use(function (req, res, next) {
  if (req.session.usuarioLogueado != undefined) {
    res.locals.user = req.session.usuarioLogueado
  }
  return next();
});

module.exports = app;
