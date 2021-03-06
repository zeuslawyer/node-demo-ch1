const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Registration = mongoose.model('Registration'); // retrieve the model
const path = require('path');
const auth = require ('http-auth');

//point auth to file that contains login+pwd which is in the ROOT folder
const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});

//get /registrations
router.get('/', auth.connect(basic), (req, res, next) => {
  Registration.find()  // returns an array of "documents" (records) from the db. these are then passed as properties to render()
    .then( (registrations) => {
      res.render('registrations', { title: 'Listing registrations', registrations });  //registrations property passed to template to iterate over
    })
    .catch( () => { res.send('Sorry! Something went wrong.'); });
});


module.exports = router;