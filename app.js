require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const path = require("path");



const connectDB = require("./config/db");
require("./config/passport")(passport);

const app = express();

// DB connect
connectDB();

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EJS setup
app.set("view engine", "ejs");


// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Flash
app.use(flash());

const authRoutes = require("./routes/authRoutes");
const studyRoutes = require("./routes/studyRoutes");

app.use("/", studyRoutes);

app.use("/", authRoutes);

// Routes (abhi empty hai)
app.get("/", (req, res) => {
  res.send("Study Planner Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});