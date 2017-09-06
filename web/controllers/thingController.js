var Thing = require("../models/thing.js");

exports.thing_list = function(req, res) {
  console.log('Getting the things.\n');
  Thing.find({}, function(err, things) {
    if (err) throw err;
    res.send(things);
  });
};
