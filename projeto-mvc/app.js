var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var cadastroRouter = require('./routes/cadastro');
var loginRouter = require('./routes/login');
var ferramentaRouter = require('./routes/pagferramenta');

var app = express();

app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use("/cadastro", cadastroRouter)
app.use("/login", loginRouter)
app.use("/ferramenta", ferramentaRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render("error")
});



module.exports = app;
