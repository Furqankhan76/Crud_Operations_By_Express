const express = require("express");
const router = express.Router();
const task = require("../models/taskmodel.js");
const {
  getalltasks,
  getsingletask,
  updatetask,
  deletetask,
  createtask,
  taskbyname
} = require("../db/controller/taskcontroller.js");



router.get("/search", taskbyname);
router.get("/", getalltasks);
router.get("/:id", getsingletask);
router.delete("/:id", deletetask);
router.put("/:id", updatetask);
router.post("/", createtask);

module.exports = router;
