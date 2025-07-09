var mongoose = require("mongoose");

var Schema = mongoose.Schema;

module.exports = mongoose.model(
  "TripData",
  new Schema({
    imageURL: String,
    heading: String,
    text: String,
  }),
  (collection = "TripData")
);
