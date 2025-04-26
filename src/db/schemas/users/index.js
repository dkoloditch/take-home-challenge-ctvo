const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String },
  age: { type: Number },
  email: { type: String },
});

UserSchema.statics.isValidId = (id) => {
  return id.toString().match(/\d{1,}/gi);
};

module.exports = UserSchema;
