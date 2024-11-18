const express = require("express");
const router = express.Router();
// const category = require("../controller/categorycontroller.js");
const {
  createCategory,
  deleteCategory,
  updateCategory,
  getAllCategories,
  getCategoryById,
  catbyname,
} = require("../db/controller/categorycontroller.js");


//Category name
router.get('/search',catbyname)


router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);
router.post("/", createCategory);

module.exports = router;