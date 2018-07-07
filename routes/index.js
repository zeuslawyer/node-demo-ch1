const express = require('express');
const router = express.Router();


//middleware aka handler for the default index '/' path aka route
router.get('/', (req, res, nex) => {
    res.send('If you\'re seeing this you\'re golden, mate!');
});

module.exports = router;