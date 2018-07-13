const express = require('express');
const {body, validationResult} = require('express-validator/check');
const mongoose = require('mongoose');
const path = require('path');
const auth = require ('http-auth');

const router = express.Router();
const Registration = mongoose.model('Registration'); // retrieve the model


//point auth to file that contains login+pwd which is in the ROOT folder
const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});


//middleware aka handler for the default index '/' path aka route
//get /
router.get('/', (req, res, next) => {
    res.render('form',  {title: 'Registration Form',  }); // render the file layout called 'form' in the /views folder
});


//post
router.post('/',
  //apply client side VALIDATION on the req.body's two properties - name and email - with this array of handler methods from express-validator
  [
    body('name')
      .isLength({ min: 5 })
      .withMessage(`Please enter a name that is at least 5 letters long`),
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ],
  // handler that then uses express-validator methods to validate on SERVER SIDE
  (req, res) => {
    const errors = validationResult(req);
        // no errors
    if (errors.isEmpty()) {
      const registration = new Registration(req.body);  //create a Registration object of type Model, pass it data from the form
      registration.save()
        .then( () => { res.send('Thank you for your registration!'); })
        .catch( () => { res.send('Sorry! Something went wrong.'); });
        // has errors
      } else {
      res.render('form', {
        title: 'Form - ERRORS',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);

module.exports = router;