let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let home = require('./routes/home');
let authen = require('./routes/authen');
let category = require('./routes/category');
let product = require('./routes/product');
let upload = require('./routes/upload');
let staff = require('./routes/staff');
// let home = require('./routes/home');

let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './dist')));

app.use('/api/authen', authen);
app.use('/api/home', home);
app.use('/api/category', category);
app.use('/api/product', product);
app.use('/api/upload', upload);
app.use('/api/staff', staff);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

permission = require("./library/permission");

module.exports = app;
