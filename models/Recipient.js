const mongoose = require("mongoose"); // importing mongoose lib
const { Schema } = mongoose; // distructuring Schema prop and assign it to Schema var

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

module.exports = recipientSchema;
