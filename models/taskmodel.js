const mongoose = require("mongoose");
const taskschema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
},{Timestamp:true});



const task = mongoose.model("task", taskschema);

module.exports = task;
