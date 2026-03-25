const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  type: String, // "pdf", "link", "note"
  title: String,
  link: String,
  content: String,
  file: String
});

module.exports = mongoose.model("Resource", resourceSchema);