
var express = require('express');
var path = require('path');
var app = express();
var accountData = require('./static/modules/textreturn');

app.use(express.static('static'));

app.get('/balance', function(request, response){
  var newSalary = accountData.textReturn();
  newSalary += accountData.randomDollars();
  response.send(newSalary);
});

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, 'index.html')); //__dirname is a node thing...
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
