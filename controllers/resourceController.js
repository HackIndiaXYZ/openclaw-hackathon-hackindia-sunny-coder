const Resource = require("../models/Resource");

exports.getResources = async (req, res) => {
  const resources = await Resource.find();
  res.render("resources", { resources });
};

exports.addResource = async (req, res) => {
  const { type, title, link, content } = req.body;

  let file = "";
  if (req.file) {
    file = req.file.filename;
  }

  await Resource.create({
    type,
    title,
    link,
    content,
    file
  });

  res.redirect("/resources");
};

exports.deleteResource = async (req, res) => {
  const id = req.params.id;

  await Resource.findByIdAndDelete(id);

  res.redirect("/resources");
};