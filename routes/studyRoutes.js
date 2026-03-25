
const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");
const resourceController = require("../controllers/resourceController");
const gradeController = require("../controllers/gradeController");

const dashboardController = require("../controllers/dashboardController");

const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../config/multer");

/* ===== DASHBOARD ===== */
router.get("/dashboard", authMiddleware, dashboardController.getDashboard);

/* ===== PLANNER ===== */
router.get("/planner", authMiddleware, taskController.getTasks);
router.post("/add", authMiddleware, taskController.addTask);
router.get("/delete/:id", authMiddleware, taskController.deleteTask);

/* ===== POMODORO ===== */
router.get("/pomodoro", authMiddleware, (req, res) => {
  res.render("pomodoro");
});

/* ===== RESOURCES ===== */
router.get("/resources", authMiddleware, resourceController.getResources);
router.post("/add-resource", authMiddleware, upload.single("file"), resourceController.addResource);
router.get("/delete-resource/:id", authMiddleware, resourceController.deleteResource);

/* ===== GRADES ===== */
router.get("/grades", authMiddleware, gradeController.getGrades);
router.post("/add-grade", authMiddleware, gradeController.addGrade);
router.get("/delete-grade/:id", authMiddleware, gradeController.deleteGrade);
router.get("/edit-grade/:id", authMiddleware, gradeController.editGradePage);

/* ===== GRAPH ===== */
router.get("/graph", authMiddleware, (req, res) => {
  res.render("graph");
});

/* ===== AI SCHEDULER (NEW PAGE) ===== */
router.get("/scheduler", authMiddleware, (req, res) => {
  res.render("schedule");
});

module.exports = router;