const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');

const thingSchema = new mongoose.Schema (
  {
    name: String,
    description: String
  }
);

thingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Thing", thingSchema);
