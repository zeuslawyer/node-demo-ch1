const express = require('express');
const router = express.Router();


//middleware aka handler for the default index '/' path aka route
router.get('/', (req, res, nex) => {
    res.render('form',  {title: 'Registration Form' }); // render the file layout in the /views folder
});

module.exports = router;