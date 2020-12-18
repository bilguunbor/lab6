"use strict";

/* jshint node: true */

// grab the things we need
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// create a schema
let schemaInfo = new Schema({
  version: String,
  load_date_time: { type: Date, default: Date.now },
});

// the schema is useless so far
// we need to create a model using it
let SchemaInfo = mongoose.model("SchemaInfo", schemaInfo);

// make this available
module.exports = SchemaInfo;
