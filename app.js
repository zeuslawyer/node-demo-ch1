const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();
//configure settings to include pug & views folder path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);  // this refers to ROUTES folder which contains all the routes handlers/middleware. encapsulates & modularises


module.exports = app;



