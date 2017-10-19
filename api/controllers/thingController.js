var Thing = require("../models/thing.js");

exports.getAllThings = function(req, res) {
  console.log('Getting all the things.\n');

  if (req.query.q) {
    Thing.find({name: new RegExp(req.query.q, 'i')}, function(err, things) {
      if (err) throw err;
      res.send(things);
    });
  } else {
    Thing.find({}, function(err, things) {
      if (err) throw err;
      res.send(things);
    });
  }
};

exports.getThing = function(req, res) {
  console.log('Getting one thing.\n');
  Thing.findById(req.params.id, function(err, thing) {
    if (err) throw err;
    res.send(thing);
  });
};

exports.createThing = function(req, res) {
  console.log("Posting a new thing.");
  var newThing = {
    name: req.body.name,
    description: req.body.description
  };
  Thing.create(newThing);
  res.json(req.body);
};

exports.deleteThing = function(req, res) {
  console.log("Deleting a thing.");
  var thingId = req.params.id;
  Thing.remove({_id: thingId}, function(err, thing) {
    if (err) return res.send(err);
  });
  res.json({ _id: thingId });
};

exports.updateThing = function(req, res) {
  console.log("Updating a thing.");
  var thingId = req.params.id;
  var body = req.body;
  Thing.update({_id: thingId}, {$set: body}, function(err, thing) {
    if (err) return res.send(err);
  });
  res.json(req.body);
};
