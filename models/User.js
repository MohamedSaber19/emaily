const mongoose = require("mongoose"); // importing mongoose lib
const { Schema } = mongoose; // distructuring Schema prop and assign it to Schema var

const userSchema = new Schema({
  // declare a new instance of Schema with pre-defined properties
  googleId: String,
  name: String,
  credits: {
    type: Number,
    default: 0,
  },
});

mongoose.model("users", userSchema); // create a new model or "collection" called 'users' with userSchema
