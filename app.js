var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes');


var app = express();

http.createServer(app).listen(3000,function(){
    console.log('Express server listening ' + "3000");
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
