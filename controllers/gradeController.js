const Grade = require("../models/Grade");

// SHOW
exports.getGrades = async (req, res) => {
  const grades = await Grade.find();
  res.render("grades", { grades });
};

// ADD
exports.addGrade = async (req, res) => {
  const { subject, marks } = req.body;
  await Grade.create({ subject, marks });
  res.redirect("/grades");
};

// DELETE
exports.deleteGrade = async (req, res) => {
  await Grade.findByIdAndDelete(req.params.id);
  res.redirect("/grades");
};

// EDIT PAGE (NEW)
exports.editGradePage = async (req, res) => {
  const grade = await Grade.findById(req.params.id);
  res.render("editGrade", { grade });
};