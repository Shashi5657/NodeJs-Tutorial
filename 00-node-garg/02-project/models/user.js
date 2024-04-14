const mongoose = require("mongoose");

//created a basic structure for our data
const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  });
  
  //here we r creating a model here
  //here we gave it a name user & passed the schema userSchema
  //now using this User object we can interact with mongoose
  
  const User = mongoose.model("user", userSchema);

  module.exports = User