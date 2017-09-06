var express = require('express');
var router = express.Router();

var thingController = require('../controllers/thingController.js');

router.get('/', thingController.thing_list);
