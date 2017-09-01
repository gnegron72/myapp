const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thingoneSchema = new Schema(
  {
    name: String,
    description: String
  }
);

module.exports = mongoose.model("Thing", thingoneSchema);
