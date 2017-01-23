const PORT=9139; 

var express = require('express');
var app = express();

app.use(express.static('./'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server = app.listen(PORT);

var host = server.address().address
var port = server.address().port

console.log("server is listening on port %s", port);