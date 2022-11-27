// Require Express, create the app, a default route and start the server on port 443

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(443);