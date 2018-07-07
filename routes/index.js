const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator/check');


//middleware aka handler for the default index '/' path aka route

//get
router.get('/', (req, res, nex) => {
    res.render('form',  {title: 'Registration',  }); // render the file layout called 'form' in the /views folder
});

//get
router.get('/parking', (req, res, nex) => {
    res.sendFile('/Users/zubinpratap/Documents/DevProjects/Practice_Projects/WebDevTutes/node-demo-ch1/views/ParkingForm.html'); 
});

//post
router.post('/',
  //apply conditions on the req.body's two properties - name and email - with this array of handler methods from express-validator
  [
    body('name')
      .isLength({ min: 5 })
      .withMessage(`Please enter a name that is at least 5 letters long`),
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ],
  // handler that then uses express-validator methods to validate
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.send('Thank you for your registration!');
    } else {
      res.render('form', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);



module.exports = router;