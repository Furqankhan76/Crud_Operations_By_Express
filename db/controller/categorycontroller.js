const category = require("../../models/category.js");


// Create  a new category
const createCategory = async (req, res) => {
  try {
    const Category = await category.create(req.body);
    res.status(200).json(Category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all categories
const getAllCategories  = async (req,res) => {
    try {
        const  fk = await category.find({})
        res.status(200).json(fk)
    } catch (error) {
            res.status(500).json({ message: error.message });

    }
}
 
// Get a specific category by ID
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const Category = await category.findById(id);
    res.status(200).json(Category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//search category by title
const catbyname = async (req, res) =>{
  
  try {
    const { title } = req.query;
    // console.log(req.query)

    const Category = await category.findOne({ title: { $regex: title, $options: 'i' } });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(Category);
  } catch (error) {
        res.status(500).json({ message: error.message });
  }
}

// Update a category
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const Category = await category.findByIdAndUpdate(id, req.body);

    if (!Category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const updatedCategory = await category.findById(id);

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const Category = await category.findByIdAndDelete(id);
    if (!Category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category Deleted Successfully " });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
createCategory,
deleteCategory,
updateCategory,
getAllCategories,
getCategoryById,
catbyname
}
