var express = require('express');

const port = process.env.PORT || 8080;

var app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/',function(req,res){
  res.render('view');
})

app.listen(port,function(){
  console.log('Server is running on' + port);
})
