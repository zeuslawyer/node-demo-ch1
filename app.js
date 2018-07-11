const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//path to route handlers/ middlewares
const routes = require('./routes/index');
const parkingForm = require ('./routes/parkingform');
const reg = require('./routes/registrations');

const app = express();

//configure settings to include pug & views folder path  - see also https://expressjs.com/en/guide/using-template-engines.html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middleware routing
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes); 
app.use('/parking', parkingForm);
app.use('/registrations', reg);


module.exports = app;

// LESSON REFERENCE: https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/

