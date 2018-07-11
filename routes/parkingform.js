const express = require('express');
const router = express.Router();


//get /parking
router.get('/', (req, res, nex) => {
    res.sendFile('/Users/zubinpratap/Documents/DevProjects/Practice_Projects/WebDevTutes/node-demo-ch1/views/ParkingForm.html'); 
});

module.exports = router;