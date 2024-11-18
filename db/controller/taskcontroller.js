const task = require("../../models/taskmodel.js");

const getalltasks = async (req, res) => {
  try {
    const Task = await task.find({});
    res.send(Task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getsingletask = async (req, res) => {
  try {
    const { id } = req.params;
    const Task = await task.findById(id);
    res.status(200).json(Task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createtask = async (req, res) => {
  try {
    const Task = await task.create(req.body);
    res.status(200).json(Task);
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updatetask = async (req, res) => {
  try {
    const { id } = req.params;

    const Task = await task.findByIdAndUpdate(id, req.body);

    if (!Task) {
      return res.status(404).json({ message: "task not found" });
    }

    const updatedtask = await task.findById(id);

    res.status(200).json(updatedtask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletetask = async (req, res) => {
  try {
    const { id } = req.params;
    const Task = await task.findByIdAndDelete(id);
    if (!Task) {
      return res.status(404).json({ message: "task not found" });
    }
    res.status(200).json({ message: "task Deleted Successfully " });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get task by title

//search category by title
const taskbyname = async (req, res) =>{
  
  try {
    const { title } = req.query;
    // console.log(req.query)

    const Task = await task.findOne({ title: { $regex: title, $options: 'i' } });

    if (!task) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(Task);
  } catch (error) {
        res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getalltasks,
  getsingletask,
  updatetask,
  deletetask,
  createtask,
  taskbyname

};
