const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  subject: String,
  marks: Number
});

module.exports = mongoose.model("Grade", gradeSchema);