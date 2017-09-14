var express = require('express');
var router = express.Router();

var thingController = require('../controllers/thingController.js');

router.get('/thing', thingController.getThings);
router.post('/thing', thingController.createThing);

module.exports = router;
