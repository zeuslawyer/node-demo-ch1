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
app.use(express.static('public'));

//error 404 handling - reference: https://expressjs.com/en/starter/faq.html
app.use(function (req, res, next) {
    res.status(404).render('404error', {
        errorMessage: 'Whoops! That page doesn\'t exist!'
    });
    //res.status(404).send("Sorry can't find that!")
  });



module.exports = app;

// LESSON REFERENCE: https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/

