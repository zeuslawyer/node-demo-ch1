const express = require('express');
const router = express.Router();


//middleware aka handler for the default index '/' path aka route

//get
router.get('/', (req, res, nex) => {
    res.render('form',  {title: 'Registration',  }); // render the file layout called 'form' in the /views folder
});

//post
router.post('/', (req, res, next) => {
    console.log(req.body)
    res.render('form', {title: 'Resistration -POST'} );
});



module.exports = router;