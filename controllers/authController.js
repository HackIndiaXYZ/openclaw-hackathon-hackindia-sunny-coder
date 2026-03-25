const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.send("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword
  });

  await newUser.save();

  res.redirect("/");
};