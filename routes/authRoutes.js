const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController");

// Pages
router.get("/", (req, res) => res.render("auth/login"));
router.get("/signup", (req, res) => res.render("auth/signup"));

// Signup
router.post("/signup", authController.signup);

// Login
router.post("/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/"
  })
);

// Dashboard
router.get("/dashboard", (req, res) => {
  if (!req.isAuthenticated()) return res.redirect("/");
  res.render("dashboard");
});

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router;