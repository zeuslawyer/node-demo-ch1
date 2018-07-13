const express = require('express');
const router = express.Router();

const path = require('path');
const auth = require ('http-auth');

//point auth to file that contains login+pwd which is in the ROOT folder
const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd'),
  });

//get /parking
router.get('/', (req, res, nex) => {
    res.sendFile('/Users/zubinpratap/Documents/DevProjects/Practice_Projects/WebDevTutes/node-demo-ch1/views/ParkingForm.html'); 
});

module.exports = router;