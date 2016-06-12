var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index',{

  });
});
app.get('/signup', function(req, res) {
  res.render('index',{

  });
});

app.get('/signin', function(req, res) {
  res.render('index',{

  });
});
app.listen(3000,function(err){
  if(err) return console.log('hubo un Error'),process.exit(1);
  console.log('servidor iniciando en el puerto 3000');
});
