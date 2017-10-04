var Thing = require("../models/thing.js");

exports.getThings = function(req, res) {
  console.log('Getting the things.\n');
  Thing.find({}, function(err, things) {
    if (err) throw err;
    res.send(things);
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
  res.json({ message: 'Deleted' });
};
