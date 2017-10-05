var express = require('express');
var router = express.Router();

var thingController = require('../controllers/thingController.js');

router.get('/thing', thingController.getAllThings);
router.get('/thing/:id', thingController.getThing);
router.post('/thing', thingController.createThing);
router.delete('/thing/:id', thingController.deleteThing);

module.exports = router;
