const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }

}, {timestamps: true});
module.exports = mongoose.model("User", userSchema);
