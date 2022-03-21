var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const { decodeToken } = require('./middlewares');
const productRoute = require('./app/product/router');
const categoryRoute = require('./app/category/router');
const tagRoute = require('./app/tag/router');
const authRoute = require('./app/auth/router');
const deliveryAddressRoute = require('./app/deliveryaddress/router');
const cartRoute = require('./app/cart/router');
const orderRoute = require('./app/order/router');
const invoiceRoute = require('./app/invoice/router');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  '/v1/imgProduct',
  express.static(path.join(__dirname, 'public/images/products'))
);
// app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use(decodeToken());

app.use('/v1/auth', authRoute);
app.use('/v1', productRoute);
app.use('/v1', categoryRoute);
app.use('/v1', tagRoute);
app.use('/v1', deliveryAddressRoute);
app.use('/v1', cartRoute);
app.use('/v1', orderRoute);
app.use('/v1', invoiceRoute);

app.use('/', function (req, res) {
  res.render('index', {
    title: 'eduwork-service',
  });
});
// app.use('/users', usersRouter);

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

module.exports = app;
