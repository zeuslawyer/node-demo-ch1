const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();
//configure settings to include pug & views folder path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);  // this refers to ROUTES folder which contains all the routes handlers/middleware. encapsulates & modularises


module.exports = app;



