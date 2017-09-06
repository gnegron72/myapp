'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Connect to DB
mongoose.connect("mongodb://db/things");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// App
const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log('Getting the things.\n');
  Thing.find({}, function(err, things) {
    if (err) throw err;
    res.send(things);
  });
});

app.post('/', function(req, res) {
  console.log("Posting a new thing.");
  var newThing = {
    name: req.body.name,
    description: req.body.description
  };
  Thing.create(newThing);
  res.json(req.body);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
