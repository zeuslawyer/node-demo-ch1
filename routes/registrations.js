const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Registration = mongoose.model('Registration'); // retrieve the model

//get /registrations
router.get('/', (req, res, next) => {
  Registration.find()  // returns an array of "documents" (records) from the db. these are then passed as properties to render()
    .then( (registrations) => {
      console.log('REGISTRATIONS PROPERTY = = ', registrations);
      res.render('registrations', { title: 'Listing registrations', registrations });  //registrations property passed to template to iterate over
    })
    .catch( () => { res.send('Sorry! Something went wrong.'); });
});


module.exports = router;