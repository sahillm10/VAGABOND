var mongoose = require("mongoose");

var Schema = mongoose.Schema;

module.exports = mongoose.model(
  "TravelDiary",
  new Schema({
    Destination: String,
    Experience: String,
    Review: String,
    Comapanions: String,
    Date: String,
  }),
  (collection = "TravelDiary")
);
