// configurações do servidor com express
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

// var msg = require('./mod_test');  //faz dessa forma só com o parentesis'()',var msg = require('./mod_test');,  ou cahamndo no console.log nesse exmplo na linha 24
var app =express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

// exporta a aplicação para outro arquivo usando require
module.exports = app;
