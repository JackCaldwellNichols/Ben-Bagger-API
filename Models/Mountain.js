const mongoose = require("mongoose");

const MountainSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  elevation: { type: String, required: true, unique: false },
  lat: { type: Number, required: false, unique: false },
  lng: { type: Number, required: false, unique: false },
});

module.exports = mongoose.model("Mountains", MountainSchema);
