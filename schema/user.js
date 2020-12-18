"use strict";
/*
 *  Defined the Mongoose Schema and return a Model for a User
 */
/* jshint node: true */

let mongoose = require("mongoose");

// create a schema
let userSchema = new mongoose.Schema({
  first_name: String, // First name of the user.
  last_name: String, // Last name of the user.
  location: String, // Location  of the user.
  description: String, // A brief user description
  occupation: String, // Occupation of the user.
});

// the schema is useless so far
// we need to create a model using it
let User = mongoose.model("User", userSchema);

// make this available to our users in our Node applications
module.exports = User;
