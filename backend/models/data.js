const mongoose = require("mongoose");

const data = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Name must be provided"],
  },
  content: {
    type: String,
    required: [true, "email must be provided"],
  },
});
const Data = mongoose.model("keep", data);
module.exports = Data;
