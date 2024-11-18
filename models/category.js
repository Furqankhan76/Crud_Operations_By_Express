const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);


const category = mongoose.model("category", categorySchema);

module.exports = category;