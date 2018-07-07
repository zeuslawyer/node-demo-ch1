const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');



const app = express();

//configure settings to include pug & views folder path  - see also https://expressjs.com/en/guide/using-template-engines.html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);  // this refers to index.js in ROUTES folder which contains  the routing handler/middleware 


module.exports = app;



// LESSON REFERENCE: https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/

