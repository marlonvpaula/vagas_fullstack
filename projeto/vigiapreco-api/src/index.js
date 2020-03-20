var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
const config = require('./config');

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

require('./models/Produts');
require('./models/Stores');



mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGODB_URI || global.MONGO_URL, { useNewUrlParser: true });

var routes = require('./routes/index');
var products = require('./routes/products');
var stores = require('./routes/stores');


var app = express();
var cors = function(req, res, next) {
  var whitelist = [
    'http://localhost:8080',
    'http://localhost:8082',
    'http://localhost:3000'
  ];
  var origin = req.headers.origin;
  if (whitelist.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'token,Content-Type,Authorization');
  next();
}
app.use(cors);

/*app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));*/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/products', products);
app.use('/stores', stores);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get ('/api', (req, res) => { 
  res.json ({mensagem: 'Bem-vindo ao servidor'}); 
});

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);



app.listen(port,function(){
  console.log('Express server listening on %d', port);
});


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

//module.exports = app;