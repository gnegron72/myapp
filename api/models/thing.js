const mongoose = require("mongoose");
const thingSchema = new mongoose.Schema (
  {
    name: String,
    description: String
  }
);
module.exports = mongoose.model("Thing", thingSchema);
