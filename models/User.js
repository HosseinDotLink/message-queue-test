const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null
  },
  lastName: {
    type: String,
    default: null
  },
  mobileNumber: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("User", userSchema);