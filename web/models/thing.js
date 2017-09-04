const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thingoneSchema = new Schema(
  {
    name: String,
    description: String
  }
);

module.exports.Thing = class {


  const model = mongoose.model("Thing", thingoneSchema);

}
